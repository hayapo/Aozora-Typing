import { useState } from "react"
import { Text } from "../atoms/Text"
import { TypingArea } from "../organisms/TypingArea"

export const TypingTemplate: React.FC = () => {
  const [isFinished, setIsFinished] = useState(false)
  const [correctTypeAmount, setCorrectTypeAmount] = useState(0)
  const [allTypeAmount, setAllTypeAmount] = useState(0)
  const [typingDuration, setTypingDuration] = useState(0)
  const typyingDurationSecond = typingDuration / 1000
  const accuracyRate = Math.floor(correctTypeAmount/allTypeAmount * 100)
  
  return (
    <div>
      {isFinished ? (
        <div>
          <div>
            <Text text={`Correct Type: ${correctTypeAmount.toString()}`} />
          </div>
          <div>
            <Text text={`All Type: ${allTypeAmount.toString()}`} />
          </div>
          <div>
            <Text text={`Accuracy Rate: ${accuracyRate.toString()}%`} />
          </div>
          <div>
            <Text text={`Duration: ${typyingDurationSecond.toString()}s`} />
          </div>
        </div>
      ) : (
        < TypingArea
          isFinished = { isFinished }
          setIsFinished = { setIsFinished }
          setCorrectTypeAmount = { setCorrectTypeAmount }
          setAllTypeAmount = { setAllTypeAmount }
          setTypingDuration = { setTypingDuration }
        />
      )
      }
    </div>
  )
}