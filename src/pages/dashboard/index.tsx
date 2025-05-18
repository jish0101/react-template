import { wait } from "@/lib/utils";
import { useEffect } from "react";
import Paper from "@/components/paper";
import Loader from "@/components/Loader";
import { Outlet } from "react-router-dom";
import useLoading from "@/store/useLoading";
import { AppSidebar } from "@/components/app-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardNav from "@/components/dashboard/DashboardNav";

const DashboardLayout = () => {
  const { isLoading, setIsLoading } = useLoading();

  // Simulating loading
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await wait(1000);
      setIsLoading(false);
    })();
  }, [setIsLoading]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <DashboardNav />
        {isLoading ? <Loader /> : null}
        <ScrollArea
          type="scroll"
          className={`h-[calc(100dvh-60px)] bg-slate-100`}
        >
          <Paper className="min-h-[calc(100dvh-100px)] w-[calc(100%-40px)] m-[20px]">
            <Outlet />
          </Paper>
        </ScrollArea>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
