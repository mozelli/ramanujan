import { Link, Outlet } from "react-router-dom";

import Header from "../../../components/admin/Header";
import "./styles.css";

function Dashboard() {
  return (
    <>
      <Header />
      <div className="row">
        <div id="Dashboard" className="col l12">
          <div className="col l2 sideMenu">
            <div className="navigation">
              <Link to={"/dashboard"}>Painel</Link>
              <Link to={"/dashboard/posts"}>Posts</Link>
              <Link to={"/"}>Categorias</Link>
              <Link to={"/"}>Tags</Link>
            </div>
          </div>
          <div className="col l10 display">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;