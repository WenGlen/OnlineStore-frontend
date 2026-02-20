import { useState, useEffect } from 'react';
import OrderSummary from '../../components/sections/Order/OrderSummary';

export default function ConfirmPage() {

    //暫時用會員登錄
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [useDefaultShippingInfo, setUseDefaultShippingInfo] = useState(false);
    const [useDefaultPaymentInfo, setUseDefaultPaymentInfo] = useState(false);
    const [freight, setFreight] = useState(0);


    const [orderersInfo, setOrderersInfo] = useState({ name: '', phone: '', email: '' });
    const [paymentInfo, setPaymentInfo] = useState({ type: '', account: '', expiryDate: '', CVV: '', cardHolderName: '' });
    const [shippingInfo, setShippingInfo] = useState({ name: '', phone: '', address: '', pickupTime: '' });

    const defaultUserInfo = {
        name: '綠先生',
        phone: '0987654321',
        email: 'green@gmail.com',
    };

    const defaultPaymentInfo = {
        type: '信用卡',
        account: '1234567890123456',
        expiryDate: '12 / 26',
        CVV: '123',
        cardHolderName: '綠黃藍',
    };

    const defaultShippingInfo = {
        type: '宅配',
        name: '綠先生的店',
        phone: '0987654321',
        address: '台北市大安區忠孝東路四段100號',
        pickupTime: '',
    };

    /** 卡號顯示用：每四位加一個空格（不影響實際儲存值） */
    function formatCardNumber(digitsOnly) {
        return digitsOnly.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
    }

    /** 取貨日可選範圍：隔天起 7 天內，且不可為週四 */
    const WEEKDAY_NAMES = ['日', '一', '二', '三', '四', '五', '六'];
    const THURSDAY = 4;
    function getValidPickupDates() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dates = [];
        for (let i = 1; i <= 7; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            if (d.getDay() === THURSDAY) continue;
            const y = d.getFullYear(), m = d.getMonth(), day = d.getDate();
            const value = `${y}-${String(m + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            dates.push({ value, label: `${m + 1}/${day} (週${WEEKDAY_NAMES[d.getDay()]})` });
        }
        return dates;
    }
    const validPickupDates = getValidPickupDates();

    function applyDefaultPaymentInfo() {
        const next = !useDefaultPaymentInfo; //反轉useDefaultPaymentInfo的值，預設為false，反轉為true
        setUseDefaultPaymentInfo(next);
        if (next) {
            const accountDigits = defaultPaymentInfo.account.replace(/\D/g, '').slice(0, 16);
            setPaymentInfo({ ...defaultPaymentInfo, account: accountDigits });
        }
    }

    function applyDefaultShippingInfo() {
        const next = !useDefaultShippingInfo; //反轉useDefaultShippingInfo的值，預設為false，反轉為true
        setUseDefaultShippingInfo(next);
        if (next) setShippingInfo({ ...defaultShippingInfo }); //如果next為true，則設置為預設資料。但若已設置過就不會再次設置
    }



    const cartItems = [
        {
            id: 1,
            name: '綠色植物',
            price: 100,
            quantity: 1,
        },
        {
            id: 2,
            name: '綠色植物2',
            price: 200,
            quantity: 2,
        },
        {
            id: 3,
            name: '綠色植物3',
            price: 300,
            quantity: 3,
        },
    ];

    return (
        <>
        <div className="w-full max-w-screen-xl mx-auto flex" /* container */>
            <div className="fixed bottom-0 right-0 w-[160px] bg-black/50 z-[999] p-2 text-xs text-white">
                <div>開發用</div>
                <div>登入狀態：{isLoggedIn ? '登入' : '未登入'}</div>
                <div>付款方式：{paymentInfo.type}</div>
            </div>
        <section className=" w-full p-8 max-w-screen-md space-y-8">
            <h2 className="text-2xl font-bold">填寫訂單資訊</h2>

            <form className="flex flex-col">
                {/* 訂購資訊 */}
                <div className="w-full border-t border-border py-12  space-y-4">
                    <div className="flex items-center gap-8 justify-between">
                        <h3>訂購資訊</h3> 
                        <div className="text-xs text-gray-500">（實際會員登入功能還沒做，先做個帶做預設資料的按鈕）</div>
                        <button type="button" className="btn bg-primary text-white" 
                                disabled={isLoggedIn}
                                onClick={() => (setIsLoggedIn(true), setOrderersInfo({ ...defaultUserInfo }),applyDefaultPaymentInfo(),applyDefaultShippingInfo())}>
                            {isLoggedIn ? '已登入' : '登入會員'}
                        </button>

                    </div>

                    <div className="flex gap-8">
                        <label className="w-full flex items-center gap-2">
                            <span>訂購人姓名</span>
                            <input type="text" className="flex-1" value={orderersInfo.name} disabled={isLoggedIn} 
                                onChange={(e) => setOrderersInfo((prev) => ({ ...prev, name: e.target.value }))} 
                                placeholder="請輸入訂購人姓名"/>
                        </label>
                        <label className="w-full flex items-center gap-2 ">
                            <span >訂購人電話</span>
                            <input type="text" className="flex-1" value={orderersInfo.phone} disabled={isLoggedIn} 
                                onChange={(e) => setOrderersInfo((prev) => ({ ...prev, phone: e.target.value }))} 
                                placeholder="請輸入訂購人電話"/>
                        </label>
                    </div>
                    <label className="flex items-center gap-2">
                        <span>訂購人Email</span>
                        <input type="text" className="flex-1" value={orderersInfo.email} disabled={isLoggedIn} 
                               onChange={(e) => setOrderersInfo((prev) => ({ ...prev, email: e.target.value }))} 
                               placeholder="請輸入訂購人Email"/>
                    </label>

                </div>


                {/* 付款資訊 */}
                <div className="w-full border-t border-border py-12  space-y-4">
                    <div className="flex items-center gap-8">
                        <h3>付款資訊</h3> 
                        {isLoggedIn && (
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="useDefaultPaymentInfo" className="w-5 h-5 " 
                                   checked={useDefaultPaymentInfo} onChange={applyDefaultPaymentInfo} />
                            <label htmlFor="useDefaultPaymentInfo" className="text-sm">使用預設付款資料</label>
                        </div>
                        )}
                    </div>

                    <div className="w-fit flex items-center rounded-md overflow-hidden">
                        <button type="button" className={`btn-select ${paymentInfo.type === '信用卡' ? 'btn-select--active' : ''}`} 
                                onClick={() => setPaymentInfo((prev) => ({ ...prev, type: '信用卡' }))}>
                            信用卡
                        </button>
                        <button type="button" className={`btn-select ${paymentInfo.type === '貨到付款' ? 'btn-select--active' : ''}`} 
                                onClick={() => setPaymentInfo((prev) => ({ ...prev, type: '貨到付款' }))}>
                            貨到付款（2000元以下適用）
                        </button>
                    </div>
                    {paymentInfo.type === '信用卡' && (
                    <>
                        <label className="flex items-center gap-2">
                            <span>信用卡卡號</span>
                                <input type="text" className="flex-1" value={formatCardNumber(paymentInfo.account)} disabled={useDefaultPaymentInfo} 
                                    onChange={(e) => {
                                        const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
                                        setPaymentInfo((prev) => ({ ...prev, account: digits }));
                                    }} 
                                    placeholder="xxxx xxxx xxxx xxxx"/>
                        </label>

                        <div className="flex gap-8">

                            <label className="w-full flex items-center gap-2">
                                <span>　　到期日</span>
                                <input type="text" className="flex-1" value={paymentInfo.expiryDate} disabled={useDefaultPaymentInfo} 
                                    onChange={(e) => setPaymentInfo((prev) => ({ ...prev, expiryDate: e.target.value }))} 
                                    placeholder="MM / YY"/>
                            </label>
                            <label className="w-full flex items-center gap-2 ">
                                <span >　　CVV</span>
                                <input type="text" className="flex-1" value={paymentInfo.CVV} disabled={useDefaultPaymentInfo} 
                                    onChange={(e) => setPaymentInfo((prev) => ({ ...prev, CVV: e.target.value }))} 
                                    placeholder="xxx"/>
                            </label>
                        </div>

                        <label className="flex items-center gap-2">
                            <span>持卡人姓名</span>
                                <input type="text" className="flex-1" value={paymentInfo.cardHolderName} disabled={useDefaultPaymentInfo} 
                                    onChange={(e) => setPaymentInfo((prev) => ({ ...prev, cardHolderName: e.target.value }))} 
                                    placeholder="請輸入持卡人姓名"/>
                        </label>
                    </>
                    )}

                </div>



                {/* 收件資訊 */}
                <div className="w-full border-t border-border py-12  space-y-4">
                    <div className="flex items-center gap-8">
                        <h3 className="">收件資訊</h3>
                        {isLoggedIn && (
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="useDefaultShippingInfo" className="w-5 h-5 " 
                                   checked={useDefaultShippingInfo} onChange={applyDefaultShippingInfo} />
                            <label htmlFor="useDefaultShippingInfo" className="text-sm">使用預設收件資料</label>
                        </div>
                        )}
                    </div>

                    <div className="w-fit flex items-center rounded-md overflow-hidden">
                        <button type="button" className={`btn-select ${shippingInfo.type === '宅配' ? 'btn-select--active' : ''}`} 
                                onClick={() => setShippingInfo((prev) => ({ ...prev, type: '宅配' }))}>
                            宅配
                        </button>
                        <button type="button" className={`btn-select ${shippingInfo.type === '到店取貨' ? 'btn-select--active' : ''}`} 
                                onClick={() => setShippingInfo((prev) => ({ ...prev, type: '到店取貨' }))}>
                            到店取貨
                        </button>
                    </div>



                        <div className="flex gap-8">
                            <label className="w-full flex items-center gap-2">
                                <span>收件人姓名</span>
                                <input type="text" className="flex-1" value={shippingInfo.name} disabled={useDefaultShippingInfo} 
                                    onChange={(e) => setShippingInfo((prev) => ({ ...prev, name: e.target.value }))} 
                                    placeholder="請輸入收件人姓名"/>
                            </label>
                            <label className="w-full flex items-center gap-2 ">
                                <span >收件人電話</span>
                                <input type="text" className="flex-1" value={shippingInfo.phone} disabled={useDefaultShippingInfo} 
                                    onChange={(e) => setShippingInfo((prev) => ({ ...prev, phone: e.target.value }))} 
                                    placeholder="請輸入收件人電話"/>
                            </label>
                        </div>
                        {shippingInfo.type === '宅配' ? (
                        <>
                            <label className="flex items-center gap-2">
                                <span>　收件地址</span>
                                <input type="text" className="flex-1" value={shippingInfo.address} disabled={useDefaultShippingInfo} 
                                    onChange={(e) => setShippingInfo((prev) => ({ ...prev, address: e.target.value }))} 
                                    placeholder="請輸入收件地址"/>
                            </label>
                        </>
                        ):
                        <>
                            <label className="flex items-center gap-2 ">
                                <span>預計取貨日</span>
                                <select className="w-[200px]" value={shippingInfo.pickupTime} disabled={useDefaultShippingInfo}
                                    onChange={(e) => setShippingInfo((prev) => ({ ...prev, pickupTime: e.target.value }))}>
                                    <option value="">請選擇取貨日</option>
                                    {validPickupDates.map((d) => (
                                        <option key={d.value} value={d.value}>{d.label}</option>
                                    ))}
                                </select>
                                <p className="text-xs text-muted w-[300px] ">取貨日為隔天起 7 日內（週四不營業）<br/>請於 11:00–21:00 到店取貨</p>
                            </label>


                            <div className="flex items-center gap-2">
                                <span>綠蕨飾店址</span>
                                <p>台北市大安區忠孝東路四段100號</p>
                            </div>
                        </>}
                    
                </div>
                {/* 送出訂單按鈕 */}
                <div className="w-full border-t border-border py-12 flex justify-end">
                    <button className="btn bg-primary text-white">送出訂單</button>
                </div>

            </form>

        </section>


        <aside className="w-full md:w-[400px] py-12">
            <div className="bg-panel-50 p-4 rounded-md space-y-8">
                <h3>訂單內容</h3>
                <OrderSummary items={cartItems} freight={freight} />
            </div>
        </aside>



        </div>







{/* Main Content Area */}
<div className="flex-1 flex justify-center py-10 px-6 md:px-20 lg:px-40">
<div className="flex flex-col lg:flex-row w-full max-w-[1200px] gap-12">
{/* Left Column: Checkout Form */}
<div className="">
<div className="flex-1 space-y-8">
{/* Breadcrumbs & Heading */}

<hr className="border-border-light dark:border-white/10"/>
{/* Contact Information Section */}
<section>
<h3 className="text-text-main dark:text-white text-xl font-bold mb-4">Contact Information</h3>
<div className="space-y-4">
<div className="flex flex-col w-full">
<p className="text-text-main dark:text-white/90 text-base font-medium leading-normal pb-2">Email Address</p>
<input className="form-input flex w-full rounded-lg text-text-main focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-border-light bg-background-light dark:bg-background-dark dark:text-white dark:border-white/20 h-14 placeholder:text-text-muted/50 px-4 text-base font-normal" placeholder="e.g. gardener@nature.com" type="email"/>
</div>
<div className="px-1">
<label className="flex gap-x-3 items-center cursor-pointer">
<input className="h-5 w-5 rounded border-border-light border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-primary focus:outline-none" type="checkbox"/>
<p className="text-text-muted dark:text-white/70 text-sm font-normal">Keep me up to date on news and exclusive botanical offers</p>
</label>
</div>
</div>
</section>
{/* Shipping Address Section */}
<section className="space-y-4">
<h3 className="text-text-main dark:text-white text-xl font-bold mb-2">Shipping Address</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col">
<p className="text-text-main dark:text-white/90 text-sm font-medium pb-2">First Name</p>
<input className="form-input rounded-lg border-border-light bg-background-light dark:bg-background-dark dark:text-white dark:border-white/20 h-12 px-4 focus:ring-primary/20" type="text"/>
</div>
<div className="flex flex-col">
<p className="text-text-main dark:text-white/90 text-sm font-medium pb-2">Last Name</p>
<input className="form-input rounded-lg border-border-light bg-background-light dark:bg-background-dark dark:text-white dark:border-white/20 h-12 px-4 focus:ring-primary/20" type="text"/>
</div>
<div className="flex flex-col md:col-span-2">
<p className="text-text-main dark:text-white/90 text-sm font-medium pb-2">Address</p>
<input className="form-input rounded-lg border-border-light bg-background-light dark:bg-background-dark dark:text-white dark:border-white/20 h-12 px-4 focus:ring-primary/20" placeholder="Street and house number" type="text"/>
</div>
<div className="flex flex-col md:col-span-2">
<p className="text-text-main dark:text-white/90 text-sm font-medium pb-2">Apartment, suite, etc. (optional)</p>
<input className="form-input rounded-lg border-border-light bg-background-light dark:bg-background-dark dark:text-white dark:border-white/20 h-12 px-4 focus:ring-primary/20" type="text"/>
</div>
<div className="flex flex-col">
<p className="text-text-main dark:text-white/90 text-sm font-medium pb-2">City</p>
<input className="form-input rounded-lg border-border-light bg-background-light dark:bg-background-dark dark:text-white dark:border-white/20 h-12 px-4 focus:ring-primary/20" type="text"/>
</div>
<div className="flex flex-col">
<p className="text-text-main dark:text-white/90 text-sm font-medium pb-2">Postal Code</p>
<input className="form-input rounded-lg border-border-light bg-background-light dark:bg-background-dark dark:text-white dark:border-white/20 h-12 px-4 focus:ring-primary/20" type="text"/>
</div>
</div>
</section>
<div className="flex items-center justify-between pt-6">
<a className="text-text-muted hover:text-text-main flex items-center gap-2 font-medium transition-colors" href="#">
<span className="material-symbols-outlined">chevron_left</span>
                                Return to Cart
                            </a>
<button className="bg-primary hover:bg-primary/90 text-text-main px-8 h-14 rounded-lg font-bold text-lg shadow-lg shadow-primary/20 transition-all">
                                Continue to Shipping
                            </button>
</div>
</div>
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
</div>

{/* Right Column: Sticky Order Summary */}
<aside className="w-full lg:w-[400px]">
<div className="sticky top-10 bg-panel-50 dark:bg-white/5 rounded-xl p-8 border border-primary/10 dark:border-white/10">
<h3 className="text-text-main dark:text-white text-xl font-bold mb-6">Order Summary</h3>
{/* Product List */}
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4">
<div className="relative w-16 h-16 bg-white dark:bg-background-dark rounded-lg overflow-hidden border border-border-light dark:border-white/10">
<img alt="Platycerium bifurcatum" className="object-cover w-full h-full" data-alt="Vibrant green Platycerium bifurcatum mounted on wood" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIG7L6f0-T-V7_8zyLcdVoiz_Uohd6EeewXnu2lXU6i8E953FcHyU-bxuB7be2a2srJqjmKjvLWiIksWFMSZF7UYqCLx93NYZ2xPJJFo7EL1tlAKrCy2jgZAx-4n7zB0WYlVLNbbR9AGrX9PeSYu8S_vGpNTGUqWyqvZxr3mfo8N9lwUietFM3R3b_yQRUrL0ZX4o_XfFIVbWRAYyEwJ9q_o0Xh3wZ5NWATVWRfW4fLyvoi3pHzEocYGlX5p1Au2ZaFEnql8Q37EBY"/>
<span className="absolute -top-2 -right-2 bg-text-muted text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">1</span>
</div>
<div className="flex-1">
<p className="text-text-main dark:text-white text-sm font-bold">Platycerium Bifurcatum</p>
<p className="text-text-muted text-xs">Standard Mount</p>
</div>
<p className="text-text-main dark:text-white text-sm font-bold">$45.00</p>
</div>
<div className="flex items-center gap-4">
<div className="relative w-16 h-16 bg-white dark:bg-background-dark rounded-lg overflow-hidden border border-border-light dark:border-white/10">
<img alt="Platycerium grande" className="object-cover w-full h-full" data-alt="Large majestic Platycerium grande fern leaves" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4s6eSiuXS8c-Pn69w5N3slBrnvcWPHa3F9vZt-Zcf0flrHksg9UYswuTfam82AaRlHULJMsvz-9fiiaiSpKV9NnfMKqB7rSHdXHtnuTaGytEMgCUTH_T_cQp2etIGIK6iOLUPri_gbyd2gNpcir9S5OmbdXZAO2oyxRydbA9rHj6ZrQrXEa4GF8RAQpamNJHVdLw85PsVRKJ2-izb_hI_4LGTaS23yRIAnvxzSRLY99C6d4qdu-wHU1rMO6_5guol91QBIDBNuztj"/>
<span className="absolute -top-2 -right-2 bg-text-muted text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">1</span>
</div>
<div className="flex-1">
<p className="text-text-main dark:text-white text-sm font-bold">Platycerium Grande</p>
<p className="text-text-muted text-xs">Extra Large</p>
</div>
<p className="text-text-main dark:text-white text-sm font-bold">$120.00</p>
</div>
</div>
<hr className="border-border-light dark:border-white/10 mb-6"/>
{/* Promo Code */}
<div className="flex gap-2 mb-6">
<input className="form-input flex-1 rounded-lg border-border-light bg-white dark:bg-background-dark dark:text-white dark:border-white/20 h-12 px-4 text-sm focus:ring-primary/20" placeholder="Gift card or discount code" type="text"/>
<button className="bg-primary/20 text-text-main dark:text-white px-4 rounded-lg font-bold text-sm hover:bg-primary/30 transition-colors">Apply</button>
</div>
<hr className="border-border-light dark:border-white/10 mb-6"/>
{/* Pricing Details */}
<div className="space-y-3">
<div className="flex justify-between text-sm">
<span className="text-text-muted">Subtotal</span>
<span className="text-text-main dark:text-white font-medium">$165.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-muted">Shipping</span>
<span className="text-text-muted italic">Calculated at next step</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-text-muted">Taxes</span>
<span className="text-text-main dark:text-white font-medium">$13.20</span>
</div>
<hr className="border-border-light dark:border-white/10 my-2"/>
<div className="flex justify-between items-center pt-2">
<span className="text-text-main dark:text-white text-lg font-bold">Total</span>
<div className="text-right">
<span className="text-text-muted text-xs mr-2">USD</span>
<span className="text-text-main dark:text-white text-2xl font-black">$178.20</span>
</div>
</div>
</div>
{/* Trust Badges */}
<div className="mt-8 flex flex-col items-center gap-3">
<div className="flex items-center gap-2 text-text-muted text-xs">
<span className="material-symbols-outlined text-sm">lock</span>
                                    Secure SSL Encrypted Checkout
                                </div>
<div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
<span className="material-symbols-outlined">payments</span>
<span className="material-symbols-outlined">credit_card</span>
<span className="material-symbols-outlined">account_balance</span>
</div>
</div>
</div>
</aside>
</div>
</div>

        </>
    );
}