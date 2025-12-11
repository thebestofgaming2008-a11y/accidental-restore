import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Product } from '@/data/products';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  product?: Product;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const CART_STORAGE_KEY = 'maktabah-cart';

const getProductImage = (product: Product): string => {
  const img = product.image as string | string[];
  if (typeof img === 'string') return img;
  if (Array.isArray(img) && img.length > 0) return img[0];
  return '/placeholder.svg';
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        const normalized = parsed.map((item: any) => item.product ? {
          id: item.product.id, name: item.product.name, price: item.product.price,
          quantity: item.quantity, image: getProductImage(item.product), product: item.product
        } : item);
        setItems(normalized);
      } catch (e) { console.error('Failed to parse cart:', e); }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => { if (isLoaded) localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items)); }, [items, isLoaded]);

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      return existing ? prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i) : [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const addToCart = useCallback((product: Product) => {
    addItem({ id: product.id, name: product.name, price: product.price, image: getProductImage(product), product });
  }, [addItem]);

  const removeItem = useCallback((id: string) => setItems(prev => prev.filter(item => item.id !== id)), []);
  const removeFromCart = removeItem;
  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty <= 0) setItems(prev => prev.filter(item => item.id !== id));
    else setItems(prev => prev.map(item => item.id === id ? { ...item, quantity: qty } : item));
  }, []);
  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
