import { ComponentType } from "react";

export interface SocialItem {
  id: string;
  label: string;
  href: string;
  icon: ComponentType;
}
