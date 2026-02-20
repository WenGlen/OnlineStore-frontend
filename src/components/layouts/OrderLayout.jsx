import { useState } from 'react';
import CartPage from '../../pages/Order/CartPage';
import ConfirmPage from '../../pages/Order/ConfirmPage';
import PaymentPage from '../../pages/Order/PaymentPage';
import CompletePage from '../../pages/Order/CompletePage';


export default function OrderLayout() {
    const [step, setStep] = useState(1);

    const stepsName = [
        '查看購物車',
        '填寫訂單資訊',
        '進行付款',
        '完成訂單',
    ];


    return (
        <div>
            {/*進度條*/}
            <div className="w-full bg-panel-50 flex-row-center-center gap-4 p-4 ">

                {stepsName.map((name, i) => (
                    <span key={i} className="flex items-center gap-4">
                        <button onClick={() => setStep(i)} disabled={step <= i}  className={step === i ? 'btn bg-secondary text-white' : ''} > 
                             {name}{step > i ? ' ✅' : '' }
                        </button>
                        {i < stepsName.length - 1 && <span>⮕</span>}
                    </span>
                ))}
            </div>

            {
                step === 0 && <CartPage />
            }
            {
                step === 1 && <ConfirmPage />
            }
            {
                step === 2 && <PaymentPage />
            }
            {
                step === 3 && <CompletePage />
            }

        </div>
    );
}