import { Stack, Button } from "react-bootstrap";
import { useShopingCart } from "../context/ShopingCartContext";
import { Data } from "../data/cardData";
import { CurrancyFormater } from "../utilities/CurrancyFormater";
type CartItemPropTypes = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemPropTypes) => {
  const { removeFromCart } = useShopingCart();
  const item = Data?.find((i) => i?.id === id);
  if (item == null) return null;
  return (
    <Stack
      style={{ boxShadow: "1px 1px 5px gray", padding: "5px 10px " }}
      direction="horizontal"
      className="d-flex align-items-center mb-2"
      gap={2}
    >
      <img
        src={item?.thumbnail}
        alt={item?.brand}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.title}{" "}
          {quantity && (
            <span className="text-muted" style={{ fontSize: "12px" }}>
              {quantity}x
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "12px" }}>
          {CurrancyFormater(item?.price)}
        </div>
      </div>
      <div>{CurrancyFormater(quantity * item?.price)}</div>
      <Button onClick={() => removeFromCart(id)} variant="outline-danger">
        X
      </Button>
    </Stack>
  );
};

export default CartItem;
