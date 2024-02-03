import { memo, useEffect } from "react"
import { isAuth } from "../../hook/islogin"
import { Outlet, useNavigate } from "react-router-dom"
import { authRoutes } from "../routes"
import Sidebar from "../../componets/sidebar"
import Page from "../../componets/page"

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
        <Sidebar />
        <Page>
          <Outlet />
        </Page>
      </div>

    </>
  )
})
