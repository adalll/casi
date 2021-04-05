import { registerEnumType } from '@nestjs/graphql'

export enum GameEnum {
    TEXAS_HOLDEM_POKER = 'TEXAS_HOLDEM_POKER',
    OMAHA_HOLDEM_POKER = 'OMAHA_HOLDEM_POKER',
}

registerEnumType(GameEnum, { name: 'Game' })
