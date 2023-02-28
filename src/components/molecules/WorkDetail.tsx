import { WorkDetailType } from "../../types/WorkDetailType"
import { Text } from "../atoms/Text"

type Props = {
  workDetail: WorkDetailType
}

export const WorkDetail: React.FC<Props> = ({ workDetail }) => {
  const titleText = `作品: ${workDetail.title}`
  const authorText = `著者: ${workDetail.author}`
  return (
    <div className="grid gap-y-10">
      <Text text={titleText} />
      <Text text={authorText} />
      <a href={workDetail.url} rel="noopener" className="text-blue-400 underline">
        青空文庫へのリンク
      </a>
    </div>
  )
}
