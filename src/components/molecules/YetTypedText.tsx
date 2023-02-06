import { Text } from "../atoms/Text"

type Props = {
  yetTypedText: string
}

export const YetTypedText: React.FC<Props> = ({ yetTypedText }) => {
  return (
    <div className="inline text-gray-400">
      <Text text={yetTypedText}/>
    </div>
  )
}