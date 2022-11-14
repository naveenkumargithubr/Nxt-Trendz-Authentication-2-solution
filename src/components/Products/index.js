// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Products = () => {
  const token = Cookies.get('jwt_token')

  // if user has not logged in and tries to access the products Route the navigate to login page
  if (token === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="product-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="img"
        />
      </div>
    </>
  )
}

export default Products
