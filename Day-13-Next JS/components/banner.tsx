import Link from "next/link";
export default function Header() {
  return (
    <div className="banner">
        <div className="container">
          <h1>Umbrellas</h1>
          <div className="breadcrumb" data-test="breadcrumb">
           <ul className="list-items">
             <li>Target /</li>
             <li>Women /</li>
             <li>Women's Accessories/</li>
             <li>Umbrellas (89)</li>
           </ul>
        </div>
        </div>
    </div>
  )
}