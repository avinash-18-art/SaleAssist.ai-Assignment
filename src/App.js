import React, {useState, useEffect} from 'react'
import ProductListing from './components/ProductListing'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://api.example.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Product Listing Page</h1>
      </header>
      <main>
        <ProductListing products={products} />
      </main>
    </div>
  )
}

export default App
