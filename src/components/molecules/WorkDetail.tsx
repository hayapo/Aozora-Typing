import { Text } from "../atoms/Text"

type Props = {
  title: string
  author: string
  url: string
}

export const WorkDetail: React.FC<Props> = ({ title, author, url}) => {
  return (
    <div className="grid gap-y-10">
      <Text text={title} />
      <Text text={author} />
      <a
        href={url}
        rel="noopener"
        className="text-blue-400 underline"
      >
        青空文庫へのリンク
      </a>
    </div>
  )
}