import { useState, useRef, useEffect } from "react"
import { typingData } from "../../typingtexts/typingData"
import { TypedTextCorrect } from "../molecules/TypedTextCorrect"
import { TypedTextMiss } from "../molecules/TypedTextMiss"
import { YetTypedText } from "../molecules/YetTypedText"
import { NowTypingText } from "../molecules/NowTypingText"
import { WorkTitleAuhtor } from "../molecules/WorkTitleAuhtor"
import { TypingDataType } from "../../types/typingDataType"
import { WorkDetailType } from "../../types/workDetailType"
import { IoReload } from "react-icons/io5"

type Props = {
  isFinished: boolean
  setIsFinished: (isFinished: boolean) => void
  setCorrectTypeAmount: (
    correctTypeAmount: React.SetStateAction<number>
  ) => void
  setAllTypeAmount: (allTypeAmount: React.SetStateAction<number>) => void
  setTypingDuration: (typingDuration: React.SetStateAction<number>) => void
  setWorkDetail: (workDetail: WorkDetailType) => void
}

export const TypingArea: React.FC<Props> = ({
  isFinished,
  setIsFinished,
  setCorrectTypeAmount,
  setAllTypeAmount,
  setTypingDuration,
  setWorkDetail,
}) => {
  const initialIndex = 0
  const [currentTypeData, setCurrentTypeData] = useState<TypingDataType>(
    typingData[initialIndex]
  )
  const [currentLine, setCurrentLine] = useState(0)
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0)
  const [currentAlphabetIndex, setCurrentAlphabetIndex] = useState(0)
  const [currentInlineIndex, setCurrentInlineIndex] = useState(0)
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [isMissed, setIsMissed] = useState(false)

  const timerRef = useRef<number>(0)

  useEffect(() => {
    const currentIndex = Math.floor(Math.random() * typingData.length)
    setCurrentTypeData(typingData[currentIndex])
    setWorkDetail({
      title: typingData[currentIndex].title,
      author: typingData[currentIndex].author,
      url: typingData[currentIndex].url,
    })
  }, [currentTypeData])

  const typeText = currentTypeData.wakatiRomajiText

  const textSplitByLine = typeText
    .split(".")
    .slice(0, -1)
    .map((line) => (line[0] === " " ? line.slice(1, -1) : line.slice(0, -1)))
  const textSplitByLetter = textSplitByLine.map((line) =>
    line.split(" ").filter(Boolean)
  )

  const displayText = currentTypeData.kanjiText
  const displayTextSplitByLine = displayText.split("。").slice(0, -1)

  const refreshAll = () => {
    setCurrentTypeData(
      typingData[Math.floor(Math.random() * typingData.length)]
    )
    setCurrentLine(0)
    setCurrentAlphabetIndex(0)
    setCurrentLetterIndex(0)
    setCurrentInlineIndex(0)
    setCurrentDisplayIndex(0)
    setIsStarted(false)
    setIsMissed(false)

    setIsFinished(false)
    setCorrectTypeAmount(0)
    setAllTypeAmount(0)
    setTypingDuration(0)
    clearInterval(timerRef.current)
  }

  const handleKeyInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isFinished) return
    if (!isStarted) {
      setIsStarted(true)
      const startTime = new Date().getTime()
      timerRef.current = setInterval(() => {
        setTypingDuration(new Date().getTime() - startTime)
      }, 10)
    }

    setAllTypeAmount((prevState) => prevState + 1)

    if (
      e.key ===
      textSplitByLetter[currentLine][currentLetterIndex][currentAlphabetIndex]
    ) {
      setIsMissed(false)
      setCurrentAlphabetIndex((prevState) => prevState + 1)
      setCurrentInlineIndex((prevState) => prevState + 1)
      setCorrectTypeAmount((prevState) => prevState + 1)

      if (
        currentAlphabetIndex + 1 >=
        textSplitByLetter[currentLine][currentLetterIndex].length
      ) {
        setCurrentLetterIndex((prevState) => prevState + 1)
        setCurrentInlineIndex((prevState) => prevState + 1)

        if (
          textSplitByLetter[currentLine][currentLetterIndex][0] ===
            textSplitByLetter[currentLine][currentLetterIndex][1] &&
          displayTextSplitByLine[currentLine][currentDisplayIndex] === "っ"
        ) {
          setCurrentDisplayIndex((prevState) => prevState + 2)
        } else {
          setCurrentDisplayIndex((prevState) => prevState + 1)
        }

        setCurrentAlphabetIndex(0)

        if (currentLetterIndex + 1 >= textSplitByLetter[currentLine].length) {
          setCurrentLine((prevState) => prevState + 1)
          setCurrentDisplayIndex(0)
          setCurrentInlineIndex(0)
          setCurrentLetterIndex(0)

          if (currentLine + 1 >= textSplitByLine.length) {
            setIsFinished(true)
            clearInterval(timerRef.current)
          }
        }
      }
    } else {
      setIsMissed(true)
    }
  }

  return (
    <div className="grid gap-y-20 md:my-[-15rem] ">
      <div className="text-center">
        <WorkTitleAuhtor
          title={currentTypeData.title}
          author={currentTypeData.author}
        />
      </div>
      <div>
        <div>
          <TypedTextCorrect
            typedTextCorrect={displayTextSplitByLine[currentLine].slice(
              0,
              currentDisplayIndex
            )}
          />
          {isMissed ? (
            <TypedTextMiss
              typedTextMiss={
                displayTextSplitByLine[currentLine][currentDisplayIndex]
              }
            />
          ) : (
            <NowTypingText
              nowTypingText={
                displayTextSplitByLine[currentLine][currentDisplayIndex]
              }
            />
          )}
          <YetTypedText
            yetTypedText={displayTextSplitByLine[currentLine].slice(
              currentDisplayIndex + 1,
              displayTextSplitByLine[currentLine].length
            )}
          />
        </div>
        <div
          tabIndex={0}
          onKeyDown={(e) => handleKeyInput(e)}
          className="outline-none"
        >
          <TypedTextCorrect
            typedTextCorrect={textSplitByLine[currentLine].slice(
              0,
              currentInlineIndex
            )}
          />
          {isMissed ? (
            <TypedTextMiss
              typedTextMiss={textSplitByLine[currentLine][currentInlineIndex]}
            />
          ) : (
            <NowTypingText
              nowTypingText={textSplitByLine[currentLine][currentInlineIndex]}
            />
          )}
          <YetTypedText
            yetTypedText={textSplitByLine[currentLine].slice(
              currentInlineIndex + 1,
              textSplitByLine[currentLine].length
            )}
          />
        </div>
      </div>
      <button
        className="
          mx-auto
          h-10
          w-10
          items-center
          rounded-lg
          bg-gray-500
          hover:bg-gray-600
        "
        onClick={refreshAll}
      >
        <IoReload className="mx-auto" />
      </button>
    </div>
  )
}
