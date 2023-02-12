import { useState, useEffect } from "react"
import { typingData } from "../../typingtexts/typingData"
import { TypingDataType } from "../../types/typingDataType"
import { TypingTemplate } from "../templates/TypingTemplate"
import { ResultTemplate } from "../templates/ResultTemplate"

export const TypingPage: React.FC = () => {
  const initialIndex = Math.floor(Math.random() * typingData.length)
  const [currentTypeData, setCurrentTypeData] = useState<TypingDataType>(typingData[initialIndex])

  const [isFinished, setIsFinished] = useState(false)
  const [correctTypeAmount, setCorrectTypeAmount] = useState(0)
  const [allTypeAmount, setAllTypeAmount] = useState(0)
  const [typingDuration, setTypingDuration] = useState(0)

  useEffect(() => {
    const currentIndex = Math.floor(Math.random() * typingData.length)
    setCurrentTypeData(typingData[currentIndex])
  }, [])

  return (
    <>
      {/* <ResultTemplate
        typeData={currentTypeData}
        correctTypeAmount={correctTypeAmount}
        allTypeAmount={allTypeAmount}
        typingDuration={typingDuration}
      /> */}
      {isFinished ? (
        <ResultTemplate
          typeData={currentTypeData}
          correctTypeAmount={correctTypeAmount}
          allTypeAmount={allTypeAmount}
          typingDuration={typingDuration}
        />
      ): (
        <TypingTemplate
          typeData={currentTypeData}
          isFinished = {isFinished}
          setIsFinished = {setIsFinished}
          setCorrectTypeAmount = {setCorrectTypeAmount}
          setAllTypeAmount = {setAllTypeAmount}
          setTypingDuration={setTypingDuration}
        />
      )
      }
    </>
  )
}