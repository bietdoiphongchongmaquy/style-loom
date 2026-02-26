import { NavItem } from "./navigation.types";

export const mainNavigation: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    children: [
      {
        id: "why-us",
        label: "Why Us",
        href: "/why-us",
      },
      {
        id: "about-us",
        label: "About Us",
        href: "/about-us",
      },
      {
        id: "testimonials",
        label: "Testimonials",
        href: "/testimonials",
      },
      {
        id: "faq",
        label: "FAQ’s",
        href: "/faq",
      },
    ],
  },
  {
    id: "products",
    label: "Products",
    href: "/products",
    children: [
      {
        id: "menswear",
        label: "Menswear",
        href: "/products/menswear",
      },
      {
        id: "womenswear",
        label: "Womenswear",
        href: "/products/womenswear",
      },
      {
        id: "kidswear",
        label: "Kidswear",
        href: "/products/kidswear",
      },
    ],
  },
];
