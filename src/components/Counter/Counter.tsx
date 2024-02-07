import { useState } from 'react'
import './Counter.scss'

export type CounterProps = {
  initialCount?: number
}

import React from 'react'

export function Counter({ initialCount = 0 }: CounterProps): JSX.Element {
  //
  const [count, setCount] = useState(initialCount)

  return (
    <div className='counter'>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Counter
