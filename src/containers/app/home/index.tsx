import { useNavigate } from "react-router-dom";
import Button from "../../../componets/reusable/button";
import { authRoutes } from "../../../routes/routes";
import Sidebar from "../../../componets/sidebar";
import Page from "../../../componets/page";
import Footer from "../../../componets/reusable/footer";

export default function Home() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate(authRoutes.signIn.path)
  }

  return (
    <>
        <Sidebar />

      <Page>
        <Button onClick={handleLogout}>Logout</Button>asasd
        <div className="h-[500px]"></div>
        <Footer />
      </Page>

    </>
  )
}
