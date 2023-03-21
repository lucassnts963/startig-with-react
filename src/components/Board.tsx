import { useState } from 'react'

import { Row } from '@/components/Row'
import { Square } from './Square'
import { Status } from './Status'
import { Restart } from './Restart'

export function Board() {
  const [playerX, setPlayerX] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const winner = calculateWinner(squares)
  let status

  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Current Player: ${playerX ? 'X' : 'O'}`
  }

  function handleClick(i: number) {
    if (squares[i] || winner){
      return
    }

    const nextSquares = squares.slice()

    if(playerX) {
      nextSquares[i] = "X"
    } else {
      nextSquares[i] = "O"
    }

    setSquares(nextSquares)
    setPlayerX(!playerX)
  }

  function calculateWinner(squares: Array<'X' | 'O' | null>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]

      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a]
      }
    }
  }


  return (
    <div className="game">
      <Status value={status}/>
      <Row>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </Row>
      <Row>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </Row>
      <Row>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </Row>
      <Restart onPress={() => setSquares(Array(9).fill(null))}/>
    </div>
  )
}