import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils";

type Item = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

interface NavMainProps {
  items: Item[];
}

export function NavMain({ items }: NavMainProps) {
  const location = useLocation();
  console.log("🚀 ~ NavMain ~ location:", location);

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <>
            {item.items ? (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      className="space-x-2"
                      tooltip={item.title}
                    >
                      {item.icon && <item.icon className="text-primary" />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild className="mx-2">
                            <Link
                              className={cn(
                                location.pathname === subItem.url &&
                                  "!text-primary"
                              )}
                              to={subItem.url}
                            >
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  className="space-x-2"
                  tooltip={item.title}
                  isActive={location.pathname === item.url}
                >
                  {item.icon && <item.icon className="text-primary" />}
                  <Link
                    className={cn(
                      location.pathname === item.url && "!text-primary"
                    )}
                    to={item.url}
                  >
                    {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
