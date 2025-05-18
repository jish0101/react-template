import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CheckAuth from "@/components/auth/CheckAuth";
import SuspenseWrapper from "@/pages/SuspenseWrapper";

function App() {
  // General Routes
  const NotFound = lazy(() => import("@/pages/NotFound"));

  // Auth
  const Login = lazy(() => import("@/pages/auth/Login"));
  // const UnAuthorized = lazy(() => import("./auth/UnAuthorized"));

  // Dashboard
  const DashboardLayout = lazy(
    () => import("@/pages/dashboard/DashboardLayout")
  );
  const Dashboard = lazy(() => import("@/pages/dashboard/Dashboard"));

  return (
    <Routes>
      <Route path="/" element={<SuspenseWrapper />}>
        <Route element={<CheckAuth roles={["ADMIN"]} />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
      </Route>

      {/* AUTH ROUTES */}
      <Route element={<SuspenseWrapper />}>
        <Route path="/auth/login" element={<Login />} />
      </Route>

      {/* Unauthorized route if user has different roles */}
      {/* <Route element={<SuspenseWrapper />}>
        <Route path="/auth/unauthorised" element={<UnAuthorised />} />
      </Route> */}

      <Route element={<SuspenseWrapper />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
