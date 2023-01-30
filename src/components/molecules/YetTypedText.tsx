import { Text } from "../atoms/Text"

type Props = {
  yetTypedText: string
}

export const YetTypedText: React.FC<Props> = ({ yetTypedText }) => {
  return (
    <span className="text-gray-400">
      <Text text={yetTypedText}/>
    </span>
  )
}