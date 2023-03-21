interface ButtonProps {
  onPress: () => void
}

export function Restart({ onPress }: ButtonProps) {
  return (
    <button className="restart-button" onClick={onPress}>Restart</button>
  )
}