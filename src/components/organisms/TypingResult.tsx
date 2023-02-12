import { TypingDataType } from "../../types/typingDataType"
import { WorkDetail } from "../molecules/WorkDetail"
import { Text } from "../atoms/Text"

type Props = {
  typeData: TypingDataType
  correctTypeAmount: number
  allTypeAmount: number
  typingDuration: number
}

export const TypingResult: React.FC<Props> = ({
  typeData,
  correctTypeAmount,
  allTypeAmount,
  typingDuration
}) => {
  const typingDurationSecond = typingDuration / 1000
  const accuracyRate = Math.floor(correctTypeAmount/allTypeAmount * 100)
  
  return (
    <div className="mt-[7rem]">
      <div>
        <div className="mb-10 text-6xl">
          {"タイピング成績"}
        </div>
        <div className="ml-14">
          <div>
            <Text text={`Correct Type: ${correctTypeAmount.toString()}`} />
          </div>
          <div>
            <Text text={`All Type: ${allTypeAmount.toString()}`} />
          </div>
          <div>
            <Text text={`Accuracy Rate: ${accuracyRate.toString()}%`} />
          </div>
          <div>
            <Text text={`Duration: ${typingDurationSecond.toString()}s`} />
          </div>
        </div>
      </div>
      <div className="my-20 text-center">
        <WorkDetail title={typeData.title} author={typeData.author} url={typeData.url} />
      </div>
    </div>
  )
}