import React, { useState } from 'react';
import CartItem from '../../components/elements/CartItem';

export default function CartPage({
  cartItems = [],
  setCartItems,
  setStep,
}) {
  const items = Array.isArray(cartItems) ? cartItems : [];

  const recommendedItems = [
    { id: 1, name: 'Premium Sphagnum Moss', price: 12.0, image: null },
    { id: 2, name: 'Cedar Mounting Board', price: 24.0, image: null },
    { id: 3, name: 'Mounting Line (50m)', price: 8.5, image: null },
    { id: 4, name: 'Fern Bloom Fertilizer', price: 18.0, image: null },
  ];

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (Number(item?.price) ?? 0) * (Number(item?.quantity) ?? 0), 0);
  const shipping = 15.0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <>

        <section className="w-full p-4 md:p-8 max-w-screen-md space-y-6 md:space-y-8">
            <div className="w-full border-b border-border-50 hidden md:block">
                <h2 className="">購物車</h2>
            </div>

          

          <div className="w-full">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 px-0 pb-2 border-b border-border-50 text-sm text-muted">
              <span className="text-center">商品</span>
              <span className="text-center">數量</span>
              <span className="text-center">單價</span>
              <span className="text-center">小計</span>
            </div>

            {/* Items */}
            {items.map((item) => (
              <div key={item?.id} className='border-b border-border-50'>
              <CartItem item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
              </div>
            ))}
            <div className="grid grid-cols-[1fr_4fr] md:grid-cols-[4fr_1fr] text-sm text-muted items-center px-8">
              <span className="">總計</span>
              <span className="text-lg font-bold text-primary text-right">$NT {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
            </div>
          </div>

          <div className="w-full text-right">

            <button type="button" className="btn-primary"
                  onClick={() => setStep(1)}>
              前往結帳  
            </button>

          </div>

        </section>


    </>
  );
}
