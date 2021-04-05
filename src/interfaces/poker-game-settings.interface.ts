import { PokerLimitTypeEnum } from '../enums/poker-limit-type.enum'

export interface PokerLimitSettings {
    ante: number
    blindsUp: number
    smallBlind: number
    bigBlind: number
    limit: PokerLimitTypeEnum
}
