import Link from "next/link";
import { useContext } from 'react';
import CartContext from './CartContext';

export default function Header() {
  const { cart, toggleView } = useContext(CartContext);

  return (
    <header className="header">
      <div className="left-menu">
      <Link href="/">
        <img src="/static/logo.svg" alt="" className="header__logo" />
      </Link>
      <Link href="/">
        <h1 className="header__title">Target.com</h1>
      </Link>
      </div>
      <div className="right-menu">
      <Link href="/">
        <img src="/static/profile.svg" onClick={() => toggleView('products')} alt="" className="header__logo" />
      </Link>
      <Link href="/">
        <img src="/static/cart.svg" onClick={() => toggleView('cart')} alt="" className="header__logo" />
      </Link>
      </div>
    </header>
  )
}