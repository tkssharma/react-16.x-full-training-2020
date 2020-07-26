import { useContext, useState } from 'react';

import { withRouter, Router } from 'next/router';
import CartContext from './CartContext';
import { IProduct, IProductProps } from './interface'

const Product = (props: IProductProps) => {
  const { cart, addInCart, removeFromCart  } = useContext(CartContext);
   const [added, setAdded] = useState(false);

   const addItem =(product, id) => {
     const payload = product;
     payload.id = id;
    addInCart(payload)
    setAdded(true);
   }
   const removeItem = (id) => {
    removeFromCart(id)
    setAdded(false);
   }
  return (
    <div className="product">
        <div className="content">
        <h4 className="content__title">{props.product.title}</h4>
         <p className="content__description">{props.product.description && props.product.description.substr(0,100) }</p>
        </div>
      <img src={props.product.images[0].base_url} alt="" className="product__image"/>
      <div className="product__price-button-container">
        <div className="product__price">${props.product.list_price.price.toFixed(2)}</div>
         { !added && <button onClick={() => addItem(props.product, props.product.itemId)}
          className="snipcart-add-item product__button">
          Add to cart
        </button>
        }
        { added && <button onClick={() => removeItem(props.product.itemId)}
          className="snipcart-add-item product__button">
          Remove
        </button>
        }
      </div>
    </div>
  )
}

export default withRouter(Product)