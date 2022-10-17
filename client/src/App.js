import './App.css'
import { useState } from 'react'
import back from './assets/back.png'
import front from './assets/front.png'
import add_cart from './assets/add_cart.png'
import view_cart from './assets/view_cart.png'
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
    pinkYouthXs: 0,
    pinkYouthS: 0,
    pinkYouthM: 0,
    pinkYouthL: 0,
    pinkYouthXl: 0,
    pinkAdultXs: 0,
    pinkAdultS: 0,
    pinkAdultM: 0,
    pinkAdultL: 0,
    pinkAdultXl: 0,
    pinkAdult2Xl: 0,
    pinkAdult3Xl: 0,
    pinkAdult4Xl: 0,
    blackYouthXs: 0,
    blackYouthS: 0,
    blackYouthM: 0,
    blackYouthL: 0,
    blackYouthXl: 0,
    blackAdultXs: 0,
    blackAdultS: 0,
    blackAdultM: 0,
    blackAdultL: 0,
    blackAdultXl: 0,
    blackAdult2Xl: 0,
    blackAdult3Xl: 0,
    blackAdult4Xl: 0,
    whiteYouthXs: 0,
    whiteYouthS: 0,
    whiteYouthM: 0,
    whiteYouthL: 0,
    whiteYouthXl: 0,
    whiteAdultXs: 0,
    whiteAdultS: 0,
    whiteAdultM: 0,
    whiteAdultL: 0,
    whiteAdultXl: 0,
    whiteAdult2Xl: 0,
    whiteAdult3Xl: 0,
    whiteAdult4Xl: 0,
    payment: 'I have NOT submitted payment.'
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleCart = (event) => {
    event.preventDefault()
    setCart(
      `💖 Youth Pink XS: QTY= ${formState.pinkYouthXs} @ $18.00 ea. = $${
        parseInt(formState.pinkYouthXs) * 18
      }.00
      💖 Youth Pink S: QTY= ${formState.pinkYouthS} @ $18.00 ea. = $${
        parseInt(formState.pinkYouthS) * 18
      }.00
      💖 Youth Pink M: QTY:= ${formState.pinkYouthM} @ $18.00 ea. = $${
        parseInt(formState.pinkYouthM) * 18
      }.00
      💖 Youth Pink L: QTY= ${formState.pinkYouthL} @ $18.00 ea. = $${
        parseInt(formState.pinkYouthL) * 18
      }.00
      💖 Youth Pink XL: QTY= ${formState.pinkYouthXl} @ $18.00 ea. = $${
        parseInt(formState.pinkYouthXl) * 18
      }.00`
    )

    setPrice(
      parseInt(formState.pinkYouthXs) * 18 +
        parseInt(formState.pinkYouthS) * 18 +
        parseInt(formState.pinkYouthM) * 18 +
        parseInt(formState.pinkYouthL) * 18 +
        parseInt(formState.pinkYouthXl) * 18 +
        parseInt(formState.pinkAdultXs) * 22 +
        parseInt(formState.pinkAdultS) * 22 +
        parseInt(formState.pinkAdultM) * 22 +
        parseInt(formState.pinkAdultL) * 22 +
        parseInt(formState.pinkAdultXl) * 22 +
        parseInt(formState.pinkAdult2Xl) * 22 +
        parseInt(formState.pinkAdult3Xl) * 22 +
        parseInt(formState.pinkAdult4Xl) * 22
    )
  }

  const handleOrder = (event) => {
    event.preventDefault()
    alert(`YOUR ORDER HAS BEEN PLACED`)
  }

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
        <form onSubmit={handleOrder}>
          <p className="subtitle2">contact information</p>
          <div className="form">
            <div className="field_container">
              <label>First Name:</label>
              <input
                id="first"
                value={formState.first}
                placeholder="First Name"
                onChange={handleChange}
              ></input>
            </div>
            <div className="field_container">
              <label>Last Name:</label>
              <input
                id="last"
                value={formState.last}
                placeholder="Last Name"
                onChange={handleChange}
              ></input>
            </div>
            <div className="field_container">
              <label>Phone Number:</label>
              <input
                id="phone"
                value={formState.phone}
                placeholder="Phone Number"
                onChange={handleChange}
              ></input>
            </div>
            <div className="field_container">
              <label>Email:</label>
              <input
                id="email"
                value={formState.email}
                placeholder="Email Address"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="color_form">
            <p className="subtitle2">PINK Shirts</p>
            <p className="youth">Youth $18</p>
            <div className="form2">
              <div className="field_container">
                <label>XS</label>
                <input
                  id="pinkYouthXs"
                  value={formState.pinkYouthXs}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>S</label>
                <input
                  id="pinkYouthS"
                  value={formState.pinkYouthS}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>M</label>
                <input
                  id="pinkYouthM"
                  value={formState.pinkYouthM}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>L</label>
                <input
                  id="pinkYouthL"
                  value={formState.pinkYouthL}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>XL</label>
                <input
                  id="pinkYouthXl"
                  value={formState.pinkYouthXl}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
            </div>
            <p className="youth">Adult $22</p>
            <div className="form2">
              <div className="field_container">
                <label>XS</label>
                <input
                  id="pinkAdultXs"
                  value={formState.pinkAdultXs}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>S</label>
                <input
                  id="pinkAdultS"
                  value={formState.pinkAdultS}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>M</label>
                <input
                  id="pinkAdultM"
                  value={formState.pinkAdultM}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>L</label>
                <input
                  id="pinkAdultL"
                  value={formState.pinkAdultL}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>XL</label>
                <input
                  id="pinkAdultXl"
                  value={formState.pinkAdultXl}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>2XL</label>
                <input
                  id="pinkAdult2Xl"
                  value={formState.pinkAdult2Xl}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>3XL</label>
                <input
                  id="pinkAdult3Xl"
                  value={formState.pinkAdult3Xl}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
              </div>
              <div className="field_container">
                <label>4XL</label>
                <input
                  id="pinkAdult4Xl"
                  value={formState.pinkAdult4Xl}
                  onChange={handleChange}
                  className="qty"
                  placeholder="qty"
                  type="number"
                ></input>
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
            <button onClick={handleCart}>
              <img className="cart_logo" src={add_cart} /> ADD
            </button>
          </div>
          <div className="form3">
            <p className="subtitle2">YOUR ORDER</p>
            <p className="text">
              Hey, {formState.first}! Thank you so much for ordering!
            </p>
            <br />
            <p className="text">Does Everything look correct?</p>
            <div className="cart">
              <img className="cart_logo" src={view_cart} />
              <p className="text">{cart}</p>
            </div>
            <p className="price">TOTAL: ${price}.00</p>
            <p className="subtitle2">PAYMENT</p>
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
