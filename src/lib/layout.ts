import { routeTree } from "@/routeTree.gen";
import { RoutePaths } from "@tanstack/react-router";
import { Blocks, House, LucideIcon, BookMarked, Star, Upload, BookOpenText } from "lucide-react";

export type Submenu = {
  href: RoutePaths<typeof routeTree>;
  label: string;
  active: boolean;
};

type Menu = {
  href: RoutePaths<typeof routeTree>;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
  disabled?: boolean;
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: RoutePaths<typeof routeTree> | string, beta: boolean): Group[] {
  return [
    {
      groupLabel: "General",
      menus: [
        {
          href: "/featured",
          label: "Featured",
          active: pathname === "/featured",
          icon: Star,
          submenus: [],
        },
        {
          href: "/library",
          label: "Library",
          active: pathname === "/library",
          icon: BookMarked,
          submenus: [],
          disabled: import.meta.env.PROD,
        },
        {
          href: "/upload",
          label: "Upload",
          active: pathname === "/upload",
          icon: Upload,
          submenus: [],
          disabled: import.meta.env.PROD,
        },
      ],
    },
    {
      groupLabel: "Account",
      menus: [
        {
          href: "/account",
          label: "Account",
          active: pathname === "/account",
          icon: House,
          submenus: [],
          disabled: import.meta.env.DEV ? false : !beta,
        },
        {
          href: "/lists",
          label: "Lists",
          active: pathname === "/lists",
          icon: BookOpenText,
          submenus: [],
        },
        {
          href: "/settings",
          label: "Settings",
          active: pathname === "/settings",
          icon: Blocks,
          submenus: [],
        },
      ],
    },
  ];
}
