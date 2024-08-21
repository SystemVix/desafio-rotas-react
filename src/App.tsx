import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./routes/Home/About";
import BodyHome from "./routes/Home/BodyHome";
import BodyNotFound from "./routes/NotFound/BodyNotFound";
import Books from "./routes/Home/Products/Books";
import Computers from "./routes/Home/Products/Computers";
import Eletronics from "./routes/Home/Products/Eletrocnics";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Products from "./routes/Home/Products";

function App()
{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Navigate to='/home'/>}/>
            <Route path="home" element={<BodyHome/>}/>
            <Route path="products" element={<Products/>}/>
              <Route path="computers" element={<Computers/>}/>
              <Route path="eletronics" element={<Eletronics/>}/>
              <Route path="books" element={<Books/>}/>
            <Route path="about" element={<About/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}>
            <Route index element={<BodyNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>     
    </>
  )
}

export default App
