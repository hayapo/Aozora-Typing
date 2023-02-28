import { SetStateAction } from "react"
import { IoReload } from "react-icons/io5"
import { Text } from "../atoms/Text"
import { WorkDetail } from "../molecules"
import { TypingResultType } from "../../types/TypingTypes"
import { WorkDetailType } from "../../types/WorkDetailType"

type Props = {
  typingResult: TypingResultType
  setTypingResult: React.Dispatch<SetStateAction<TypingResultType>>
  workDetail: WorkDetailType
}

export const TypingResult: React.FC<Props> = ({ typingResult, setTypingResult, workDetail }) => {
  const typingDurationSecond = typingResult.duration / 1000
  const accuracyRate = Math.floor((typingResult.correctAmount / typingResult.allAmount) * 100)

  return (
    <div className="mt-[7rem]">
      <div>
        <div className="mb-10 text-center text-5xl font-bold">{"タイピング成績"}</div>
        <div className="ml-14">
          <div>
            <Text text={`Correct Type: ${typingResult.correctAmount.toString()}`} />
          </div>
          <div>
            <Text text={`All Type: ${typingResult.allAmount.toString()}`} />
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
