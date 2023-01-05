import { useGetTasksQuery } from 'api/apiSlice'

import { Main } from 'layouts'

import {
  Loading,
  Form,
  Tasks,
  Error
} from 'components'

export const Home: React.FC = () => {
  const {
    isLoading,
    data,
    isError,
    error
  } = useGetTasksQuery()

  return (
    <Main>
      { isError && <Error error={ (error as { message: string }) } /> }
      { isLoading ? (
        <Loading />
      ) : (
        <>
          <Form />
          { typeof data !== 'undefined' && <Tasks tasks={ data } /> }
        </>
      ) }
    </Main>
  )
}
