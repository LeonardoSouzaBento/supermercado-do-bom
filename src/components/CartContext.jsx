import React, { createContext, useState, useEffect, useRef} from 'react';
import { productsCatId1, productsCatId2, productsCatId3, 
productsCatId4, productsCatId5, productsCatId6, productsCatId7, productsCatId8, productsCatId9} from '../data/products_by_category';
import { promo_products } from '../data/promo_products';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [limitProductList, setLimitProductList] = useState(0);
  const [limitCategories, setLimitCategories] = useState(0);
  const [limitAdvertisements, setLimitAdvertisements] = useState(0);
  
  const advertisementsRef = useRef();
  const categoriesRef = useRef();
  const promotionsRef = useRef();

  const [cartProducts, setCartProducts] = useState(() => {
    // Lê do localStorage ao iniciar
    const stored = localStorage.getItem('cartProducts');
    return stored ? JSON.parse(stored) : [];
  });
  
  const [searchProducts, setSearchProducts]= useState([]);
  const [currentCategory, setCurrentCategory] = useState(0); //Seleção de categorias

  const allProductsInCat = [promo_products, productsCatId1, productsCatId2, productsCatId3,
  productsCatId4, productsCatId5, productsCatId6, productsCatId7, productsCatId8, 
  productsCatId9,[],[], cartProducts, searchProducts];


  function handleQuantityChange(product, isAdding) {
    setCartProducts(prev => {
      const existingItemIndex = prev.findIndex(item => item.id === product.id);
      const updatedCart = [...prev];

      if (isAdding) {
        if (existingItemIndex !== -1) {
          // Produto já está no carrinho, aumenta a quantidade
          updatedCart[existingItemIndex].quant += 1;
        } else {
          // Produto ainda não está no carrinho, adiciona com quant atual
          updatedCart.push(product);
        }
      } else {
        if (existingItemIndex !== -1) {
          if (updatedCart[existingItemIndex].quant > 1) {
            // Diminui a quantidade
            updatedCart[existingItemIndex].quant -= 1;
          } else {
            // Remove o produto do carrinho
            updatedCart.splice(existingItemIndex, 1);
          }
        }
      }
      return updatedCart;
    });
  }

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }, [cartProducts]);

  const totalQuantity = cartProducts.reduce((acc, item) => acc + item.quant, 0);

  const totalAddedValue = cartProducts.reduce((acumulador, objeto) => {
    const price = parseFloat(objeto.price?.replace(',', '.'));
    const subtotal = objeto.quant * price;
    return acumulador + subtotal;
  }, 0); //valor inicial do acumulador

  const totalValueFormatted = totalAddedValue.toFixed(2).replace('.', ',');

  return (
    <CartContext.Provider value={{advertisementsRef, categoriesRef, promotionsRef, setLimitProductList, 
    limitProductList, setLimitCategories, limitCategories, setLimitAdvertisements, limitAdvertisements, 
    handleQuantityChange, totalQuantity, currentCategory, setCurrentCategory,
    totalAddedValue,totalValueFormatted, allProductsInCat, setCartProducts, cartProducts,
    searchProducts, setSearchProducts}}>
      {children}
    </CartContext.Provider>
  );
}
