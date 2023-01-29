import { TypingText } from "../atoms/TypingText"

type Props = {
  typedTextMiss: string
}

export const TypedTextMiss: React.FC<Props> = ({ typedTextMiss }) => {
  return (
    <span id="textbox" className="text-red-400">
      <TypingText typingText={typedTextMiss}/>
    </span>
  )
}