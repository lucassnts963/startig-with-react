import { ReactNode } from "react"

interface RowProps {
  children: ReactNode
}

export function Row({ children }: RowProps) {
  return (
    <div className="board-row">
      {children}
    </div>
  )
}