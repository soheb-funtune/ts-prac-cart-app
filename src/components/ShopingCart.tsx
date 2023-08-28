import { Offcanvas, Stack } from "react-bootstrap";
import { useShopingCart } from "../context/ShopingCartContext";
import CartItem from "./CartItem";
import { Data } from "../data/cardData";
import { CurrancyFormater } from "../utilities/CurrancyFormater";

const ShopingCart = ({ cartOpen }: { cartOpen: boolean }) => {
  const { closeCart, cartItems } = useShopingCart();
  console.log({ cartItems });
  return (
    <Offcanvas onHide={() => closeCart()} placement="end" show={cartOpen}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Titlte</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          {cartItems?.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            {CurrancyFormater(
              cartItems?.reduce((total, currItem) => {
                const item = Data?.find((i) => i?.id === currItem?.id);
                return total + (item?.price || 0) * currItem?.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShopingCart;
