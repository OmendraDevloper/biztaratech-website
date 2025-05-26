import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },

  {
    label: "Services",
    href: "#",
    submenu: [
      { label: "Development", href: "/development" },
      { label: "Training Courses", href: "/courses" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
