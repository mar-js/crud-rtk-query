import { IError, ITask } from 'interfaces'

export const TASK: ITask = {
  id: 1,
  title: 'Aprender HTML',
  description: 'Ver videos en youtube',
  completed: false
}

export const TASKS: ITask[] = [
  {
    id: 1,
    title: 'Aprender HTML',
    description: 'Ver videos en youtube',
    completed: false
  },
  {
    id: 2,
    title: 'Aprender CSS',
    description: 'Leer documentación',
    completed: true
  }
]

export const ERROR: IError = { error: 'Error 5XX' }
