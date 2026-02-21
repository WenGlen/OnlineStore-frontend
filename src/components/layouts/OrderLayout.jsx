import { useState, useEffect } from 'react';
import CartPage from '../../pages/Order/CartPage';
import ConfirmPage from '../../pages/Order/ConfirmPage';
import PaymentPage from '../../pages/Order/PaymentPage';
import CompletePage from '../../pages/Order/CompletePage';


export default function OrderLayout() {
    const [step, setStep] = useState(0);
    const [orderConfirmData, setOrderConfirmData] = useState(null);
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            image: 'https://i.meee.com.tw/cquTDFC.png',
            name: '白鹿角蕨(已上板)｜成熟展示株',
            price: 750,
            quantity: 1,
        },
        {
            id: 2,
            image: 'https://i.meee.com.tw/OYadPwo.png',
            name: '精緻實木掛板｜中型尺寸',
            price: 200,
            quantity: 2,
        },
        {
            id: 3,
            image: 'https://i.meee.com.tw/HDIDrWY.png',
            name: '上板用尼龍線',
            price: 80,
            quantity: 3,
        },
    ]);

    const stepsName = [
        '查看購物車',
        '填寫訂單資訊',
        '進行付款',
        '完成訂單',
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [step]);

    return (
        <div>
            {/*進度條*/}
            <div className="w-full bg-panel-50 flex flex-col md:flex-row justify-center md:items-center md:gap-2 p-4 ">

                {stepsName.map((name, i) => (
                    <span key={i} className="flex items-center gap-2 font-serif">
                        {i < stepsName.length && i > 0 && <span className="text-secondary hidden md:block">⮕</span>}
                        <button onClick={() => setStep(i)} disabled={step <= i}  className={`btn-steps ${step === i ? 'active text-lg md:text-sm font-bold' : ''}`} > 
                             {name}{step > i ? ' ✓' : '' }
                        </button>

                    </span>
                ))}
            </div>

            {
                step === 0 && <CartPage cartItems={cartItems} setCartItems={setCartItems} setStep={setStep} />
            }
            {
                step === 1 && (
                <ConfirmPage
                    cartItems={cartItems}
                    setStep={setStep}
                    onConfirm={(data) => {
                        setOrderConfirmData(data);
                        setStep(2);
                    }}
                />
            )
            }
            {
                step === 2 && <PaymentPage setStep={setStep} />
            }
            {
                step === 3 && (
                <CompletePage
                    cartItems={cartItems}
                    orderConfirmData={orderConfirmData}
                />
            )
            }

        </div>
    );
}