import { TypingDataType } from "../../types/typingDataType"
import { TypingResult } from "../organisms/TypingResult"

type Props = {
  typeData: TypingDataType
  correctTypeAmount: number
  allTypeAmount: number
  typingDuration: number
}

export const ResultTemplate: React.FC<Props> = ({
  typeData,
  correctTypeAmount,
  allTypeAmount,
  typingDuration
}) => {
  return (
    <TypingResult 
      typeData={typeData}
      correctTypeAmount={correctTypeAmount}
      allTypeAmount={allTypeAmount}
      typingDuration={typingDuration}
    />
  )
}