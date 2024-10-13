export const calculateTotal = (items) => {
    const total = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    return total;
};