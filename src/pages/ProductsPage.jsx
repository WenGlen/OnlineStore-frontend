import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
const { VITE_API_URL , VITE_API_PATH } = import.meta.env;

import ProductCard from '../components/elements/ProductCard';
import Pagination from '../components/Pagination';


export default function ProductsPage() {


  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  async function getProducts() {
      try {            
          const res = await axios.get (`${VITE_API_URL}/api/${VITE_API_PATH}/products/all`);
          //console.log("res:",res);
          if (res.data.products.length) {
              const  resProducts  = Object.values(res.data.products);
              //console.log("resProducts:",resProducts);
              const resCategories = [...new Set(resProducts.map((product) => product.category))];
              //console.log("resCategories:",resCategories);
              setCategories(resCategories);

              // 對產品進行排序：先按分類排序，再按標題排序
              //const sortedProducts = sortProductsByCategoryAndTitle(resProducts);
              setProducts(resProducts);
          } else {

              setProducts([]);
          }
      } catch (error) {
          setProducts([]); 
      }
  }
  

  useEffect(() => {
    getProducts();
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('popularity');

  useEffect(() => {
    setActiveCategory( categories[0] );
  }, [categories]);


  // 篩選狀態
  const [filters, setFilters] = useState({
    speciesType: [],
    lightLevel: [],
    difficulty: []
  });


  const filterOptions = {
    speciesType: [
      { id: 'bifurcatum', label: 'P. bifurcatum' },
      { id: 'ridleyi', label: 'P. ridleyi' },
      { id: 'grande', label: 'P. grande' },
      { id: 'coronarium', label: 'P. coronarium' }
    ],
    lightLevel: [
      { id: 'bright', label: 'Bright Indirect' },
      { id: 'partial', label: 'Partial Shade' }
    ],
    difficulty: [
      { id: 'easy', label: 'Easy' },
      { id: 'intermediate', label: 'Intermediate' },
      { id: 'expert', label: 'Expert' }
    ]
  };


  const totalPages = 3;

  const handleFilterChange = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };



  return (

    <div className="px-8">  

    {/* Banner */}
    <section className="banner
                        py-12 flex-col gap-8 border-b border-border-50">
        <div>
          <h1>挑選你的<span className="text-primary"> 綠蕨飾</span></h1>
          <p>探索我們精心挑選的鹿角蕨系列</p>
          <p>從經典品種到珍稀標本級植株應有盡有</p>
          <p>切換分類按鈕尋找你心儀的植物</p>
        </div>

        <div /*tabs-container*/ className="flex-row gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
            <div className="text-sm text-gray-500">
              （tabs篩選功能還沒做）
            </div>
        </div>

    </section>
    


    <div>
      <section>
        <div className="flex-row-between-center mt-12 py-4">
          <span className="">
            此分類 {products.length} 項商品
          </span>
          <div className="collection-products__sort">
            <span>排序方式（功能還沒做）：</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="collection-products__select"
            >
              <option value="popularity">熱門度</option>
              <option value="price-low">價格：低到高</option>
              <option value="price-high">價格：高到低</option>
              <option value="newest">最新上架</option>
            </select>
          </div>
        </div>
      </section>
      
      <section>
          <div /*product-card-grid*/ className="grid gap-12
                                                grid-cols-1 
                                                sm:grid-cols-2 
                                                md:grid-cols-3 ">
            {products.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="link-card">
                  <ProductCard {...product} page="products" />
                </Link>
            ))}
          </div>
      </section>

      <div className="h-12"/>

    </div>


    </div>
  );
};

