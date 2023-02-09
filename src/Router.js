import { BrowserRouter, Route, Routes} from "react-router-dom";

// Client
import Home from './pages/client/Home';

// Admin
import Dashboard from "./pages/admin/Dashboard";
import Panel from "./pages/admin/Dashboard/Panel";
import DashboardPosts from "./pages/admin/Dashboard/DashboardPosts";
import CreatePost from "./pages/admin/Dashboard/DashboardPosts/CreatePost";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Panel />} />
          <Route path="/dashboard/posts" element={<DashboardPosts />} />
          <Route path="/dashboard/posts/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;