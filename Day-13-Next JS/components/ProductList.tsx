import Product from './Product';
import { IProduct, IProductProps } from './interface';


interface IProductListProps {
  products: IProduct[] | any
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => <Product index={Math.floor(Math.random() * 10)}
         product={product} key={index}/>)}
    </div>
  )
}

export default ProductList;