export type TypingDataType = {
  id: number
  title: string
  author: string
  kanjiText: string
  hiraganaText: string
  wakatiRomajiText: string
  romajiText: string
  url: string
}

export type TypingResultType = {
  isFinished: boolean
  correctAmount: number
  allAmount: number
  duration: number
}

export type TypingStateType = {
  typeData: TypingDataType
  line: number
  letterIndex: number
  alphabetIndex: number
  inlineIndex: number
  displayIndex: number
  isStarted: boolean
  isMissed: boolean
}
