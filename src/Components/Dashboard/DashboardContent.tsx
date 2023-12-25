import UnavailablePage from "../UnavailablePage";
import Users from "./Users";
import UsersDetails from "./UsersDetails";

export const dashboardContent = (activeItem: string, setActiveItem: any) => {
  switch (activeItem) {
    case 'Users':
      return <Users setActiveItem={setActiveItem} />;
    case 'Users Details':
      return <UsersDetails />
    default:
      return <UnavailablePage />;
  }
};