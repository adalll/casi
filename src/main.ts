import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'
import { Room, Server, LobbyRoom, RelayRoom  } from "colyseus"
import { ChatRoom } from "src/rooms/01-chat-room"
import * as path from 'path'
import * as serveIndex from 'serve-index'
import * as express from 'express'
import { monitor } from '@colyseus/monitor'
import { StateHandlerRoom } from './rooms/02-state-handler'
import { AuthRoom } from './rooms/03-auth'
import { ReconnectionRoom } from './rooms/04-reconnection'
import { CustomLobbyRoom } from './rooms/07-custom-lobby-room'


const logger = new Logger('AppBootstrap')

const DEFAULT_APP_HORT = 'localhost'
const DEFAULT_APP_PORT = 2567

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule)

    const configService = app.get(ConfigService)

    const port = configService.get('PORT') || DEFAULT_APP_PORT
    const hostname = configService.get('HOST') || DEFAULT_APP_HORT

    const gameServer = new Server()

    gameServer.define("lobby", LobbyRoom)

    gameServer.define("chat", ChatRoom)
        .enableRealtimeListing()

    gameServer.define("relay", RelayRoom, { maxClients: 4 })
        .enableRealtimeListing()

    // Register ChatRoom with initial options, as "chat_with_options"
    // onInit(options) will receive client join options + options registered here.
    gameServer.define("chat_with_options", ChatRoom, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        custom_options: "you can use me on Room#onCreate"
    })

    gameServer.define("state_handler", StateHandlerRoom)
        .enableRealtimeListing()

    gameServer.define("auth", AuthRoom)
        .enableRealtimeListing()

    gameServer.define("reconnection", ReconnectionRoom)
        .enableRealtimeListing()

    gameServer.define("custom_lobby", CustomLobbyRoom)

    // attach Colyseus into the existing http server from NestJS
    gameServer.attach({ server: app.getHttpServer() })

    app.use('/', serveIndex(path.join(process.cwd(), "src/static"), {'icons': true}))
    app.use('/', express.static(path.join(process.cwd(), "src/static")))

    // (optional) attach web monitoring panel
    app.use('/colyseus', monitor())

    gameServer.onShutdown(function() {
        console.log(`game server is going down.`)
    })

    await app.listen(port, hostname, () =>
        logger.log(`Server running at ${hostname}:${port}`),
    )
}
bootstrap()
