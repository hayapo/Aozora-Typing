import { useState, useRef } from "react"
import { TypedTextCorrect } from "../molecules/TypedTextCorrect"
import { TypedTextMiss } from "../molecules/TypedTextMiss"
import { YetTypedText } from "../molecules/YetTypedText"
import { NowTypingText } from "../molecules/NowTypingText"

type Props = {
  isFinished: boolean,
  setIsFinished: (isFinished: boolean) => void
  setCorrectTypeAmount: (correctTypeAmount: React.SetStateAction<number>) => void
  setAllTypeAmount: (allTypeAmount: React.SetStateAction<number>) => void
  setTypingDuration: (typingDuration: number) => void
}

export const TypingArea: React.FC<Props> = ({...props}) => {
  const toTypeText = "type this text"
  const typeTextLength = toTypeText.length
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const [isStarted, setIsStarted] = useState(false)

  const [isMissed, setIsMissed] = useState(false)

  const timerRef = useRef<number>(0)

  const handleKeyInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (props.isFinished) return
    if (!isStarted) {
      setIsStarted(true)
      const startTime = new Date().getTime()
      timerRef.current = setInterval(() => {
        props.setTypingDuration(new Date().getTime() - startTime)
      }, 10)
    }
    props.setAllTypeAmount(prevAllTypeAmount => prevAllTypeAmount + 1)
    if (e.key === toTypeText[currentIndex]) {
      setIsMissed(false)
      setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)
      props.setCorrectTypeAmount(prevCorrectTypeAmount=> prevCorrectTypeAmount + 1)
      if (currentIndex + 1 >= typeTextLength) {
        props.setIsFinished(true)
        clearInterval(timerRef.current)
      }
    } else {
      setIsMissed(true)
    }
  }

  return (
    <>
      <div tabIndex={0} onKeyDown={(e) => handleKeyInput(e)} className="inline outline-none">
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
