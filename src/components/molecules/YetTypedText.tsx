import { SpanText } from "../atoms/SpanText"

type Props = {
  yetTypedText: string
}

export const YetTypedText: React.FC<Props> = ({ yetTypedText }) => {
  return (
    <div className="inline text-gray-400">
      <SpanText text={yetTypedText}/>
    </div>
  )
}