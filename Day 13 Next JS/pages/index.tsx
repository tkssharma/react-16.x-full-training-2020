import {useState} from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import CartList from '../components/CartList'
import { IProduct, IProductProps } from '../components/interface';

import Footer from '../components/Footer';
import MockData from '../components/mockData';
import Head from 'next/head';
import '../styles.scss';
import Banner from '../components/banner';
import CartContext from '../components/CartContext';

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  const [cart, setCart] = useState([]);
  const [view, setView] =useState('products');

  const addTocart = (payload) => {
    setCart(i => {
       i.push(payload)
      return i;
    });
  }
  const removeFromCart = (id) => {
    setCart((i: any) => {
      const newCart = i.filter(i => i.itemId !== id);
      return newCart;
    });
  }
  const toggleView = (type) => {
    setView(type);
  }
   return (
    <CartContext.Provider  value={{ 
       cart:cart, addInCart: addTocart,
       removeFromCart: removeFromCart ,
       toggleView: toggleView}}>

    <div className="app">
      <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" /> 
      </Head>
      <Header />
      <Banner/>
      <main className="main">
       { (view === 'products' ? <ProductList products={props.products} /> : <CartList  products={cart}/>) } 
      </main>
      <Footer />
    </div>
    </CartContext.Provider>
  )
}

Index.getInitialProps = async ({ req }) => {
  return {
    products: MockData
  }
}

export default Index