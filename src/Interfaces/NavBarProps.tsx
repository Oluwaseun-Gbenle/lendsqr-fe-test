export interface NavBarProps {
  userProfileData?: {
    name: string;
    avatarUrl: string;
  };
  toggleSideMenu?: boolean,
  setToggleSideMenu: any
}

export interface UserProfile {
  name: string;
  avatarUrl: string;

}