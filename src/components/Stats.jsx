function Stats() {
  return (
    <>
      <div className='text-center text-2xl text-cyan-900 my-2'>
        🎉 Congratulazioni! Hai completato tutte le tasks
      </div>

      <div className='grid grid-cols-2'>
        <div className='flex flex-col '>
          <span className='text-6xl font-bold text-cyan-800'>10</span>
          <span>Completate</span>
        </div>
        <div className='flex flex-col '>
          <span className='text-6xl font-bold text-cyan-800'>90</span>
          <span>Da completare</span>
        </div>
      </div>
    </>
  )
}

export default Stats
