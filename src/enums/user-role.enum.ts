import { registerEnumType } from '@nestjs/graphql'

export enum UserRoleEnum {
    ADMINISTRATOR = 'ADMINISTRATOR',
    OWNER = 'OWNER',
    PLAYER = 'PLAYER',
}

registerEnumType(UserRoleEnum, { name: 'UserRole' })
