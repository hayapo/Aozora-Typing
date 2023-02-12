type Props = {
  text: string
}

export const Text: React.FC<Props> = ({text}) => {
  return (
    <div className="text-4xl">
      {text}
    </div>
  )
}