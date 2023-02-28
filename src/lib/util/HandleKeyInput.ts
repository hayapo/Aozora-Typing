import React, { SetStateAction } from "react"
import { TypingStateType, TypingResultType } from "../../types/TypingTypes"

export const handleKeyInput = (
  e: React.KeyboardEvent<HTMLDivElement>,
  textSplitByLine: string[],
  textSplitByLetter: string[][],
  displayTextSplitByLine: string[],
  typingState: TypingStateType,
  typingResult: TypingResultType,
  setTypingState: React.Dispatch<SetStateAction<TypingStateType>>,
  setTypingResult: React.Dispatch<SetStateAction<TypingResultType>>
) => {
  if (typingResult.isFinished) return
  if (!typingState.isStarted) {
    setTypingState((prev) => ({
      ...prev,
      isStarted: true,
    }))
    setTypingResult((prev) => ({
      ...prev,
      startTime: new Date().getTime(),
    }))
  }

  setTypingResult((prev) => ({
    ...prev,
    allAmount: prev.allAmount + 1,
  }))

  if (e.key === textSplitByLetter[typingState.line][typingState.letterIndex][typingState.alphabetIndex]) {
    setTypingState((prev) => ({
      ...prev,
      alphabetIndex: prev.alphabetIndex + 1,
      inlineIndex: prev.inlineIndex + 1,
      isMissed: false,
    }))
    setTypingResult((prev) => ({
      ...prev,
      correctAmount: prev.correctAmount + 1,
    }))

    if (typingState.alphabetIndex + 1 >= textSplitByLetter[typingState.line][typingState.letterIndex].length) {
      setTypingState((prev) => ({
        ...prev,
        letterIndex: prev.letterIndex + 1,
        inlineIndex: prev.inlineIndex + 1,
        isMissed: false,
      }))

      const firstAlphabet = textSplitByLetter[typingState.line][typingState.letterIndex][0]
      const secontAlphabet = textSplitByLetter[typingState.line][typingState.letterIndex][1]
      if (
        firstAlphabet === secontAlphabet &&
        displayTextSplitByLine[typingState.line][typingState.displayIndex] === "っ"
      ) {
        setTypingState((prev) => ({
          ...prev,
          displayIndex: prev.displayIndex + 2,
        }))
      } else {
        setTypingState((prev) => ({
          ...prev,
          displayIndex: prev.displayIndex + 1,
        }))
      }

      setTypingState((prev) => ({
        ...prev,
        alphabetIndex: 0,
      }))

      if (typingState.letterIndex + 1 >= textSplitByLetter[typingState.line].length) {
        setTypingState((prev) => ({
          ...prev,
          line: prev.line + 1,
          letterIndex: 0,
          inlineIndex: 0,
          displayIndex: 0,
        }))

        if (typingState.line + 1 >= textSplitByLine.length) {
          setTypingResult((prev) => ({
            ...prev,
            isFinished: true,
            finishTime: new Date().getTime(),
          }))
        }
      }
    }
  } else {
    setTypingState((prev) => ({
      ...prev,
      isMissed: true,
    }))
  }
}
