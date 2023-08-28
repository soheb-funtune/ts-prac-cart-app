import { Row, Col } from "react-bootstrap";
import CardItems from "../components/CardItems";
import { Data } from "../data/cardData";
const Store = () => {
  return (
    <Row
      style={{ display: "flex", justifyContent: "center" }}
      className="gap-4"
    >
      {Data?.map((item) => (
        <Col
          style={{ padding: "0px" }}
          lg="3"
          md="4"
          sm="12"
          xs="12"
          key={item?.id}
        >
          <CardItems {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default Store;
