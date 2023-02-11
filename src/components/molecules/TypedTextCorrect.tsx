import { Text } from "../atoms/Text"

type Props = {
  typedTextCorrect: string
}

export const TypedTextCorrect: React.FC<Props> = ({ typedTextCorrect }) => {
  return (
    <div id='textbox' className="inline text-green-400" >
      <Text text={typedTextCorrect}/>
    </div>
  )
}