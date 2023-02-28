import { useState, useRef, useEffect, SetStateAction } from "react"
import { IoReload } from "react-icons/io5"
import { TypedTextCorrect, TypedTextMiss, YetTypedText, NowTypingText, WorkTitleAuthor } from "../molecules"
import { typingData } from "../../typingtexts/typingData"
import { TypingStateType, TypingResultType } from "../../types/TypingTypes"
import { WorkDetailType } from "../../types/WorkDetailType"
import { RefreshAll } from "../../lib/util/RefreshAll"
import { handleKeyInput } from "../../lib/util/HandleKeyInput"

type Props = {
  typingResult: TypingResultType
  setTypingResult: React.Dispatch<SetStateAction<TypingResultType>>
  setWorkDetail: React.Dispatch<SetStateAction<WorkDetailType>>
}

export const TypingArea: React.FC<Props> = ({ typingResult, setTypingResult, setWorkDetail }) => {
  const [typingState, setTypingState] = useState<TypingStateType>({
    typeData: typingData[0],
    line: 0,
    letterIndex: 0,
    alphabetIndex: 0,
    inlineIndex: 0,
    displayIndex: 0,
    isStarted: false,
    isMissed: false,
  })

  const timerRef = useRef<number>(0)

  useEffect(() => {
    const currentIndex = Math.floor(Math.random() * typingData.length)
    setTypingState((prev) => ({ ...prev, typeData: typingData[currentIndex] }))
    setWorkDetail({
      title: typingData[currentIndex].title,
      author: typingData[currentIndex].author,
      url: typingData[currentIndex].url,
    })
  }, [])

  const typeText = typingState.typeData.wakatiRomajiText

  const textSplitByLine = typeText
    .split(".")
    .slice(0, -1)
    .map((line) => (line[0] === " " ? line.slice(1, -1) : line.slice(0, -1)))
  const textSplitByLetter = textSplitByLine.map((line) => line.split(" ").filter(Boolean))

  const displayText = typingState.typeData.kanjiText
  const displayTextSplitByLine = displayText.split("。").slice(0, -1)

  return (
    <div className="grid gap-y-20 md:my-[-15rem] ">
      <div className="text-center">
        <WorkTitleAuthor title={typingState.typeData.title} author={typingState.typeData.author} />
      </div>
      <div>
        <div>
          <TypedTextCorrect
            typedTextCorrect={displayTextSplitByLine[typingState.line].slice(0, typingState.displayIndex)}
          />
          {typingState.isMissed ? (
            <TypedTextMiss typedTextMiss={displayTextSplitByLine[typingState.line][typingState.displayIndex]} />
          ) : (
            <NowTypingText nowTypingText={displayTextSplitByLine[typingState.line][typingState.displayIndex]} />
          )}
          <YetTypedText
            yetTypedText={displayTextSplitByLine[typingState.line].slice(
              typingState.displayIndex + 1,
              displayTextSplitByLine[typingState.line].length
            )}
          />
        </div>
        <div
          tabIndex={0}
          onKeyDown={(e) =>
            handleKeyInput(
              e,
              timerRef.current,
              textSplitByLine,
              textSplitByLetter,
              displayTextSplitByLine,
              typingState,
              typingResult,
              setTypingState,
              setTypingResult
            )
          }
          className="outline-none"
        >
          <TypedTextCorrect typedTextCorrect={textSplitByLine[typingState.line].slice(0, typingState.inlineIndex)} />
          {typingState.isMissed ? (
            <TypedTextMiss typedTextMiss={textSplitByLine[typingState.line][typingState.inlineIndex]} />
          ) : (
            <NowTypingText nowTypingText={textSplitByLine[typingState.line][typingState.inlineIndex]} />
          )}
          <YetTypedText
            yetTypedText={textSplitByLine[typingState.line].slice(
              typingState.inlineIndex + 1,
              textSplitByLine[typingState.line].length
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
        onClick={() => RefreshAll(setTypingState, setTypingResult, timerRef.current)}
      >
        <IoReload className="mx-auto" />
      </button>
    </div>
  )
}
