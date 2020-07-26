import { useContext, useState } from 'react';
import { withRouter, Router } from 'next/router';
import { IProduct, IProductProps } from './interface';
import  CartContext from './CartContext';

const Cart = (props: IProductProps) => {
  const { cart, addInCart, removeFromCart  } = useContext(CartContext);
   const [added, setAdded] = useState(false);

   const removeItem = (id) => {
    removeFromCart(id)
    setAdded(false);
   }
  return (
    <div className="cart">
        <div className="content">
        <h4 className="content__title">{props.product.title}</h4>
        </div>
      <div className="product__price-button-container">
        <div className="product__price">${props.product.list_price.price.toFixed(2)}</div>
        <button onClick={() => removeItem(props.product.id)}
          className="snipcart-add-item product__button">
          Remove
        </button>
      </div>
    </div>
  )
}

export default withRouter(Cart)