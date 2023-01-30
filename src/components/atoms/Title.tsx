type Props = {
  titleText: string
}

export const Title: React.FC<Props> = ({ titleText }) => {
  return (
    <div className="text-6xl">
      {titleText}
    </div>
  )
}