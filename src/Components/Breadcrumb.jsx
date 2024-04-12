import React from 'react'
import { 
    Breadcrumb,
  
    BreadcrumbItem,
    BreadcrumbLink

    
  } from "@chakra-ui/react"
  import {  ChevronRightIcon} from '@chakra-ui/icons'

function Breadcrumbs() {
  return (
    <div>
        <Breadcrumb py={4} px={10} spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Articles</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Jsde yenilikler</BreadcrumbLink>
  </BreadcrumbItem>

 
</Breadcrumb>
    </div>
  )
}


export default Breadcrumbs