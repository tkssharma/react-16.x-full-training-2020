import React, {useState, useEffect, useRef} from 'react';

const Product = (props) => {

  const [quantity, setQuantity] = useState(0)

  const add = () => {
    setQuantity(quantity + 1);
    props.handleTotal( props.price);
  }

  const subtract = () => {
    setQuantity(quantity - 1);
    props.handleTotal(- props.price);
  }

  const showInfo = () => {
    props.handleShow( props.info);
  }
  return (
    <div>
      <div className="row form-group">
        <div className="col-sm-10">
          <h4>{props.name}: ${props.price}</h4>
        </div>
        <div className="col-sm-2 text-right">qty: {quantity}</div>
      </div>
      <div className="row btn-toolbar">
        <div className="col-6">
          <button className="btn btn-outline-primary" onClick={showInfo}>
            show info
              </button>
        </div>
        <div className="col-6 text-right">
          <button className="btn btn-outline-primary" onClick={add}>
            +1
              </button>
          <button className="btn btn-outline-primary" onClick={subtract} disabled={quantity < 1}>
            -1
              </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Product;