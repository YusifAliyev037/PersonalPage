import React from 'react'
import Header from '../../../Components/Header'
import { Box, Text,Image,SimpleGrid } from "@chakra-ui/react"
import {useParams} from "react-router-dom"
import { useFetchData } from '../../../Hooks/useFetchData'
import { getBlogId } from '../../../Services/articles'
import Loading from '../../Loading'
import { converTime } from '../../../Utils/convertTime'

 function Articledetail() {

  const {id} = useParams()
   
  const {data,loading} = useFetchData({
    requestFn:()=>getBlogId(id),
    dependecy:[id]
  })

  return (
    <>
      <Header />
      {loading ? (<Loading />): (

      <SimpleGrid bg="gray.50" columns={{sm:2}} spacing="2" p="10" >
      <Box>
          <Image  src={data?.cover_url} alt={data?.title}></Image>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-start" gap="16px">
        <Text
          bgClip="text"
          fontSize="md"
          fontWeight="medium"
          color="gray"
        >
             {converTime(+data?.created)}
        </Text>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
                {data?.title} 
        </Text>
        <Text
          bgClip="text"
          fontSize="lg"
          fontWeight="medium"
          color="gray"
        >
              {data?.desc}
        </Text>
        </Box>
       
        </SimpleGrid>
      )}

    </>
  )
}


export default Articledetail
