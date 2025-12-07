import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Cart - Maktabah Abu Hurayrah</title>
        </Helmet>
        <Layout>
          <div className="container mx-auto px-4 py-16 text-center">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="font-philosopher text-2xl font-bold mb-2">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-6">Add some products to your cart to get started.</p>
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Cart ({items.length}) - Maktabah Abu Hurayrah</title>
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-philosopher text-3xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 bg-card rounded-lg p-4 border border-border"
                >
                  {/* Image Placeholder */}
                  <div className="w-24 h-24 bg-muted rounded-md flex-shrink-0 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-muted-foreground/30" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.id}`}
                      className="font-philosopher font-semibold hover:text-primary line-clamp-1"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">{item.product.category}</p>
                    <p className="font-bold mt-1">₹{item.product.price.toLocaleString('en-IN')}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded border border-border hover:bg-muted"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded border border-border hover:bg-muted"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal & Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <p className="font-bold">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-destructive hover:text-destructive/80 p-1"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}

              <Button variant="ghost" size="sm" onClick={clearCart} className="text-destructive">
                Clear Cart
              </Button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 border border-border sticky top-24">
                <h2 className="font-philosopher text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{totalPrice >= 2000 ? 'Free' : '₹100'}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{(totalPrice + (totalPrice >= 2000 ? 0 : 100)).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {totalPrice < 2000 && (
                  <p className="text-sm text-muted-foreground mb-4 bg-muted p-3 rounded">
                    Add ₹{(2000 - totalPrice).toLocaleString('en-IN')} more for free shipping!
                  </p>
                )}

                <Button asChild className="w-full gap-2">
                  <Link to="/checkout">
                    Proceed to Checkout
                    <ArrowRight size={16} />
                  </Link>
                </Button>

                <Link
                  to="/shop"
                  className="block text-center text-sm text-primary hover:underline mt-4"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
