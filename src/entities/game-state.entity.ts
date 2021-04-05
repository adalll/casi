import { CommonBaseEntity } from '@banxe/common'
import { Column, Entity } from 'typeorm'
import { Card } from '../interfaces/card.interface'
import { PlayerEntity } from './player.entity'
import { SidePot } from '../interfaces/side-pot.interface'
import { SessionStateEnum } from '../enums/session-state.enum'
import { GameAction } from '../interfaces/game-action.interface'

@Entity('game_states')
export class GameState extends CommonBaseEntity {

    @Column()
    gameProgressiveId: number

    @Column()
    handProgressiveId: number

    @Column()
    tournamentId: string

    @Column({ array: true })
    players: PlayerEntity

    @Column()
    callAmount: number

    @Column()
    pot: number

    @Column({
        name: 'side_pots',
        array: true,
    })
    sidePots: SidePot

    @Column({
        name: 'common_cards',
        array: true,
    })
    commonCards: Card[]

    @Column({
        type: 'enum',
        enum: SessionStateEnum,
        default: SessionStateEnum.PREFLOP,
    })
    session: SessionStateEnum

    @Column({
        name: 'spin_count',
    })
    spinCount: number

    @Column({
        name: 'dealer_button_round',
    })
    dealerButtonRound: number

    @Column({
        name: 'initial_dealer_button_index',
    })
    initialDealerButtonIndex: number

    @Column({
        name: 'small_blind',
    })
    smallBlind: number

    @Column()
    ante: number

    @Column({
        array: true,
    })
    deck: Card[]

    @Column({
        array: true,
    })
    actions: GameAction[]
}
