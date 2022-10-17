import './App.css'
import { useState } from 'react'
import back from './assets/back.png'
import front from './assets/front.png'
import black from './assets/black.png'
import pink from './assets/pink.png'
import white from './assets/white.png'
import logo from './assets/logo.png'
import venmo from './assets/venmo.png'
import paypal from './assets/paypal.png'

function App() {
  let [price, setPrice] = useState(0)
  let [cart, setCart] = useState('')

  const initialState = {
    first: '',
    last: '',
    phone: '',
    email: '',
    pinkYouthXs: '',
    pinkYouthS: '',
    pinkYouthM: '',
    pinkYouthL: '',
    pinkYouthXl: '',
    pinkAdultXs: '',
    pinkAdultS: '',
    pinkAdultM: '',
    pinkAdultL: '',
    pinkAdultXl: '',
    pinkAdult2Xl: '',
    pinkAdult3Xl: '',
    pinkAdult4Xl: '',
    blackYouthXs: '',
    blackYouthS: '',
    blackYouthM: '',
    blackYouthL: '',
    blackYouthXl: '',
    blackAdultXs: '',
    blackAdultS: '',
    blackAdultM: '',
    blackAdultL: '',
    blackAdultXl: '',
    blackAdult2Xl: '',
    blackAdult3Xl: '',
    blackAdult4Xl: '',
    whiteYouthXs: '',
    whiteYouthS: '',
    whiteYouthM: '',
    whiteYouthL: '',
    whiteYouthXl: '',
    whiteAdultXs: '',
    whiteAdultS: '',
    whiteAdultM: '',
    whiteAdultL: '',
    whiteAdultXl: '',
    whiteAdult2Xl: '',
    whiteAdult3Xl: '',
    whiteAdult4Xl: '',
    payment: 'I have NOT submitted payment.'
  }

  const handleCart = (event) => {
    event.preventDefault()
    setCart(`your cart`)
    setPrice(price + 18)
  }

  const handleOrder = () => {}

  return (
    <div className="App">
      <div className="header">
        <h1 className="title"># TEAMLINDSAY</h1>
        <img className="logo" src={logo} />
      </div>
      <h1 className="subtitle">BENEFIT T-SHIRTS</h1>
      <div className="color_opt_row">
        <div className="color_opt">
          <h3 className="subtitle2">Pink</h3>
          <img className="product_img2" src={pink} />
        </div>
        <div className="color_opt">
          <h3 className="subtitle2">black</h3>
          <img className="product_img2" src={black} />
        </div>
        <div className="color_opt">
          <h3 className="subtitle2">white</h3>
          <img className="product_img2" src={white} />
        </div>
      </div>
      <h1 className="subtitle">PLACE YOUR ORDER NOW</h1>
      <div className="form_container">
        <form>
          <p className="subtitle2">contact information</p>
          <div className="form">
            <div className="field_container">
              <label>First Name:</label>
              <input></input>
            </div>
            <div className="field_container">
              <label>Last Name:</label>
              <input></input>
            </div>
            <div className="field_container">
              <label>Phone Number:</label>
              <input></input>
            </div>
            <div className="field_container">
              <label>Email:</label>
              <input></input>
            </div>
          </div>
          <div className="color_form">
            <p className="subtitle2">PINK Shirts</p>
            <p className="youth">Youth $18</p>
            <div className="form2">
              <div className="field_container">
                <label>XS</label>
                <input id={price} className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>S</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>M</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>L</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
            </div>
            <p className="youth">Adult $22</p>
            <div className="form2">
              <div className="field_container">
                <label>XS</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>S</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>M</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>L</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>2XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>3XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>4XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
            </div>
          </div>
          <div className="color_form">
            <p className="subtitle2">BLACK shirts</p>
            <p className="youth">Youth $18</p>
            <div className="form2">
              <div className="field_container">
                <label>XS</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>S</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>M</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>L</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
            </div>
            <p className="youth">Adult $22</p>
            <div className="form2">
              <div className="field_container">
                <label>XS</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>S</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>M</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>L</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>2XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>3XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>4XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
            </div>
          </div>
          <div className="color_form">
            <p className="subtitle2">WHITE shirts</p>
            <p className="youth">Youth $18</p>
            <div className="form2">
              <div className="field_container">
                <label>XS</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>S</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>M</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>L</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
            </div>
            <p className="youth">Adult $22</p>
            <div className="form2">
              <div className="field_container">
                <label>XS</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>S</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>M</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>L</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>2XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>3XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
              <div className="field_container">
                <label>4XL</label>
                <input className="qty" placeholder="qty"></input>
              </div>
            </div>
            <button onClick={handleCart}>ADD TO ORDER</button>
          </div>
          <div className="form3">
            <p className="subtitle2">PAYMENT</p>
            <p className="text">{cart}</p>
            <p className="price">TOTAL: ${price}.00</p>
            <p className="text">
              Please make payments to one of the following accounts.
            </p>
            <br />
            <p className="text">
              Orders will be processed after payment is verified
            </p>
            <div className="payment_container">
              <div className="payment_opt">
                <a href="https://www.paypal.com">
                  <img className="pay_logo" src={paypal} />
                </a>
                <p className="subtitle3">@acowell24</p>
              </div>
              <div className="payment_opt2">
                <a href="https://www.venmo.com">
                  <img className="pay_logo" src={venmo} />
                </a>
                <p className="subtitle3">@Amy-Bendlin-2</p>
              </div>
            </div>
            <label>I have submitted payment</label>
            <br />
            <input className="checkbox" type="checkbox"></input>
          </div>
          <div>
            <button>PLACE ORDER</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
