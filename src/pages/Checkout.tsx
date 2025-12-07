import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/Layout';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ShoppingBag, MessageCircle, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create order summary for WhatsApp
    const orderItems = items.map(item => 
      `• ${item.product.name} x${item.quantity} - ₹${(item.product.price * item.quantity).toLocaleString('en-IN')}`
    ).join('\n');
    
    const shippingCost = totalPrice >= 2000 ? 0 : 100;
    const grandTotal = totalPrice + shippingCost;
    
    const message = `*New Order from Maktabah Abu Hurayrah*\n\n*Customer Details:*\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\n*Shipping Address:*\n${formData.address}\n${formData.city}, ${formData.state} - ${formData.pincode}\n\n*Order Items:*\n${orderItems}\n\n*Subtotal:* ₹${totalPrice.toLocaleString('en-IN')}\n*Shipping:* ${shippingCost === 0 ? 'Free' : '₹100'}\n*Total:* ₹${grandTotal.toLocaleString('en-IN')}\n\n*Notes:* ${formData.notes || 'None'}`;
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919876543210?text=${encodedMessage}`;
    
    toast.success('Redirecting to WhatsApp to complete your order...');
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <>
        <Helmet>
          <title>Checkout - Maktabah Abu Hurayrah</title>
        </Helmet>
        <Layout>
          <div className="container mx-auto px-4 py-16 text-center">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h1 className="font-philosopher text-2xl font-bold mb-2">No Items to Checkout</h1>
            <p className="text-muted-foreground mb-6">Add some products to your cart first.</p>
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </Layout>
      </>
    );
  }

  const shippingCost = totalPrice >= 2000 ? 0 : 100;
  const grandTotal = totalPrice + shippingCost;

  return (
    <>
      <Helmet>
        <title>Checkout - Maktabah Abu Hurayrah</title>
      </Helmet>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft size={16} />
            Back to Cart
          </Link>

          <h1 className="font-philosopher text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Info */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="font-philosopher text-xl font-bold mb-4">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="font-philosopher text-xl font-bold mb-4">Shipping Address</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">Street Address *</Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        rows={2}
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">PIN Code *</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Notes */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h2 className="font-philosopher text-xl font-bold mb-4">Order Notes (Optional)</h2>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special instructions for your order..."
                    rows={3}
                  />
                </div>

                {/* Payment Notice */}
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-philosopher font-bold text-lg mb-2">Contact to Complete Order</h3>
                      <p className="text-muted-foreground text-sm">
                        After submitting this form, you'll be redirected to WhatsApp to confirm your order 
                        and arrange payment. We accept UPI, Bank Transfer, and other payment methods.
                      </p>
                    </div>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <MessageCircle size={20} />
                  Contact to Order via WhatsApp
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 border border-border sticky top-24">
                <h2 className="font-philosopher text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {item.product.name} × {item.quantity}
                      </span>
                      <span>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : '₹100'}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Checkout;
