import { MenuItem } from "./MenuItem";

export interface SideBarProps {
    menuItems: MenuItem[];
    activeItem:string;
    setActiveItem:any;
}
