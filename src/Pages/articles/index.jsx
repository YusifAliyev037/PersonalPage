import React from 'react'
import { SimpleGrid, Box,Input } from "@chakra-ui/react"
import Header from '../../Components/Header'
import BlogCard from '../../Components/BlogCard'
import Breadcrumbs from '../../Components/Breadcrumb'

function Articles() {
  return (
    <div>


      <Header />
      <Box  p={10}>
      <Breadcrumbs/>
      <Input placeholder='Search'/>
      </Box>
      <SimpleGrid columns={{sm: 2}} p="20" spacing="10px">

    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <BlogCard />

      </SimpleGrid>

    </div>
  )
}

export default Articles
