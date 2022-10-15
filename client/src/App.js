import './App.css'
import back from './assets/shirt.jpeg'
import front from './assets/front.jpeg'

function App() {
  return (
    <div className="App">
      <h1 className="title"># Team Lindsay</h1>
      <h2 className="subheading">Her Fight is Our Fight</h2>
      <div className="product_display">
        <img className="product_img" src={front} />
        <img className="product_img" src={back} />
      </div>
    </div>
  )
}

export default App
