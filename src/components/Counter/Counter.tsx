import { useState } from 'react'
import styles from './Counter.module.css'

export type CounterProps = {
  initialCount?: number
}

export const Counter = ({ initialCount = 0 }: CounterProps): JSX.Element => {
  //
  const [count, setCount] = useState(initialCount)

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
