import { useState } from 'react'
import "./App.css"
import Card from './components/card/Card'
function App() {
  const [product, setProduct] = useState([{
    id: 1,
    title: "MSI ANAKARt",
    image: "https://picsum.photos/id/2/5000/3333",
    info: "3.0 GHZ 3xUSB 2.90",
    adet: 1
  }, {
    id: 2,
    title: "RAM",
    image: "https://picsum.photos/id/1/5000/3333",
    info: "3.0 GHZ 3xUSB 2.90",
    adet: 1
  }, {
    id: 3,
    title: "EKRAN KARTI",
    image: "https://picsum.photos/id/2/5000/3333",
    info: "3.0 GHZ 3xUSB 2.90",
    adet: 1
  }, {
    id: 4,
    title: "MONITOR",
    image: "https://picsum.photos/id/2/5000/3333",
    info: "3.0 GHZ 3xUSB 2.90",
    adet: 1
  }])
  const [basket, setBasket] = useState([]);
  return (
    <div className='App'>
      <h1>REACT SEPET UYG.</h1>
      <h2>LİSTENENE URUNLER</h2>
      <div className='urunler'>
        {
          product.map((eleman, index) => {
            return (

              <Card onClick={() => {
                const arr = [...basket]
                if (arr.findIndex((ind) => {
                  return eleman.id === ind.id;
                }) === -1) {
                  arr.push(eleman);
                  setBasket(arr)
                }
                else {
                  arr.map((item) => {
                    if (item.id === eleman.id) {
                      return (eleman.adet += 1)
                    }
                    setBasket(arr);
                  })
                }
                console.log(basket);
              }} key={index} title={eleman.title} image={eleman.image} info={eleman.info} />
            )
          })
        }
      </div>
      <div className='sepet'>

        <h2>SEPET</h2>
        <ul className='sepet'>
          {
            basket.map((eleman, index) => {
              return (

                <li>
                  {eleman.title + "---->" + eleman.info + "Adet:"} {" "}
                  <b style={{ fontSize: "24px", color: "yellow" }} >{eleman.adet}</b>
                </li>
              )
            })
          }
        </ul>
        {
          basket.length > 0
            ?
            (<button onClick={() => {
              setBasket([])
            }}>sepeti temizle</button>)
            :
            (<h2>sepetinizde urun yok</h2>)
        }
      </div>
    </div>
  )
}

export default App
