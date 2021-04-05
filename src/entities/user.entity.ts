import { CommonBaseEntity } from '@banxe/common'
import { Column, Entity } from 'typeorm'
import { UserRoleEnum } from '../enums/user-role.enum'
import { GameEnum } from '../enums/game.enum'
import { ClubEntity } from './club.entity'

@Entity('users')
export class UserEntity extends CommonBaseEntity {

    @Column()
    nickName: string

    @Column()
    appleId: string

    @Column()
    email: string

    @Column()
    avatar: string

    @Column()
    isOnline: boolean

    @Column()
    isApproved: boolean

    @Column()
    isBanned: boolean

   @Column({
        type: 'enum',
        enum: UserRoleEnum,
        default: UserRoleEnum.PLAYER,
    })
    role: UserRoleEnum

    @Column({ array: true })
    clubsMember: ClubEntity[]

    @Column({ array: true })
    clubsOwner: ClubEntity[]

}
