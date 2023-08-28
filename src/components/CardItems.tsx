import { Card, Button } from "react-bootstrap";
import { CurrancyFormater } from "../utilities/CurrancyFormater";
import { useShopingCart } from "../context/ShopingCartContext";

type CardItemType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};
const CardItems = ({ title, id, price, thumbnail }: CardItemType) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShopingCart();
  let quantity = getItemQuantity(id);
  return (
    <Card style={{ border: "none", boxShadow: "1px 1px 5px gray" }}>
      <Card.Img
        variant="top"
        src={thumbnail}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-item-baseline mb-2 fs-[1rem]">
          <span
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {title?.substring(0, 20)}..
          </span>
          <span className="text-muted ">{CurrancyFormater(price)}</span>
        </Card.Title>
        <div className="mt-1">
          <Button
            style={{ visibility: quantity === 0 ? "hidden" : "visible" }}
            onClick={() => removeFromCart(id)}
            className={"mb-1 w-100"}
            variant="warning"
          >
            Remove
          </Button>
          {quantity === 0 ? (
            <Button
              onClick={() => increaseCartQuantity(id)}
              className={"w-100"}
            >
              Add to Cart
            </Button>
          ) : (
            <div className="d-flex flex-column justify-content-center ">
              <div className="d-flex justify-content-between ">
                <Button
                  variant="success"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
                <span>{quantity}</span>
                <Button
                  variant="danger"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardItems;
