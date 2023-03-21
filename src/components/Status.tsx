interface StatusProps {
  value: string
}

export function Status({ value }: StatusProps){
  return (
    <div className="status">{value}</div>
  )
}