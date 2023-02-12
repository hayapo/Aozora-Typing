import { Text } from "../atoms/Text"
import { Title } from "../atoms/Title"

type Props = {
  title: string
  author: string
}

export const WorkTitle: React.FC<Props> = ({ title, author}) => {
  return (
    <div className="grid gap-y-10">
      <Title titleText={title} />
      <Text text={author} />
    </div>
  )
}