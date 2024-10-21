import useAuthStore from "../store/authStore";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const auth = useAuthStore((state)=>(state.isAuth))
  if(!auth) return <Navigate to="/"/>
  return <Outlet/>
}
