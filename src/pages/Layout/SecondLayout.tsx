import { Outlet } from "react-router-dom"
import Navbar from "../../Component/Shared/Navbar"

export const SecondLayout = () => {
  return (
      <div>
          <Navbar />
          <Outlet/>
    </div>
  )
}
