import { NavItem } from "./nav-item/nav-item";

export const navItems: NavItem[] = [
  {
    navCap: " ",
  },
  {
    displayName: "maps",
    iconName: "map-2",
    route: "/maps",
  },
  {
    displayName: "insights",
    iconName: "chart-line",
    route: "/insights",
  },

  {
    displayName: "reports",
    iconName: "file-description",
    route: "/reports",
  },
  // {
  //   displayName: "notify users",
  //   iconName: "bell",
  //   route: "/notify-users",
  // },
  {
    displayName: "danger notifications",
    iconName: "alert-triangle",
    route: "/danger-notifications",
  },
];
