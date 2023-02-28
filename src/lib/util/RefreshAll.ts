import { SetStateAction } from "react"
import { TypingStateType, TypingResultType } from "../../types/TypingTypes"
import { typingData } from "../../typingtexts/typingData"

export const RefreshAll = (
  setTypingState: React.Dispatch<SetStateAction<TypingStateType>>,
  setTypingResult: React.Dispatch<SetStateAction<TypingResultType>>
) => {
  setTypingState({
    typeData: typingData[Math.floor(Math.random() * typingData.length)],
    line: 0,
    letterIndex: 0,
    alphabetIndex: 0,
    inlineIndex: 0,
    displayIndex: 0,
    isStarted: false,
    isMissed: false,
  })

  setTypingResult({
    isFinished: false,
    correctAmount: 0,
    allAmount: 0,
    startTime: 0,
    finishTime: 0,
  })
}
