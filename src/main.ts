import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Logger } from '@nestjs/common'

const logger = new Logger('AppBootstrap')

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const configService = app.get(ConfigService)

    const port = configService.get('PORT') || 3000
    const hostname = configService.get('HOST') || 'localhost'

    await app.listen(port, hostname, () =>
        logger.log(`Server running at ${hostname}:${port}`),
    )
}
bootstrap()
