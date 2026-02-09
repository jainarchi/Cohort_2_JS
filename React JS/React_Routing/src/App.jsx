import Navbar from "../components/Navbar/Navbar"
import { Routes , Route , Link } from "react-router-dom"
import Home from "../Pages/Home"
import Men from "../Pages/Men"
import Women from "../Pages/Women"


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />}/>
          <Route path="/Women" element={<Women />} />


      </Routes>


      
    </div>
  )
}

export default App
