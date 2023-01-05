export interface ITask {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface ITasks {
  tasks: ITask[];
}

export interface IForm {
  isEdit?: boolean;
}

export interface IError {
  error: string | unknown;
}
