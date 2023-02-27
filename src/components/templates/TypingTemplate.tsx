import { WorkDetailType } from "../../types/workDetailType"
import { TypingArea } from "../organisms/TypingArea"

type Props = {
  isFinished: boolean,
  setIsFinished: (isFinished: boolean) => void
  setCorrectTypeAmount: (correctTypeAmount: React.SetStateAction<number>) => void
  setAllTypeAmount: (allTypeAmount: React.SetStateAction<number>) => void
  setTypingDuration: (typingDuration: React.SetStateAction<number>) => void
  setWorkDetail: (workDetail: React.SetStateAction<WorkDetailType>) => void
}

export const TypingTemplate: React.FC<Props> = ({
  isFinished,
  setIsFinished,
  setCorrectTypeAmount,
  setAllTypeAmount,
  setTypingDuration,
  setWorkDetail
}) => {
  return (
    <TypingArea
      isFinished={isFinished}
      setIsFinished={setIsFinished}
      setCorrectTypeAmount={setCorrectTypeAmount}
      setAllTypeAmount={setAllTypeAmount}
      setTypingDuration={setTypingDuration}
      setWorkDetail={setWorkDetail}
    />
  )
}