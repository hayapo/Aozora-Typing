import { useState, useRef } from "react"
import { TypedTextCorrect } from "../molecules/TypedTextCorrect"
import { TypedTextMiss } from "../molecules/TypedTextMiss"
import { YetTypedText } from "../molecules/YetTypedText"
import { NowTypingText } from "../molecules/NowTypingText"

export const TypingArea: React.FC = () => {
  const toTypeText = "type this text"
  const typeTextLength = toTypeText.length
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [correctTypeAmount, setCorrectTypeAmount] = useState(0)
  const [allTypeAmount, setAllTypeAmount] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const accuracyRate = (correctTypeAmount / allTypeAmount) * 100

  const [isMissed, setIsMissed] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const handleKeyInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isFinished) return
    if (!isStarted) {
      setIsStarted(true)
    }
    setAllTypeAmount(allTypeAmount + 1)
    if (e.key === toTypeText[currentIndex]) {
      setIsMissed(false)
      setCurrentIndex(currentIndex + 1)
      setCorrectTypeAmount(correctTypeAmount + 1)
      if (currentIndex + 1 >= typeTextLength) {
        setIsFinished(true)
      }
    } else {
      setIsMissed(true)
    }
  }

  return (
    <>
      <div tabIndex={0} onKeyDown={(e) => handleKeyInput(e)} className="outline-none">
        <TypedTextCorrect typedTextCorrect={toTypeText.slice(0,currentIndex)} />
        { isMissed ? (
          <TypedTextMiss typedTextMiss={toTypeText[currentIndex]} />
        ) : (
          <NowTypingText nowTypingText={toTypeText[currentIndex]} />
        )
        }
        <YetTypedText yetTypedText={toTypeText.slice(currentIndex + 1, toTypeText.length)} />
      </div>
    </>
  )
}
