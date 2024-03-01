
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Resources from './components/Resouces'

function App() {
  

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Resources category="html" />} />
        <Route path="/css" element={<Resources category="css" />} />
        <Route path="/javascript" element={<Resources category="javascript" />} />
        <Route path="/react" element={<Resources category="react" />} />
        <Route path="/headless-cms" element={<Resources category="headless-cms" />} />
      </Routes>
    </Layout>
  )
}

export default App