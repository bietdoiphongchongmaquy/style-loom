export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}
