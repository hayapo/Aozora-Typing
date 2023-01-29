import { TypingText } from "../atoms/TypingText"

type Props = {
  yetTypedText: string
}

export const YetTypedText: React.FC<Props> = ({ yetTypedText }) => {
  return (
    <span className="text-gray-400">
      <TypingText typingText={yetTypedText}/>
    </span>
  )
}