import { WorkDetailType } from "../../types/workDetailType"
import { TypingResult } from "../organisms/TypingResult"

type Props = {
  correctTypeAmount: number
  allTypeAmount: number
  typingDuration: number,
  workDetail: WorkDetailType
}

export const ResultTemplate: React.FC<Props> = ({
  correctTypeAmount,
  allTypeAmount,
  typingDuration,
  workDetail
}) => {
  return (
    <TypingResult
      correctTypeAmount={correctTypeAmount}
      allTypeAmount={allTypeAmount}
      typingDuration={typingDuration}
      workDetail={workDetail}
    />
  )
}