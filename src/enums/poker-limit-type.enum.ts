import { registerEnumType } from '@nestjs/graphql'

export enum PokerLimitTypeEnum {
    LIMIT = 'LIMIT',
    POTLIMIT = 'POTLIMIT',
    UNLIMIT = 'UNLIMIT',
}

registerEnumType(PokerLimitTypeEnum, { name: 'PokerLimitType' })
