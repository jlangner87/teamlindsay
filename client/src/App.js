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
  //
  let [fName, setFname] = useState('')
  let [lName, setLName] = useState('')
  let [phone, setPhone] = useState('')
  let [email, setEmail] = useState('')
  //
  let [pinkYXS, setPinkYXS] = useState(0)
  let [pinkYS, setPinkYS] = useState(0)
  let [pinkYM, setPinkYM] = useState(0)
  let [pinkYL, setPinkYL] = useState(0)
  let [pinkYXL, setPinkYXL] = useState(0)
  //
  let [pinkXS, setPinkXS] = useState(0)
  let [pinkS, setPinkS] = useState(0)
  let [pinkM, setPinkM] = useState(0)
  let [pinkL, setPinkL] = useState(0)
  let [pinkXL, setPinkXL] = useState(0)
  //
  let [blackYXS, setBlackYXS] = useState(0)
  let [blackYS, setBlackYS] = useState(0)
  let [blackYM, setBlackYM] = useState(0)
  let [blackYL, setBlackYL] = useState(0)
  let [blackYXL, setBlackYXL] = useState(0)
  //
  let [blackXS, setBlackXS] = useState(0)
  let [blackS, setBlackS] = useState(0)
  let [blackM, setBlackM] = useState(0)
  let [blackL, setBlackL] = useState(0)
  let [blackXL, setBlackXL] = useState(0)
  //
  let [whiteYXS, setWhiteYXS] = useState(0)
  let [whiteYS, setWhiteYS] = useState(0)
  let [whiteYM, setWhiteYM] = useState(0)
  let [whiteYL, setWhiteYL] = useState(0)
  let [whiteYXL, setWhiteYXL] = useState(0)
  //
  let [whiteXS, setWhiteXS] = useState(0)
  let [whiteS, setWhiteS] = useState(0)
  let [whiteM, setWhiteM] = useState(0)
  let [whiteL, setWhiteL] = useState(0)
  let [whiteXL, setWhiteXL] = useState(0)

  const handleCart = (event) => {
    event.preventDefault()
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
            <button onClick={handleCart}>ADD TO CART</button>
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
          </div>
          <div className="form3">
            <p className="subtitle2">PAYMENT</p>
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
            <button>ORDER</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
