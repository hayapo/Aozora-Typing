type Props = {
  typingText: string
}

export const TypingText: React.FC<Props> = ({typingText}) => {
  return (
    <span className="text-4xl">
      {typingText}
    </span>
  )
}