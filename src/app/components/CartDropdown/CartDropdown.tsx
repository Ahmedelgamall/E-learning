import React, { useState } from 'react';
import { ShoppingCart, ChevronDown, Trash2 } from 'lucide-react';
import './CartDropdown.scss'; // Make sure to import the SCSS file
import { useTranslation } from 'react-i18next';

const CartDropdown = () => {
  const { t } = useTranslation(); // Call useTranslation hook to get t function

  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
  ]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-dropdown">
      <button onClick={toggleDropdown} className="cart-dropdown__toggle">
        <ShoppingCart size={20} />
        <span>{totalItems}</span>
        <ChevronDown size={20} />
      </button>
      {isOpen && (
        <div className="cart-dropdown__menu">
          <div className="cart-dropdown__header">
            <h3>{t('cart.title')}</h3>
          </div>
          <div className="cart-dropdown__items">
            {cartItems.length === 0 ? (
              <p>{t('cart.empty')}</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="cart-dropdown__item">
                  <div className="cart-dropdown__item-info">
                    <p className="name">{item.name}</p>
                    <p className="price">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="cart-dropdown__remove-btn">
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="cart-dropdown__footer">
              <p className="total">{t('cart.total')}: ${totalPrice.toFixed(2)}</p>
              <button className="cart-dropdown__checkout-btn">
                {t('cart.checkout')}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartDropdown;