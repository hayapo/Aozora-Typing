type Props = {
  text: string
}

export const Text: React.FC<Props> = ({text}) => {
  return (
    <span className="text-4xl">
      {text}
    </span>
  )
}