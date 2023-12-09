import { Outlet, useNavigate } from "react-router-dom";
import { isAuth } from "../../hook/islogin";
import { appRoutes } from "../routes";
import { useEffect } from "react";
import Footer from "../../componets/reusable/footer";

export default function AuthPoviders() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth()) {
      navigate(appRoutes.home.path, { replace: true });
    }
  });
  return (
    <>
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}
