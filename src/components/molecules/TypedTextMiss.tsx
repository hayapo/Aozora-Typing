import { Text } from "../atoms/Text"

type Props = {
  typedTextMiss: string
}

export const TypedTextMiss: React.FC<Props> = ({ typedTextMiss }) => {
  return (
    <div id="textbox" className="inline bg-gray-400 text-4xl text-red-400 ">
      <Text text={typedTextMiss}/>
    </div>
  )
}