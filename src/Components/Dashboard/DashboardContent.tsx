import NotAvailable from "../NotAvailable";
import Users from "./Users";

export const dashboardContent = (activeTab: string) => {
  switch (activeTab) {
    case 'Users':
      return <Users />;
    default:
      return <NotAvailable />;
  }
};