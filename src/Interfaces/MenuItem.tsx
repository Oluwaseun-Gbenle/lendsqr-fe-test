export interface MenuItem {
    name: string;
    icon: string;
    path: string;
    subItems?: MenuItem[];
  }