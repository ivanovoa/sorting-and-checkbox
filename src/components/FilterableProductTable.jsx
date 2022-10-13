import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable'
import { arrayOf, bool, shape, string } from 'prop-types';


function FilterableProductTable ({products}) {
    const [filterText, setFilterText] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isGoodsChecked, setisGoodsChecked] = useState(false);
    const [isElectronicsChecked, setIsElectronicsChecked] = useState(false);

    useEffect(() => {
        console.log(filterText)
        filterProducts();
    }, [filterText, isGoodsChecked, isElectronicsChecked]);

  

    function filterProducts () {
        // const filteredProducts2 = products.filter(product => product.name.toLowerCase().includes(filterText.toLowerCase()));
        // const res = filteredProducts2.filter(product => filterCondition(product));
        // setFilteredProducts(res);
        setFilteredProducts(products.filter(
            product =>product.name.toLowerCase().includes(filterText.toLowerCase())
            && filterCondition(product),
          ));
    }
    
    console.log(1 && !'hi')
    function filterCondition (product) {
        switch (true) {
            case isGoodsChecked && !isElectronicsChecked:
                return product.category === 'Sporting Goods';
            case isElectronicsChecked && !isGoodsChecked:
                return product.category ===  'Electronics';
            default:
                return true;
        }
    }

      
    return (
    <div>
    <SearchBar
      filterText={filterText}
      setFilterText={setFilterText}
      isGoodsChecked={isGoodsChecked}
      onGoodsChange={setisGoodsChecked}
      isElectronicsChecked={isElectronicsChecked}
      onElectronicsChange={setIsElectronicsChecked}
    />
    <ProductTable
      products={filteredProducts}
      filterText={filterText}
      isGoodsChecked={isGoodsChecked}
      isElectronicsChecked={isElectronicsChecked}
    />
  </div>
  )
}
FilterableProductTable.propTypes = {
    products: arrayOf(shape({
        category: string,

    })).isRequired,
    disabled: bool,
}
FilterableProductTable.defaultProps = {
    disabled: false
}
export default FilterableProductTable;