import { Suspense, lazy } from 'react'
import {Spinner} from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'

const Home = lazy(()=> import("./Pages/home"))
const About= lazy(()=> import("./Pages/about"))
const Articles = lazy(()=> import("./Pages/articles"))
const ArticleDetail = lazy(()=> import("./Pages/articles/detail/articledetail"))
const ArticleCreate = lazy(()=> import("./Pages/articles/create/articlecreate"))
const Notfound = lazy(()=> import("./Pages/notfound"))

function App() {

  return (
    <Suspense fallback={
      <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='teal.500'
      size='xl'
    />}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        {/* <Route path='/faq' element={<Hompage/>} />

        <Route path='/favorites' element={<Hompage/>} />
         */}
        <Route path='/articles' element={<Articles/>} />
        <Route path='/article-create' element={<ArticleCreate/>} />
        <Route path='/articles/:id' element={<ArticleDetail/>} />

        <Route path='*' element={<Notfound/>} />
      </Routes>
      </Suspense >
  )
}

export default App
