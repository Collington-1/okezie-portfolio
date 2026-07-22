import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Loader from '@/components/layout/Loader'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import ProjectDetail from '@/pages/ProjectDetail'
import Gallery from '@/pages/Gallery'
import Contact from '@/pages/Contact'
import Booking from '@/pages/Booking'
import MetaAdsProject from '@/pages/MetaAdsProject'
import MetaAdsProjectDetail from '@/pages/MetaAdsProjectDetail'
import DigitalLiteracyProgram from '@/pages/DigitalLiteracyProgram'

export default function App() {
  return (
    <>
      <Loader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/meta-ads-project" element={<MetaAdsProject />} />
          <Route path="/meta-ads-project/:id" element={<MetaAdsProjectDetail />} />
          <Route path="/digital-literacy-program" element={<DigitalLiteracyProgram />} />
        </Routes>
      </Layout>
    </>
  )
}
