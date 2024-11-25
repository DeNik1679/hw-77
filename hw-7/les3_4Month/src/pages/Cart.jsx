import { CartProduct } from "../components/cartPage/cartProduct/CartProduct";
import { OrderSum } from "../components/cartPage/orderSum/OrderSum";


export const Cart = ({cart, setCart}) => {
    return (
        <div className="container">
            <h2>Your cart</h2>
            <CartProduct cart={cart} setCart={setCart}/>
            <OrderSum cart={cart}/>
        </div>
    );
}

