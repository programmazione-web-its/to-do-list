export default function CounterStats({ done, pending }) {
  return (
    <div className='completed-tasks'>
      <div>
        <span>{done}</span>
        completate
      </div>
      <div>
        <span>{pending}</span>
        da completare
      </div>
    </div>
  )
}
