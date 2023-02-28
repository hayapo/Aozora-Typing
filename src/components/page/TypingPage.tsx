import { useState } from "react"
import { TypingTemplate, ResultTemplate } from "../templates"
import { TypingResultType } from "../../types/TypingTypes"

export const TypingPage: React.FC = () => {
  const [typingResult, setTypingResult] = useState<TypingResultType>({
    isFinished: false,
    correctAmount: 0,
    allAmount: 0,
    duration: 0,
  })
  const [workDetail, setWorkDetail] = useState({
    title: "",
    author: "",
    url: "",
  })

  return (
    <div>
      {typingResult.isFinished ? (
        <ResultTemplate typingResult={typingResult} setTypingResult={setTypingResult} workDetail={workDetail} />
      ) : (
        <TypingTemplate typingResult={typingResult} setTypingResult={setTypingResult} setWorkDetail={setWorkDetail} />
      )}
    </div>
  )
}
