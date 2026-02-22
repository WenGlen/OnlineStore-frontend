import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/sections/Home/Hero';
import Features from '../components/sections/Home/Features';

import ProductCard from '../components/elements/ProductCard';
import { addToCartWithStockCheck } from '../api/cart';

import axios from 'axios';
const { VITE_API_URL, VITE_API_PATH } = import.meta.env;



export default function HomePage() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {            
        const res = await axios.get (`${VITE_API_URL}/api/${VITE_API_PATH}/products/all`);

        if (res.data.products.length) {
            const  resProducts  = Object.values(res.data.products).filter((product) => product.category === "精品");
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

  // 取得價位前四高的商品
  const topFourProducts = React.useMemo(() => {
    return [...products]
      .sort((a, b) => (b.price || 0) - (a.price || 0))
      .slice(0, 4);
  }, [products]);

  const handleAddToCart = (productId, qty = 1, stock = null, unit = '') => {
    addToCartWithStockCheck({ productId, qty, stock: stock ?? undefined, unit });
  };




  return (
    <>

      {/* 首頁英雄區 */}
      <Hero />

      <div className="w-full h-12"/>

      {/* 精選商品區 */}
      <div className="w-full bg-panel-50 py-20 mx-0">
        <section className="px-6">
          <div className="flex-row-between-end mb-10">
            <div>
              <h2 className="">優質精品</h2>
              <p className="text-sm text-gray-600">我們精心挑選的健康、充滿活力的蕨類貴族</p>
            </div>
            <Link to="/products">
              <button className="btn-panel text-xs w-32">
              查看全部 →
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {topFourProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                usedOnPage="home"
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </div>


      <div className="w-full h-12"/>
      

      {/* 介紹區 */}
      <section className="w-full py-20">
          <div className="flex flex-col items-center md:flex-row gap-12 px-12">
            {/* Content */}
            <div className="max-w-[440px]">
              <h2 className="font-normal mb-6 font-serif">
                用心栽培於我們的
                <span className="text-primary italic">蕨</span>
              </h2>
              <p className="text-[15px] leading-[1.8] text-gray-600 mb-8">
                我們的旅程始於一株平凡的銀鹿。<br/>
                如今，我們管理著一個致力於提供各式高品質鹿角蕨的綠植園。<br/>
                每一株植物不僅僅是商品——它是經過多年培育的活雕塑，才來到您的家中。
              </p>
              <button className="btn-secondary">
                我們的永續流程 →
              </button>
            </div>
            
            {/* Images */}
            <div className="relative w-full aspect-[4/3]
                               min-h-[320px]
                            sm:min-h-[320px]">
              <div className="absolute left-0 top-0 
                              w-[70%]  aspect-[4/3] overflow-hidden flex-col-center-center
                              rounded-xl  bg-placeholder 
                                 min-w-[200px] 
                              sm:min-w-[320px]">
                <p >溫室圖片</p>
              </div>
              <div className="absolute right-0 bottom-0
                              w-[40%]  aspect-[3/4] overflow-hidden flex-col-center-center
                              rounded-xl  bg-panel 
                                 min-w-[160px]
                              sm:min-w-[200px]">
                <p >老闆圖片</p>
              </div>
            </div>
          </div>

      </section>

      <Features />


    </>
  );
};
