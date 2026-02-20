export default function CartItem(
    Item,
) {
    return (
        <div>
            <div>
                <img src={Item.image} alt={Item.name} />
            </div>
            <div>
                <h3>{Item.name}</h3>
                <p>{Item.price}</p>
                <p>{Item.quantity}</p>
                <p>NT$ {Item.price * Item.quantity}</p>
            </div>
        </div>
    );
}