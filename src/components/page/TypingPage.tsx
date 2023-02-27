import { useState,  } from "react"
import { TypingTemplate } from "../templates/TypingTemplate"
import { ResultTemplate } from "../templates/ResultTemplate"

export const TypingPage: React.FC = () => {
  const [isFinished, setIsFinished] = useState(false)
  const [correctTypeAmount, setCorrectTypeAmount] = useState(0)
  const [allTypeAmount, setAllTypeAmount] = useState(0)
  const [typingDuration, setTypingDuration] = useState(0)
  const [workDetail, setWorkDetail] = useState({ 
    title: "",
    author: "",
    url: ""
  })

  return (
    <div>
      {isFinished ? (
        <ResultTemplate
          correctTypeAmount={correctTypeAmount}
          allTypeAmount={allTypeAmount}
          typingDuration={typingDuration}
          workDetail={workDetail}
        />
      ) : (
        <TypingTemplate
          isFinished={isFinished}
          setIsFinished={setIsFinished}
          setCorrectTypeAmount={setCorrectTypeAmount}
          setAllTypeAmount={setAllTypeAmount}
          setTypingDuration={setTypingDuration}
          setWorkDetail={setWorkDetail}
        />
      )
      }
    </div>
  )
}