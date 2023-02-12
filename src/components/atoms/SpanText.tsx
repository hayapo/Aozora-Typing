type Props = {
  text: string
}

export const SpanText: React.FC<Props> = ({text}) => {
  return (
    <span className="text-4xl">
      {text}
    </span>
  )
}