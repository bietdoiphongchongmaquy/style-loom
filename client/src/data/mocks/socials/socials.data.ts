import ICBehance from "@/components/icons/ic-behance";
import ICDribbble from "@/components/icons/ic-dribbble";
import ICInstagram from "@/components/icons/ic-instagram";
import ICTwitter from "@/components/icons/ic-twitter";

import { SocialItem } from "./socials.types";

export const mainSocials: SocialItem[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: ICInstagram,
  },
  {
    id: "dribbble",
    label: "Dribbble",
    href: "https://dribbble.com/",
    icon: ICDribbble,
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://x.com/",
    icon: ICTwitter,
  },
  {
    id: "behance",
    label: "Behance",
    href: "https://www.behance.net/",
    icon: ICBehance,
  },
];
