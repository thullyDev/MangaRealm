interface NavItem {
  name: string;
  link: string;
}

export const navs: NavItem[] = [
  {
    name: "Popular",
    link: "/filter",
  },
  {
    name: "Recent",
    link: "/filter?status=recent",
  },
  {
    name: "Complete",
    link: "/filter?status=complete",
  },
  {
    name: "Ongoings",
    link: "/filter?status=ongoing",
  },
  {
    name: "Newest",
    link: "/filter?status=newest",
  },
  {
    name: "Random",
    link: "/random",
  },
];