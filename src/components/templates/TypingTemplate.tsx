import { SetStateAction } from "react"
import { TypingArea } from "../organisms"
import { TypingResultType } from "../../types/TypingTypes"
import { WorkDetailType } from "../../types/WorkDetailType"

type Props = {
  typingResult: TypingResultType
  setTypingResult: React.Dispatch<SetStateAction<TypingResultType>>
  setWorkDetail: React.Dispatch<SetStateAction<WorkDetailType>>
}

export const TypingTemplate: React.FC<Props> = ({ typingResult, setTypingResult, setWorkDetail }) => {
  return <TypingArea typingResult={typingResult} setTypingResult={setTypingResult} setWorkDetail={setWorkDetail} />
}
