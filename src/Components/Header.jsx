import React from 'react'
import {Box,Stack,Button,Text} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
import { ROUTER } from '../Constant/router'
 function Header() {

    const navigate = useNavigate()

  return (
    <Box 
    height="100px" 
    p="12px" 
    alignItems="center"
    display="flex" 
    justifyContent={'space-between'} 
    backgroundColor="teal">
        <Text as="h1" fontSize="4xl" color="white">
            Blog
        </Text>
        

        <Stack direction='row' spacing={4} align='center' as='ul'>
  <Button  variant='ghost' color="white" onClick={()=>navigate(ROUTER.HOME)}>
    Home
  </Button>
  <Button as='li'  variant='ghost' color="white" onClick={()=>navigate(ROUTER.ARTICLES)}>
    Article
  </Button>
  <Button as='li' variant='ghost' color="white" onClick={()=>navigate(ROUTER.ABOUT)}>
    About
  </Button>
  <Button as='li' variant='ghost' color="white" onClick={()=>navigate(ROUTER.FAVORIT)}>
    Favorit
  </Button>
  <Button as='li' variant='ghost' color="white" onClick={()=>navigate(ROUTER.FAQ)}>
    FAQ
  </Button> 
  <Button
  onClick={()=>navigate(ROUTER.ARTICLES_CREATE)}
  as="li"
  >
    Create your article
  </Button> 
  
</Stack>
        </Box>
  )
}

export default Header
