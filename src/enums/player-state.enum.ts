import { registerEnumType } from '@nestjs/graphql'

export enum PlayerStateEnum {
    ACTIVE = 'ACTIVE',
    FOLD = 'FOLD',
    OUT = 'OUT',
}

registerEnumType(PlayerStateEnum, { name: 'PlayerState' })
