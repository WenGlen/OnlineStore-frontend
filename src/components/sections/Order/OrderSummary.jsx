
export default function OrderSummary({ 
    items,
    freight,
}) {
    return (
        <>

        <div className="w-full flex flex-col gap-4">
            {items.map((item) => (
                <div key={item.id} className="w-full flex flex-row gap-4 items-center justify-between">
                    <div className="w-16 h-16 bg-placeholder rounded-md overflow-hidden">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="flex-1">
                        <p className="text-md font-bold">{item.name}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-muted">$NT {item.price} × {item.quantity}</p>
                        <p className="text-sm font-bold">$NT {item.price * item.quantity}</p>
                    </div>

                </div>
            ))}

            <div className="w-full border-t border-border py-4">

                <div className="w-full flex flex-row justify-between">
                    <p className="text-sm text-muted">小計</p>
                    <p className="text-sm font-bold">$NT {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
                </div>
                <div className="w-full flex flex-row justify-between">
                    <p className="text-sm text-muted">運費</p>
                    {freight > 0 ? (
                    <p className="text-sm font-bold">$NT {freight}</p>
                    ):(
                    <p className="text-sm text-muted">免運費</p>
                    )}
                </div>
                <div className="w-full flex flex-row justify-between">
                    <p className="text-sm text-muted">總計</p>
                    <p className="text-md font-bold">$NT {items.reduce((acc, item) => acc + item.price * item.quantity, 0) + freight}</p>
                </div>
            </div>


        </div>

        </>
    );
}