import { Text } from "../atoms/Text"

type Props = {
  typedTextMiss: string
}

export const TypedTextMiss: React.FC<Props> = ({ typedTextMiss }) => {
  return (
    <span id="textbox" className="bg-gray-400 text-4xl text-red-400 ">
      <Text text={typedTextMiss}/>
    </span>
  )
}