import { useParams } from 'react-router-dom'

import { useGetTaskQuery } from 'api/apiSlice'

import { ITask } from 'interfaces'

import { Section } from 'layouts'

import {
  Loading,
  Details,
  Error
} from 'components'

export const Task: React.FC = () => {
  const { id } = useParams()

  const {
    isLoading,
    data,
    isError,
    error
  } = useGetTaskQuery(Number(id))

  return (
    <Section>
      { isError && <Error error={ error } /> }
      { isLoading ? (
        <Loading />
      ) : (
        <>
          { typeof data !== 'undefined' && <Details { ...data as ITask } /> }
        </>
      ) }
    </Section>
  )
}
