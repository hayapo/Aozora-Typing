import { useState, useRef, useEffect } from "react"
import { TypedTextCorrect } from "../molecules/TypedTextCorrect"
import { TypedTextMiss } from "../molecules/TypedTextMiss"
import { YetTypedText } from "../molecules/YetTypedText"
import { NowTypingText } from "../molecules/NowTypingText"
import { typingData } from "../../typingtexts/typingData"
import { WorkTitle } from "../molecules/WorkTitle"

type Props = {
  isFinished: boolean,
  setIsFinished: (isFinished: boolean) => void
  setCorrectTypeAmount: (correctTypeAmount: React.SetStateAction<number>) => void
  setAllTypeAmount: (allTypeAmount: React.SetStateAction<number>) => void
  setTypingDuration: (typingDuration: number) => void
}

export const TypingArea: React.FC<Props> = ({...props}) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
  const [currentAlphabetIndex, setCurrentAlphabetIndex] = useState(0)
  const [currentInlineIndex, setCurrentInlineIndex] = useState(0)
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0)
  const [currentDataIndex, setCurrentDataIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [isMissed, setIsMissed] = useState(false)

  const timerRef = useRef<number>(0)

  useEffect(() => {
    setCurrentDataIndex(Math.floor(Math.random() * typingData.length))
  },[currentDataIndex])
  
  const typeData = typingData[currentDataIndex]
  
  const typeText = typeData.wakatiRomajiText
  const textSplitByLine = typeText.split(".").slice(0,-1).map((line) => line[0] === " " ? line.slice(1,-1) : line.slice(0,-1))
  const textSplitByLetter = textSplitByLine.map((line) => line.split(" ").filter(Boolean))
  
  const displayText = typeData.kanjiText
  const displayTextSplitByLine = displayText.split("。").slice(0,-1)

  const handleKeyInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (props.isFinished) return
    if (!isStarted) {
      setIsStarted(true)
      const startTime = new Date().getTime()
      timerRef.current = setInterval(() => {
        props.setTypingDuration(new Date().getTime() - startTime)
      }, 10)
    }

    props.setAllTypeAmount(prevState => prevState + 1)
    
    if (e.key === textSplitByLetter[currentLine][currentLetterIndex][currentAlphabetIndex]) {
      setIsMissed(false)
      setCurrentAlphabetIndex(prevState => prevState + 1)
      setCurrentInlineIndex(prevState => prevState + 1)
      props.setCorrectTypeAmount(prevState => prevState + 1)

      if (currentAlphabetIndex + 1 >= textSplitByLetter[currentLine][currentLetterIndex].length) {
        setCurrentLetterIndex(prevState => prevState + 1)
        setCurrentInlineIndex(prevState => prevState + 1)

        if (textSplitByLetter[currentLine][currentLetterIndex][0] === textSplitByLetter[currentLine][currentLetterIndex][1]
          && displayTextSplitByLine[currentLine][currentDisplayIndex] === "っ") {
          setCurrentDisplayIndex(prevState => prevState + 2)
        } else {
          setCurrentDisplayIndex(prevState => prevState + 1)
        }

        setCurrentAlphabetIndex(0)

        if (currentLetterIndex + 1 >= textSplitByLetter[currentLine].length) {
          setCurrentLine(prevState => prevState + 1)
          setCurrentDisplayIndex(0)
          setCurrentInlineIndex(0)
          setCurrentLetterIndex(0)
          
          if (currentLine + 1 >= textSplitByLine.length) {
            props.setIsFinished(true)
            clearInterval(timerRef.current)
          }
        }
      }
    } else {
      setIsMissed(true)
    }
  }

  return (
    <div className="grid gap-y-[1rem]">
      <div className="my-20 text-center">
        <WorkTitle title={typeData.title} author={typeData.author} />
      </div>
      <div className=" mx-20 min-h-screen flex-row items-center">
        <div>
          <TypedTextCorrect typedTextCorrect={displayTextSplitByLine[currentLine].slice(0, currentDisplayIndex)} />
          { isMissed ? (
            <TypedTextMiss typedTextMiss={displayTextSplitByLine[currentLine][currentDisplayIndex]} />
          ) : (
            <NowTypingText nowTypingText={displayTextSplitByLine[currentLine][currentDisplayIndex]} />
          )
          }
          <YetTypedText yetTypedText={displayTextSplitByLine[currentLine].slice(currentDisplayIndex + 1, displayTextSplitByLine[currentLine].length)} />
        </div>
        <div tabIndex={0} onKeyDown={(e) => handleKeyInput(e)} className="outline-none">
          <TypedTextCorrect typedTextCorrect={textSplitByLine[currentLine].slice(0, currentInlineIndex)} />
          { isMissed ? (
            <TypedTextMiss typedTextMiss={textSplitByLine[currentLine][currentInlineIndex]} />
          ) : (
            <NowTypingText nowTypingText={textSplitByLine[currentLine][currentInlineIndex]} />
          )
          }
          <YetTypedText yetTypedText={textSplitByLine[currentLine].slice(currentInlineIndex + 1, textSplitByLine[currentLine].length)} />
        </div>
      </div>
    </div>
  )
}
