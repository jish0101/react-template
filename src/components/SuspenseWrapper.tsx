import { Suspense } from "react";
import Loader from "@/components/Loader";
import { Outlet } from "react-router-dom";

const SuspenseWrapper = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default SuspenseWrapper;
