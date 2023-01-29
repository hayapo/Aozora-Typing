import { TypingText } from "../atoms/TypingText"

type Props = {
  nowTypingText: string
}

export const NowTypingText: React.FC<Props> = ({ nowTypingText }) => {
  return (
    <span className="text-gray-600">
      <TypingText typingText={nowTypingText}/>
    </span>
  )
}