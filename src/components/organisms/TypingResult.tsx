import { WorkDetail } from "../molecules/WorkDetail"
import { Text } from "../atoms/Text"
import { WorkDetailType } from "../../types/workDetailType"

type Props = {
  correctTypeAmount: number
  allTypeAmount: number
  typingDuration: number
  workDetail: WorkDetailType
}

export const TypingResult: React.FC<Props> = ({
  correctTypeAmount,
  allTypeAmount,
  typingDuration,
  workDetail
}) => {
  const typingDurationSecond = typingDuration / 1000
  const accuracyRate = Math.floor(correctTypeAmount/allTypeAmount * 100)
  
  return (
    <div className="mt-[7rem]">
      <div>
        <div className="mb-10 text-center text-5xl font-bold">
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
      <div className="my-20 grid gap-8 text-center">
        <WorkDetail workDetail={workDetail} />
      </div>
    </div>
  )
}