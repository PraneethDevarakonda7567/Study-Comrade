import "./App.css";
import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        name: "Watch",
        price: 4000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoV7cl-uVKiQL5icRWUPwxUaYD0dgQAxwnXw&s",
    },
    {
        id: 2,
        name: "Mobile",
        price: 25000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsnoocq6ORqcj4KBAUvvCRqyBrcpO-e-lCdA&s",
    },
    {
        id: 3,
        name: "Fan",
        price: 3000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpG4az99fRpy8ZvZD3u4nchlmRjLgpgES5Yg&s",
    },
    {
        id: 4,
        name: "Tubelight",
        price: 500,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDyneulYeZ2lo0196JEWPLzH0mb3nVPIZjg&s",
    },
    {
        id: 5,
        name: "Laptop",
        price: 60000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmEkUkVV1nnzjp14mZCIo6Qe6upwRP3QBuw&s",
    },
];

export default function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div
            className="main-bg"
            style={{
                backgroundImage:
                    "url('https://econsultancy.imgix.net/content/uploads/2019/11/29112333/shutterstock_1596400402-scaled.jpg?auto=compress,format,redeye&crop=faces,entropy,edges&fit=crop&w=1536&h=1071')",
            }}
        >
            <div className="overlay"></div>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <span className="logo-icon">🛒</span>
                        <h1 className="logo-text">Trendy Store</h1>
                    </div>
                    <ul className="navbar-links">
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-section"
                >
                    <h2 className="hero-title">
                        Welcome to Trendy E-Commerce Store
                    </h2>
                    <p className="hero-desc">
                        We provide the best quality products like watches, mobiles, fans,
                        tubelights, and laptops at affordable prices. Shop now and experience
                        premium service.
                    </p>
                </motion.section>

                <div id="products" className="products-grid">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="product-card"
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="product-img"
                            />
                            <h2 className="product-name">{product.name}</h2>
                            <p className="product-price">₹{product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="add-to-cart-btn"
                            >
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    className="cart-section"
                >
                    <h2 className="cart-title">
                        <span>🛍️</span> Your Cart
                    </h2>
                    {cart.length === 0 ? (
                        <p className="cart-empty">Your cart is empty.</p>
                    ) : (
                        <div>
                            <ul className="cart-list">
                                {cart.map((item, index) => (
                                    <li key={index} className="cart-item">
                                        <span className="cart-item-name">{item.name}</span>
                                        <span className="cart-item-price">₹{item.price}</span>
                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="remove-btn"
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <h3 className="cart-total">
                                Total: ₹{total}
                            </h3>
                            <button className="checkout-btn">
                                Checkout
                            </button>
                        </div>
                    )}
                </motion.div>

                <section id="about" className="about-section">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-desc">
                        Trendy Store is dedicated to providing high-quality electronic products
                        that make your life easier and more stylish. We focus on customer
                        satisfaction, affordability, and modern designs.
                    </p>
                </section>

                <section id="contact" className="contact-section">
                    <h2 className="contact-title">Contact Us</h2>
                    <p className="contact-info">📞 Phone: +91 7981162006</p>
                    <p className="contact-info">📧 Email: praneeth7567@gmail.com</p>
                </section>

                <footer className="footer">
                    <p>
                        © 2025 Trendy Store. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
}



