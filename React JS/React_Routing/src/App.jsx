import Navbar from "../components/Navbar/Navbar"
import { Routes , Route , Link } from "react-router-dom"
import Home from "../Pages/Home"
import Men from "../Pages/Men"
import Women from "../Pages/Women"
import Kid from "../Pages/Kid"
import NotFound from "../Pages/NotFound"
import Watches from "../Pages/Watches"




const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* routing */}
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />}/>
          <Route path="/Women" element={<Women />} />
          <Route path="/kid" element={<Kid/>} />
          
          {/* nested routing */}
          <Route path="/collections/men" element={<Men />}/>
          <Route path="/collections/women" element={<Women />} />

          {/* dynamic routing */}
         <Route path='/watches/:name' element={<Watches />}/>


         {/* dynamic nested */}
         <Route path="/watches/:first/:sec" element={<Watches />} />


         <Route path="*" element={<NotFound/>} />


      </Routes>


      
    </div>
  )
}

export default App
