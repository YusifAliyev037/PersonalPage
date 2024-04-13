import { Suspense, lazy } from 'react'
import {Spinner} from "@chakra-ui/react"
import { Route, Routes } from 'react-router-dom'
import { ROUTER } from './Constant/router'
import Faq from './Pages/FAQ'
import Favorit from './Pages/Favorit'

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
        <Route path={ROUTER.HOME} element={<Home/>} />
        <Route path={ROUTER.ABOUT} element={<About/>} />
        <Route path={ROUTER.FAQ} element={<Faq/>} />

        <Route path={ROUTER.FAVORIT} element={<Favorit/>} />
        
        <Route path={ROUTER.ARTICLES} element={<Articles/>} />
        <Route path={ROUTER.ARTICLES_CREATE} element={<ArticleCreate/>} />
        <Route path={ROUTER.ARTICLES + "/:id"}  element={<ArticleDetail/>} />

        <Route path={ROUTER.ERROR} element={<Notfound/>} />
      </Routes>
      </Suspense >
  )
}

export default App
