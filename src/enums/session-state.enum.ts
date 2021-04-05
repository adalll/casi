import { registerEnumType } from '@nestjs/graphql'

export enum SessionStateEnum {
    PREFLOP = 'PREFLOP',
    FLOP = 'FLOP',
    TURN = 'TURN',
    RIVER = 'RIVER',
}

registerEnumType(SessionStateEnum, { name: 'SessionState' })
