import axios from 'axios';
import { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import './HomePage.css';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  // fetch('http://localhost:3000/api/products')
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log('Products from API:', data);
  // })
  // .catch((error) => {
  //   console.error('Error fetching products:', error);
  // }); --> We'll be using axios for easier API calls, so this is commented out for now. You can test the API with this code if you want to see it working before we set up axios.

  // useEffect(() => {
  //   axios.get('/api/products')
  //   .then((response) => {
  //     setProducts(response.data);
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching products:', error);
  //   });
  // }, []); --> Instead of using this methods we can use async/await which is more modern and easier to read. So this is commented out for now.

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data);
    }

    getHomeData(); // This way it looks like a normal synchronous function, but it's actually asynchronous because of the async keyword and await inside it. 
    // It's just syntactic sugar on top of promises, but many developers find it easier to read and write than using .then() and .catch() chaining.
  }, [search]); // We add search as a dependency so that whenever the search query changes, it will re-run this effect and fetch the products based on the new search query.

  return (
    <>
      <title>Ecommerce</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
