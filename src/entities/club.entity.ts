import { CommonBaseEntity } from '@banxe/common'
import { Column, Entity, OneToMany, OneToOne } from 'typeorm'
import { UserEntity } from './user.entity'
import { GameEnum } from '../enums/game.enum'
import { RoomEntity } from './room.entity'

@Entity('clubs')
export class ClubEntity extends CommonBaseEntity {

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    owner: UserEntity

    @Column({ array: true })
    players: UserEntity[]

    @Column({ array: true })
    games: GameEnum[]

    @Column({ array: true })
    rooms: RoomEntity[]

}
