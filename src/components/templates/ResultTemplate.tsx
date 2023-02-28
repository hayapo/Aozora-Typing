import { SetStateAction } from "react"
import { TypingResult } from "../organisms"
import { TypingResultType } from "../../types/TypingTypes"
import { WorkDetailType } from "../../types/WorkDetailType"

type Props = {
  typingResult: TypingResultType
  setTypingResult: React.Dispatch<SetStateAction<TypingResultType>>
  workDetail: WorkDetailType
}

export const ResultTemplate: React.FC<Props> = ({ typingResult, setTypingResult, workDetail }) => {
  return <TypingResult typingResult={typingResult} setTypingResult={setTypingResult} workDetail={workDetail} />
}
