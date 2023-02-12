import { SpanText } from "../atoms/SpanText"

type Props = {
  typedTextMiss: string
}

export const TypedTextMiss: React.FC<Props> = ({ typedTextMiss }) => {
  return (
    <div id="textbox" className="inline bg-gray-400 text-4xl text-red-400 ">
      <SpanText text={typedTextMiss}/>
    </div>
  )
}