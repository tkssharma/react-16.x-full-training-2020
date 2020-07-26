import { withRouter, Router } from 'next/router';

export interface IProduct {
  id: string
  title: string
  url: string
  description: string
  images: IImage
  itemId: string,
  top_reviews: ITopReviews,
  list_price: IPrice,
  offer_price: IPrice,
}
interface IImage {
  base_url?: string,
  primary?: string
}
interface IPrice {
  price?: number,
  min_price?: number,
  max_price?: number,
  formatted_price?: number,
  price_type: string
}
interface ITopReviews {
  user_nickname: string,
   title: string,
  rating: number,
  rating_range: number,
  review_text: string,
  last_moderated_time: string
}

export interface IProductProps {
  product: IProduct
  router: Router
  index?: number
}