import { useContext } from 'react';
import './shop.styles.scss';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../component/product-card/product-card.component';

const Shop = () => {
  const {} = useContext(CategoriesContext);
  return (
    <div className="products-container">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default Shop;
