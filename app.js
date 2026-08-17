const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const foods = [
    {
        name: "Chicken Biryani",
        price: 180,
        emoji: "🍗",
        description: "Aromatic basmati rice with delicious chicken and spices."
    },
    {
        name: "Masala Dosa",
        price: 90,
        emoji: "🥞",
        description: "Crispy dosa served with potato masala, sambar and chutney."
    },
    {
        name: "Paneer Butter Masala",
        price: 160,
        emoji: "🍛",
        description: "Soft paneer cooked in a rich and creamy tomato gravy."
    },
    {
        name: "Veg Fried Rice",
        price: 120,
        emoji: "🍚",
        description: "Fried rice with fresh vegetables and aromatic spices."
    },
    {
        name: "Chicken Burger",
        price: 150,
        emoji: "🍔",
        description: "Juicy chicken patty with fresh vegetables and special sauce."
    },
    {
        name: "French Fries",
        price: 80,
        emoji: "🍟",
        description: "Crispy golden fries served hot and fresh."
    }
];

app.get("/", (req, res) => {
    const foodCards = foods.map(food => `
        <div class="food-card">
            <div class="food-image">${food.emoji}</div>

            <div class="food-info">
                <h2>${food.name}</h2>

                <p>${food.description}</p>

                <div class="bottom">
                    <span class="price">₹${food.price}</span>
                    <button onclick="orderFood('${food.name}')">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    `).join("");

    res.send(`
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Foodie - Food Ordering</title>

            <style>

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                body {
                    font-family: Arial, sans-serif;
                    background: #f7f7f7;
                    color: #333;
                }

                header {
                    background: #ff5722;
                    color: white;
                    padding: 20px 8%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    font-size: 28px;
                    font-weight: bold;
                }

                .cart {
                    background: white;
                    color: #ff5722;
                    padding: 10px 18px;
                    border-radius: 25px;
                    font-weight: bold;
                }

                .hero {
                    background: linear-gradient(
                        rgba(0,0,0,0.5),
                        rgba(0,0,0,0.5)
                    ),
                    linear-gradient(135deg, #ff7043, #ff9800);

                    color: white;
                    text-align: center;
                    padding: 70px 20px;
                }

                .hero h1 {
                    font-size: 46px;
                    margin-bottom: 15px;
                }

                .hero p {
                    font-size: 20px;
                }

                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 40px auto;
                }

                .section-title {
                    text-align: center;
                    margin-bottom: 30px;
                    font-size: 32px;
                }

                .food-grid {
                    display: grid;
                    grid-template-columns: repeat(
                        auto-fit,
                        minmax(280px, 1fr)
                    );

                    gap: 25px;
                }

                .food-card {
                    background: white;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                }

                .food-card:hover {
                    transform: translateY(-5px);
                }

                .food-image {
                    height: 180px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 90px;
                    background: #fff3e0;
                }

                .food-info {
                    padding: 20px;
                }

                .food-info h2 {
                    margin-bottom: 10px;
                    color: #333;
                }

                .food-info p {
                    color: #777;
                    line-height: 1.5;
                    min-height: 65px;
                }

                .bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 20px;
                }

                .price {
                    font-size: 22px;
                    font-weight: bold;
                    color: #ff5722;
                }

                button {
                    border: none;
                    background: #ff5722;
                    color: white;
                    padding: 11px 18px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: bold;
                }

                button:hover {
                    background: #e64a19;
                }

                footer {
                    margin-top: 60px;
                    background: #222;
                    color: white;
                    text-align: center;
                    padding: 25px;
                }

                @media (max-width: 600px) {

                    .hero h1 {
                        font-size: 32px;
                    }

                    header {
                        padding: 15px 5%;
                    }

                    .logo {
                        font-size: 22px;
                    }

                }

            </style>
        </head>

        <body>

            <header>

                <div class="logo">
                    🍴 Foodie
                </div>

                <div class="cart">
                    🛒 Cart: <span id="cartCount">0</span>
                </div>

            </header>

            <section class="hero">

                <h1>Delicious Food, Delivered Fast!</h1>

                <p>
                    Order your favorite food from Foodie
                </p>

            </section>

            <main class="container">

                <h2 class="section-title">
                    Popular Foods
                </h2>

                <div class="food-grid">

                    ${foodCards}

                </div>

            </main>

            <footer>

                <p>
                    © 2026 Foodie | Simple Food Ordering Application
                </p>

            </footer>

            <script>

                let cartCount = 0;

                function orderFood(foodName) {

                    cartCount++;

                    document.getElementById("cartCount").textContent =
                        cartCount;

                    alert(
                        foodName + " added to your cart!"
                    );
                }

            </script>

        </body>

        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(
        `Food application running on port ${PORT}`
    );
});
