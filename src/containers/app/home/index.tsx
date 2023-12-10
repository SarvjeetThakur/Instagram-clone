import { useNavigate } from "react-router-dom";
import Button from "../../../componets/reusable/button";
import { authRoutes } from "../../../routes/routes";

export default function Home() {
  const navigate=useNavigate()
const handleLogout=()=>{
  localStorage.clear()
  navigate(authRoutes.signIn.path)
}

  return (
   <>
   <Button onClick={handleLogout}>Logout</Button>
   </>
  )
}
