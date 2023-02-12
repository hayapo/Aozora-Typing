import { SpanText } from "../atoms/SpanText"

type Props = {
  nowTypingText: string
}

export const NowTypingText: React.FC<Props> = ({ nowTypingText }) => {
  return (
    <div className="inline bg-gray-400 text-4xl text-gray-600">
      <SpanText text={nowTypingText}/>
    </div>
  )
}