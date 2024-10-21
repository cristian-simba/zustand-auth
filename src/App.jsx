import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./views/public/Login/Login"
import Profile from "./views/private/Profile/profile"
import PrivateRoute from "./routes/PrivateRoute"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>}/>
          
        </Route>
        <Route path="*" element={<h1>No encontrado</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
