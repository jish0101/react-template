import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CheckAuth from "@/components/auth/CheckAuth";
import SuspenseWrapper from "@/components/SuspenseWrapper";

function App() {
  // General Routes
  const NotFound = lazy(() => import("@/pages/general/NotFound"));
  const Home = lazy(() => import("@/pages/home/Home"));

  // Auth Routes
  const Login = lazy(() => import("@/pages/auth/Login"));
  // const UnAuthorized = lazy(() => import("./auth/UnAuthorized"));

  // Dashboard Routes
  const DashboardLayout = lazy(() => import("@/pages/dashboard"));
  const Dashboard = lazy(() => import("@/pages/dashboard/Dashboard"));

  const ArticlesLayout = lazy(() => import("@/pages/dashboard/articles"));
  const GeneratedArticles = lazy(
    () => import("@/pages/dashboard/articles/GenerateArticles")
  );

  return (
    <Routes>
      <Route element={<SuspenseWrapper />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/dashboard" element={<SuspenseWrapper />}>
        <Route element={<CheckAuth roles={["ADMIN"]} />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="articles" element={<ArticlesLayout />}>
              <Route
                path="generated-articles"
                element={<GeneratedArticles />}
              />
            </Route>
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
