import { CommonBaseEntity } from '@banxe/common'
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { UserEntity } from './user.entity'
import { PlayerStateEnum } from '../enums/player-state.enum'
import { Card } from '../interfaces/card.interface'

@Entity('players')
export class PlayerEntity extends CommonBaseEntity {

    @OneToOne(
        () => UserEntity,
        (user) => user.id,
    )
    @JoinColumn()
    user: UserEntity

    @Column({
        name: 'socket_id',
    })
    socketId: string

    @Column({
        type: 'enum',
        enum: PlayerStateEnum,
        default: PlayerStateEnum.ACTIVE,
    })
    state: PlayerStateEnum

    @Column({ array: true })
    cards: Card[]

    @Column({ default: 0 })
    chips: number

    @Column({
        default: 0,
        name: 'chips_bet',
    })
    chipsBet: number

    @Column({
        default: false,
        name: 'all_in',
    })
    allIn: boolean

    @Column({
        default: false,
        name: 'big_blind',
    })
    bigBlind: boolean

    @Column({
        default: false,
    })
    dealer: boolean
   }
