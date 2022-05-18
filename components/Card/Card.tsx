import CardHeader from "./CardHeader";

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="card">{children}</div>;
};

export default Card;
