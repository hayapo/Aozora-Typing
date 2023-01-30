import { Text } from "../atoms/Text"

type Props = {
  typedTextCorrect: string
}

export const TypedTextCorrect: React.FC<Props> = ({ typedTextCorrect }) => {
  return (
    <span id='textbox' className="text-green-400" >
      <Text text={typedTextCorrect}/>
    </span>
  )
}