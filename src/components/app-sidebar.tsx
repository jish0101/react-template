import * as React from "react";
import { GalleryVerticalEnd, SquareTerminal } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { ProjectSwitcher } from "@/components/project-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Logo from "./Logo";

const data = {
  teams: [
    {
      name: "amazon.com",
      logo: GalleryVerticalEnd,
      plan: "Ecommerce",
    },
  ],
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Create Article",
          url: "",
        },
        {
          title: "Generated Articles",
          url: "/dashboard/articles/generated-articles",
        },
        {
          title: "Keyword Projects",
          url: "#",
        },
        {
          title: "AI Keyword to Article",
          url: "#",
        },
        {
          title: "Steal Comptetitor Keyword",
          url: "#",
        },
        {
          title: "Import Keyword from GSC",
          url: "#",
        },
        {
          title: "Manual Keyword to Article",
          url: "#",
        },
        {
          title: "Bulk Keyword to Article",
          url: "#",
        },
        {
          title: "Longtail Keyword to Article",
          url: "#",
        },
        {
          title: "Article Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Auto Blog",
      url: "/dashboard/auto-blog",
      icon: SquareTerminal,
      isActive: false,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="space-y-4 px-4">
        <Logo />
        <ProjectSwitcher projects={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
