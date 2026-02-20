import React, { useState } from 'react';


const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'P. Bifurcatum',
      variant: 'MOUNT READY',
      price: 45.00,
      quantity: 1,
      image: null
    },
    {
      id: 2,
      name: 'P. Ridleyi',
      variant: 'Rare',
      subvariant: 'SPECIMEN',
      price: 85.00,
      quantity: 1,
      image: null
    }
  ]);

  // 推薦商品
  const recommendedItems = [
    { id: 1, name: 'Premium Sphagnum Moss', price: 12.00, image: null },
    { id: 2, name: 'Cedar Mounting Board', price: 24.00, image: null },
    { id: 3, name: 'Mounting Line (50m)', price: 8.50, image: null },
    { id: 4, name: 'Fern Bloom Fertilizer', price: 18.00, image: null }
  ];

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 15.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (

    <>

    <main className="flex-1 flex justify-center py-10 px-4">
    <div className="layout-content-container flex flex-col max-w-[1024px] flex-1">

    <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Column: Payment Form */}
    <div className="flex-1 flex flex-col gap-6">
    {/* PageHeading */}
    <div className="flex flex-col gap-2 px-4">
    <h1 className="text-[#0d1b0f] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Payment Method</h1>
    <p className="text-[#4c9a52] text-base font-normal leading-normal">Choose your preferred way to complete the purchase. All transactions are secure and encrypted.</p>
    </div>
    {/* RadioList - Payment Options */}
    <div className="flex flex-col gap-3 px-4 radio-dot-svg">
    <label className="group flex items-start gap-4 rounded-xl border-2 border-solid border-[#cfe7d1] dark:border-white/10 p-5 bg-white dark:bg-white/5 cursor-pointer transition-all hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
    <input checked="" className="mt-1 h-5 w-5 border-2 border-[#cfe7d1] bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0" name="payment-method" type="radio"/>
    <div className="flex grow flex-col">
    <div className="flex items-center justify-between mb-2">
    <p className="text-[#0d1b0f] dark:text-white text-base font-semibold leading-normal">Credit / Debit Card</p>
    <div className="flex gap-2">
    <span className="material-symbols-outlined text-[#4c9a52]">credit_card</span>
    </div>
    </div>
    {/* Nested TextField for Credit Card (Shown when selected) */}
    <div className="mt-4 flex flex-col gap-4 animate-in fade-in duration-500">
    <div className="flex flex-col gap-2">
    <label className="text-xs font-bold uppercase tracking-wider text-[#4c9a52]">Card Number</label>
    <div className="relative">
    <input className="w-full rounded-lg border border-[#cfe7d1] dark:border-white/10 bg-transparent p-4 text-[#0d1b0f] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="0000 0000 0000 0000"/>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
    <span className="material-symbols-outlined text-[#cfe7d1]">lock</span>
    </div>
    </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col gap-2">
    <label className="text-xs font-bold uppercase tracking-wider text-[#4c9a52]">Expiry Date</label>
    <input className="w-full rounded-lg border border-[#cfe7d1] dark:border-white/10 bg-transparent p-4 text-[#0d1b0f] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="MM / YY"/>
    </div>
    <div className="flex flex-col gap-2">
    <label className="text-xs font-bold uppercase tracking-wider text-[#4c9a52]">CVV</label>
    <input className="w-full rounded-lg border border-[#cfe7d1] dark:border-white/10 bg-transparent p-4 text-[#0d1b0f] dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="123"/>
    </div>
    </div>
    </div>
    </div>
    </label>
    <label className="group flex items-center gap-4 rounded-xl border-2 border-solid border-[#cfe7d1] dark:border-white/10 p-5 bg-white dark:bg-white/5 cursor-pointer transition-all hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
    <input className="h-5 w-5 border-2 border-[#cfe7d1] bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0" name="payment-method" type="radio"/>
    <div className="flex grow items-center justify-between">
    <div className="flex flex-col">
    <p className="text-[#0d1b0f] dark:text-white text-base font-semibold leading-normal">Apple Pay</p>
    <p className="text-[#4c9a52] text-xs font-normal leading-normal">One-touch secure checkout</p>
    </div>
    <span className="material-symbols-outlined text-black dark:text-white">contactless</span>
    </div>
    </label>
    <label className="group flex items-center gap-4 rounded-xl border-2 border-solid border-[#cfe7d1] dark:border-white/10 p-5 bg-white dark:bg-white/5 cursor-pointer transition-all hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
    <input className="h-5 w-5 border-2 border-[#cfe7d1] bg-transparent text-transparent checked:border-primary checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0" name="payment-method" type="radio"/>
    <div className="flex grow items-center justify-between">
    <div className="flex flex-col">
    <p className="text-[#0d1b0f] dark:text-white text-base font-semibold leading-normal">Bank Transfer</p>
    <p className="text-[#4c9a52] text-xs font-normal leading-normal">Direct payment from your bank account</p>
    </div>
    <span className="material-symbols-outlined text-[#4c9a52]">account_balance</span>
    </div>
    </label>
    </div>
    {/* Final Confirmation & Button */}
    <div className="px-4 py-4 flex flex-col gap-4">
    <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/20">
    <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
    <p className="text-xs text-[#0d1b0f] dark:text-[#a0cfa3] font-medium">Your data is protected by industry-standard TLS encryption.</p>
    </div>
    <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-[#102212] dark:bg-primary text-white gap-2 text-lg font-bold leading-normal tracking-[0.015em] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-lg shadow-[#102212]/20">
    <span className="truncate">Complete Order</span>
    <span className="material-symbols-outlined">arrow_forward</span>
    </button>
    </div>
    </div>
    {/* Right Column: Order Summary */}
    <div className="w-full lg:w-80 flex flex-col gap-6 px-4">
    <div className="rounded-2xl bg-white dark:bg-white/5 border border-[#cfe7d1] dark:border-white/10 p-6 flex flex-col gap-6 sticky top-24">
    <h3 className="text-lg font-bold">Order Summary</h3>
    <div className="flex gap-4">
    <div className="size-16 rounded-lg bg-[#e7f3e8] overflow-hidden flex-shrink-0">
    <img className="w-full h-full object-cover" data-alt="Close up of a Staghorn fern leaf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG8_IC2iW-GGbP-iozJ3yB_Aay1BQyz7NQz9UIShlBpPf8-HMd6LSo2dNto6Pr-6_6jDshAwN1R2vk5KJi1oTC7ptpUwWLfjdiko107BXmAEp-JcRJYJStjMSDB8kt6TKzLWfKcovJbLFPXnVOkgprrOmR-i5gqCQA-ykvgsqTDXi17qu7XyAgJjFRdtoV0okw9ZPIt4qCGkdURUWD6Pz6Jl5L7BsP5v7AeAhVecr7vbqwJbksIzAxauFl3s4Gv2bgJOgp1McjpLdI"/>
    </div>
    <div className="flex flex-col">
    <p className="text-sm font-bold">Platycerium Grande</p>
    <p className="text-xs text-[#4c9a52]">Mounted on Oak Plaque</p>
    <p className="text-sm font-bold mt-1">$120.00</p>
    </div>
    </div>
    <hr className="border-[#cfe7d1] dark:border-white/10"/>
    <div className="flex flex-col gap-3">
    <div className="flex justify-between text-sm">
    <span className="text-[#4c9a52]">Subtotal</span>
    <span className="font-medium">$120.00</span>
    </div>
    <div className="flex justify-between text-sm">
    <span className="text-[#4c9a52]">Shipping (Express)</span>
    <span className="font-medium">$15.00</span>
    </div>
    <div className="flex justify-between text-sm">
    <span className="text-[#4c9a52]">Tax (8%)</span>
    <span className="font-medium">$9.60</span>
    </div>
    </div>
    <hr className="border-[#cfe7d1] dark:border-white/10"/>
    <div className="flex justify-between items-center">
    <span className="text-lg font-bold">Total</span>
    <span className="text-2xl font-black text-primary">$144.60</span>
    </div>
    <div className="flex flex-col gap-2 mt-4">
    <p className="text-[10px] text-center text-[#4c9a52] uppercase font-bold tracking-widest">Secure Checkout</p>
    <div className="flex justify-center gap-4 opacity-40 grayscale">
    <span className="material-symbols-outlined">payments</span>
    <span className="material-symbols-outlined">shield</span>
    <span className="material-symbols-outlined">lock</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </main>

    </>
  );
};

export default CartPage;
