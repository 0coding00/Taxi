import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";

import { AUTH_PATH } from "./path";
import NotAuth from "@/components/routes/NoAuth";
import LoginPage from "@/pages/auth/login";
import JoinUs from "@/pages/joinUs/JoinUs";
import RegisterUser from "@/pages/user/RegisterUser";
import ApplyDriver from "@/pages/driver/ApplyDriver";
import ApplyEmployee from "@/pages/employee/AppleyEmployee";
import NavBar from "@/pages/layout/NavBar";
import ProtectedRoute from "@/components/routes/ProtectedRoute";
import HomePage from "@/pages/home/HomePage";
import ErrorPage from "@/components/error/ErrorPage";
import Drivers from "@/pages/driver/Drivers";
import NavBarForDr from "@/pages/layout/NavBarForDr";
import DriverDashboard from "@/pages/driver/DriverDashboard";
import DriverTips from "@/pages/driver/DriverTips";
import DriverEarning from "@/pages/driver/DriverEarning";
import DriverProfile from "@/pages/driver/DriverProfile";
import Employees from "@/pages/employee/Employes";
import Users from "@/pages/user/Users";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public routes for unauthenticated users */}
      <Route element={<NotAuth />}>
        <Route path={AUTH_PATH.LOGIN} element={<LoginPage />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/appleyDriver" element={<ApplyDriver />} />
        <Route path="/appleyEmployee" element={<ApplyEmployee />} />
        {/* just for test  */}
        {/* <Route path="/drivers" element={<Drivers />} /> */}
        {/* for driver nav bar */}
        <Route path="/driverNavBar" element={<NavBarForDr />}>
          <Route path="driverDashBoard" element={<DriverDashboard />}></Route>
          <Route path="driverTips" element={<DriverTips />}></Route>
          <Route path="driverEarnings" element={<DriverEarning />}></Route>
          <Route path="driverProfile" element={<DriverProfile />}></Route>
        </Route>
      </Route>

      {/* Protected routes for authenticated users */}

      <Route element={<NavBar />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/drivers" element={<Drivers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/users" element={<Users />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route>
    </>
  )
);

export default routes;
