import { memo, useEffect } from "react"
import { isAuth } from "../../hook/islogin"
import { Outlet, useNavigate } from "react-router-dom"
import { authRoutes } from "../routes"
// import Footer from "../../componets/reusable/footer"

export default memo(function AppProviders() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth()) {
      navigate(authRoutes.signIn.path, { replace: true })
    }
  })

  return (
    <>
      <div className="container mx-auto absolute">
        <Outlet />
      </div>
      {/* <Footer /> */}

    </>
  )
})
