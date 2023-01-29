import { TypingText } from "../atoms/TypingText"

type Props = {
  typedTextCorrect: string
}

export const TypedTextCorrect: React.FC<Props> = ({ typedTextCorrect }) => {
  return (
    <span id='textbox' className="text-green-400" >
      <TypingText typingText={typedTextCorrect}/>
    </span>
  )
}