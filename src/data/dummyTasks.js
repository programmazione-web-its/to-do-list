export const dummyTasks = [
  { id: 1, text: 'Comprare il latte', status: 'pending' },
  { id: 2, text: 'Portare fuori il cane', status: 'done' },
  { id: 3, text: 'Studiare React', status: 'pending' },
  { id: 4, text: 'Preparare la cena', status: 'pending' },
  { id: 5, text: 'Pagare le bollette', status: 'done' },
  { id: 6, text: 'Scrivere email al cliente', status: 'pending' },
]

export const doneTasks = dummyTasks.filter((task) => task.status === 'done')
export const pendingTasks = dummyTasks.filter(
  (task) => task.status === 'pending',
)
