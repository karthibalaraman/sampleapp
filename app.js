const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Jenkins Docker CI/CD</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f4f4f4;
                    text-align: center;
                    padding-top: 100px;
                }

                .container {
                    background: white;
                    width: 500px;
                    margin: auto;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                }

                h1 {
                    color: #2c3e50;
                }

                p {
                    color: #555;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h1>Version 2 - Jenkins CI/CD!</h1>
                <p>Node.js application is running successfully.</p>
                <p>Jenkins → Docker → Docker Hub</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
