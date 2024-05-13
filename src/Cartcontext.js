import { useEffect, createContext, useState } from 'react';

export const CartContext = createContext();

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [itemsInCart,setitemsInCart] = useState(0) 
    function addToCart(item) {
        // проверка, есть ли элемент в массиве cart
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id );
        if (existingItemIndex === -1) {
          // нет элемента с таким id и volume, добавляется новый
          const newItem = {
            ...item,
            inBasket: 1
          };
          setCart(cart.concat([newItem]));
          setitemsInCart(itemsInCart+1);
          
        } else {
          // найден элемент с таким id и volume, увеличивается его количество
          const updatedCart = cart.map((cartItem, index) => {
            if (index === existingItemIndex) {
              return { ...cartItem, 
                inBasket: cartItem.inBasket + 1 };
              }
              return cartItem;
            });
            setCart(updatedCart);
            setitemsInCart(itemsInCart+1);
          }
    }

    useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cart));
    }, [cart]);
 
    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, itemsInCart,setitemsInCart}} >
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;