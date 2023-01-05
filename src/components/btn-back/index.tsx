import { useBack } from 'hooks'

import { Button } from '@chakra-ui/react'

export const BtnBack: React.FC = () => {
  const { navigate } = useBack()

  const handleBack = () => navigate(-1)

  return (
    <Button
      onClick={ handleBack }
      type="button"
      colorScheme="gray"
    >Back</Button>
  )
}
