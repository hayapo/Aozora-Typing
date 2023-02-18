import { TypingDataType } from "../../types/typingDataType"
import { TypingArea } from "../organisms/TypingArea"

type Props = {
  typeData: TypingDataType
  isFinished: boolean,
  setIsFinished: (isFinished: boolean) => void
  setCorrectTypeAmount: (correctTypeAmount: React.SetStateAction<number>) => void
  setAllTypeAmount: (allTypeAmount: React.SetStateAction<number>) => void
  setTypingDuration: (typingDuration: number) => void
}

export const TypingTemplate: React.FC<Props> = ({
  typeData,
  isFinished,
  setIsFinished,
  setCorrectTypeAmount,
  setAllTypeAmount,
  setTypingDuration
}) => {
  return (
    <TypingArea
      typeData={ typeData }
      isFinished = { isFinished }
      setIsFinished = { setIsFinished }
      setCorrectTypeAmount = { setCorrectTypeAmount }
      setAllTypeAmount = { setAllTypeAmount }
      setTypingDuration = { setTypingDuration }
    />
  )
}