import Badge from "react-bootstrap/Badge";

export default function CreditSection() {
  return (
    <div className="component credit-line">
      <Badge className="credit-line" pill>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/dinosoftlabs"
          className="credit-line"
          title="DinosoftLabs"
        >
          DinosoftLabs
        </a>
      </Badge>
    </div>
  );
}
