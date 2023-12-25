import React, { FC } from 'react';
import "../../Styles/SideBar.scss"
import { arrowDownSVG, dashboardSVG, logoutSVG, organizationSVG } from '../../Utils/svg-icons';
import { SideBarProps } from '../../Interfaces/SideBarProps';


const SideBar: FC<SideBarProps> = ({ menuItems, activeItem, setActiveItem, toggleSideMenu }) => {

    const handleItemClick = (itemName: string) => {
        setActiveItem(itemName);
    };

    return (
        <aside className="sidebar" style={toggleSideMenu ? { display: 'none' } : {}}>
            <nav>
                <ul className="sidebar-menu">
                    <li>
                        <div className="top-sidebar-menu-1">
                            {/* organization svg */}
                            {organizationSVG}
                            Switch Organization
                            {/* Arrow Down svg */}
                            {arrowDownSVG}
                        </div>
                    </li>

                    <li >

                        <div className="top-sidebar-menu-2">
                            {/* dashboard svg */}
                            {dashboardSVG}
                            Dashboard
                        </div>
                    </li>


                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.path} className="sidebar-menu-item">
                                <div className="menu-item" >
                                    {item.name}
                                </div>
                            </a>
                            {item.subItems && (
                                <ul className="sidebar-submenu">
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem.name} className={`sidebar-item-container ${activeItem === subItem.name ? 'active-horizontal-bar active-vertical-bar' : ''}`} onClick={() => handleItemClick(subItem.name)}>
                                            <a href="#" className="sidebar-menu-item icon-gap">
                                                <div dangerouslySetInnerHTML={{ __html: subItem.icon }} />
                                                <div className={`sidebar-item-container ${activeItem !== subItem.name ? 'item-color' : ''}`}>{subItem.name}</div>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <hr className='divider' />
                    <li>
                        <a href="/" className="sidebar-menu-item icon-gap">
                            <div className="top-sidebar-menu-1">
                                {/* logout svg */}
                                {logoutSVG}
                                Logout
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideBar;
