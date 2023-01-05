
import { ITasks } from 'interfaces'

import { Grid, GridItem } from '@chakra-ui/react'

import { Task } from 'components'

export const Tasks: React.FC<ITasks> = ({ tasks }) => (
  <Grid
    templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    gap={ 6 }
    mt={ 6 }
    py={ 2 }
    borderTop="2px solid"
    borderColor="gray.200"
  >
    { tasks.map(task => (
      <GridItem
        key={ task.id }
        w="100%"
        h="auto"
      >
        <Task { ...task } />
      </GridItem>
    )) }
  </Grid>
)
