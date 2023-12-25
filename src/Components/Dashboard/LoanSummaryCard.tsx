import { CardProps } from "../../Interfaces/CardProps";

export const LoanSummaryCard = ({ title, value, icon, iconColor }: CardProps) => {
  return (
    <div className="card">
      <div className="user-icon-container" style={iconColor ? { backgroundColor: iconColor } : {}}> <div className="user-icons" dangerouslySetInnerHTML={{ __html: icon }} /></div>
      <p className="card-title">{title}</p>
      <h3 className="card-value">{value}</h3>
    </div>
  );
}