import Cart from './Cart';
import { IProduct, IProductProps } from './interface';

interface IProductListProps {
  products: IProduct[],
}

const CartList = (props: IProductListProps) => {
  return (
    <div className="cart-list">
      {props.products && props.products.length === 0 && <span>No data added in Cart</span>}
     {props.products.map((product, index) => <Cart  index={Math.floor(Math.random() * 10)} product={product} key={index}/>)}
    </div>
  )
}

export default CartList;