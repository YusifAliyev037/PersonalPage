import React, {} from 'react'
import { SimpleGrid, Box,Input,Spinner } from "@chakra-ui/react"
import Header from '../../Components/Header'
import BlogCard from '../../Components/BlogCard'
import Breadcrumbs from '../../Components/Breadcrumb'
import { getBlogs } from '../../Services/articles'
import {useNavigate} from "react-router-dom"
import { useFetchData } from '../../Hooks/useFetchData'
import Loading from '../Loading'


function Articles() {
  const navigate = useNavigate()

  const {data,loading} = useFetchData({
    requestFn:()=>getBlogs(),
  })

  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();



  // useEffect(()=>{

  //   const fetchData = async () =>{
  //     setLoading(true)
  //     try{
  //       const res = await getBlogs();
  //       setData(res.data)
  //     }catch(err){
  //       setError(err)
  //     }finally{
  //       setLoading(false)
  //     }
  //   }
  //   fetchData()
  // },[])
  return (
    <div>


      <Header />
      <Box  p={10}>
      <Breadcrumbs/>
      <Input placeholder='Search'/>
      </Box>
      {loading  ? (
      <Loading />
       ):( 
      <SimpleGrid columns={{sm: 2}} p="20" spacing="10">
        {data
        ?.filter((item, index) => index > 99)
        ?.map((item)=>(
        <BlogCard key={"blog-id" + item.id} {...item} onReadMore={()=>navigate("/articles/" + item.id)} 
        />
        ))}
   
      </SimpleGrid>
      )}
    </div>
  )
}

export default Articles
