import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import ProductInfo from './components/ProductInfo/ProductInfo';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router basename='/store'>
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='product/:id' element={<ProductInfo />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
