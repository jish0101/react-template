import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { Button, buttonVariants } from "../ui/button";
import useUser from "@/store/useUser";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { JSX } from "react";

type Option = {
  title: string;
  href: string;
  icon: JSX.Element;
};

type Props = {
  options: Option[];
};

const UserAvatar = ({ options }: Props) => {
  const navigate = useNavigate();

  const user = useUser((state) => state.user);
  const clearUser = useUser((state) => state.clearUser);

  const handleLogout = async () => {
    clearUser();
    navigate("/auth/login");
  };

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger>
          <DropdownMenuTrigger asChild>
            <Avatar
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "flex h-8 w-8 items-center rounded-full"
              )}
            >
              <AvatarFallback>
                {user ? user.name.at(0)?.toUpperCase() : null}
              </AvatarFallback>
              {/* <AvatarImage src={} /> */}
            </Avatar>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>More Options</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        {options.map((link) => (
          <div key={link.href}>
            <Link className="block w-full" to={link.href}>
              <DropdownMenuItem className="cursor-pointer py-0">
                <DropdownMenuLabel className="text-base font-normal">
                  {link.title}
                </DropdownMenuLabel>
                <DropdownMenuShortcut>{link.icon}</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
          </div>
        ))}
        <DropdownMenuItem className="cursor-pointer p-0">
          <Button
            onClick={handleLogout}
            className="w-full"
            variant={"destructive"}
          >
            <DropdownMenuLabel className="text-base font-normal">
              Logout
            </DropdownMenuLabel>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAvatar;
