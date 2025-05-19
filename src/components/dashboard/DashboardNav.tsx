import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Settings, UserPen } from "lucide-react";
import UserAvatar from "@/components/dashboard/UserAvatar";

const DashboardNav = () => {
  const { toggleSidebar } = useSidebar();
  const options = [
    {
      title: "Profile",
      href: "/settings/user/profile",
      icon: <UserPen size={18} />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <nav
      className={`flex h-[60px] items-center justify-between gap-2 border-b p-3`}
    >
      <Button
        variant={"ghost"}
        onClick={toggleSidebar}
        size={"icon"}
        className="flex aspect-[1] h-[45px] w-[45px] rounded-full md:[&_svg]:size-5"
      >
        <Menu />
      </Button>

      <div className="flex items-center justify-center">
        <UserAvatar options={options} />
      </div>
    </nav>
  );
};

export default DashboardNav;
