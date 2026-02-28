import React from 'react';

function Cart({ cartItems, onClose }) {
    const total = cartItems.reduce(
        (sum, item) => sum + (item.price || 0),
        0
    );

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white w-11/12 max-w-md rounded-2xl shadow-2xl p-6 relative animate-[scaleIn_.3s_ease]">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                >
                    ✕
                </button>
                <h2 className="text-2xl font-semibold mb-6">
                    🛒 Your Cart
                </h2>
                {cartItems.length === 0 ? (
                    <div className="text-center py-10 text-gray-500">
                        <p className="text-lg">Your cart is empty</p>
                        <p className="text-sm mt-2">
                            Add some amazing coffee!
                        </p>
                    </div>
                ) : (
                    <div className="max-h-72 overflow-y-auto space-y-4 pr-2">
                        {cartItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex justify-between items-center bg-gray-50 rounded-xl p-4 hover:shadow-md transition"
                            >
                                <div>
                                    <h3 className="font-medium text-gray-800">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        Premium Coffee
                                    </p>
                                </div>
                                <span className="font-semibold text-lg">
                                    ₹{item.price}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
                {cartItems.length > 0 && (
                    <>
                        <div className="border-t mt-6 pt-4 flex justify-between text-lg">
                            <span className="font-medium text-gray-600">
                                Total
                            </span>
                            <span className="font-bold text-xl">
                                ₹{total}
                            </span>
                        </div>
                        <button className="w-full mt-6 bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-xl font-medium hover:scale-[1.02] active:scale-95 transition">
                            Proceed to Checkout →
                        </button>
                    </>
                )}
                <button
                    onClick={onClose}
                    className="w-full mt-3 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
                >
                    Continue Shopping
                </button>
            </div>
            <style>
                {`
          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
            </style>
        </div>
    );
}

export default Cart;