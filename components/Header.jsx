import { LayoutGrid, Search, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 shadow-md">
      <div className="flex items-center gap-8">
        <Image src="/next.svg" alt="logo" width={100} height={100} />

        <DropdownMenu >
          <DropdownMenuTrigger className="outline-none">
            {" "}
            <h2 className="hidden md:flex gap-2 border px-10 p-2 items-center rounded-full bg-slate-200">
              <LayoutGrid />
              Category
            </h2>
            </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="p-2 hidden md:flex border rounded-full gap-3 items-center px-5">
          <Search className="w-6 h-6" />
          <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search"
            name=""
            id=""
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <h2 className="flex gap-2  p-2 items-center rounded-full">
          <ShoppingBagIcon />0
        </h2>
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
