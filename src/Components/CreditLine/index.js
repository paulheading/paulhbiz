import Badge from "react-bootstrap/Badge";

export default function CreditLine() {
  return (
    <div className="component-credit-line">
      <Badge className="credit-line" pill>
        <div className="line">Icons made</div>
        <div className="line">
          by&nbsp;&nbsp;
          <a
            href="https://www.flaticon.com/authors/dinosoftlabs"
            className="credit-line"
            title="DinosoftLabs"
          >
            DinosoftLabs
          </a>
        </div>
      </Badge>
    </div>
  );
}
