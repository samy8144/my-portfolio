# Samata's Portfolio & Authentication System

A robust, full-stack web application featuring secure user authentication and a professional, dynamic portfolio page. This project demonstrates proficiency in modern web development, security best practices, and UI/UX design.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 Project Overview

This application serves two main purposes:
1.  **Authentication System**: A secure portal allowing users to register and log in to access protected content.
2.  **Professional Portfolio**: A dynamic showcase of my skills, projects (specifically AI/ML), and certifications, accessible only to authenticated users.

The design features a custom **Dark Grey Theme** (deep grey gradients and cards) for a modern, professional, and comfortable viewing experience.

## ✨ Key Features

### 🔐 Authentication & Security
*   **User Registration**: Secure sign-up flow with email validation and password restrictions.
*   **Secure Login**: JWT (JSON Web Token) based authentication with session management.
*   **Password Hashing**: Industry-standard `bcryptjs` encryption for password storage.
*   **Protected Routes**: The portfolio page is inaccessible without a valid login token.
*   **Automatic Logout**: Session handling with an optimized logout flow.

### 🎨 User Interface & Experience
*   **Dark Grey Aesthetic**: A custom-tailored theme using "Night Sky" gradients and deep charcoal cards for a premium look (solved "too much white" issues).
*   **Personalized Welcome**: Dynamic greeting ("Welcome, [User]") upon login.
*   **Responsive Design**: Fully optimized for Desktops, Tablets, and Mobile devices.
*   **Glassmorphism**: Subtle glass-effect cards for a modern UI feel.

### 📄 Portfolio Content
*   **About Me**: Personalized professional summary.
*   **AI & ML Projects**: Detailed showcase of projects like "AI-Powered Document Extractor" and "Deep Learning Image Detection".
*   **Skills Matrix**: Categorized technical skills (Languages, Web, DB, QA, Tools).
*   **Certifications**: A dedicated section for professional certificates.
*   **Contact Links**: Professional formatting for LinkedIn and GitHub.

## 🛠️ Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3 | Semantic markup and custom "Inter" typography. |
| **Logic** | JavaScript (ES6+) | Vanilla JS for DOM manipulation and API calls. |
| **Backend** | Node.js & Express | Robust server-side logic and API routing. |
| **Database** | MongoDB | NoSQL database for flexible user data storage. |
| **Auth** | JWT & Bcrypt | Stateless authentication and security. |
| **Deployment** | Vercel | Serverless deployment platform. |

## 🚀 Installation & Local Setup

Follow these steps to run the project locally on your machine.

### Prerequisites
*   Node.js (v14 or higher)
*   Git

### Steps

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/samy8144/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file in the root directory (optional for local memory DB, required for cloud):
    ```env
    # Optional: Connect to Cloud DB
    MONDODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
    JWT_SECRET=your_super_secret_key_here
    ```
    *Note: If no MongoDB URI is provided, the app uses an in-memory database for testing.*

4.  **Run the Server**
    ```bash
    npm run dev
    ```

5.  **Access the App**
    Open your browser and navigate to: `http://localhost:3001`

## ☁️ Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to **GitHub**.
2.  Import the repository in **Vercel**.
3.  Add your `MONGODB_URI` and `JWT_SECRET` in the Vercel Project Settings > Environment Variables.
4.  Deploy!

*For a step-by-step guide, please refer to* `DEPLOY.md`.

## 📂 Project Structure

```
Twenty20/
├── api/                # Serverless API functions (Vercel compatible)
│   ├── login.js        # Auth: Login logic
│   ├── register.js     # Auth: Registration logic
│   └── verify.js       # Auth: Token verification
├── public/             # Static Frontend Files
│   ├── index.html      # Landing/Login Page
│   ├── portfolio.html  # Main Portfolio Interface
│   ├── style.css       # Global Styles (Dark Theme)
│   ├── app.js          # Login/Register Logic
│   └── portfolio.js    # Portfolio Logic & Data
├── lib/                # Shared Utilities
│   └── db.js           # Database Connection
├── server.js           # Local Development Server
└── package.json        # Project Manifest
```

## 👤 Author

**Samata Sandeep Padanad**
*   **Role**: Information Science and Engineering Student
*   **Focus**: Software Engineering, AI/ML, Data Structures
*   **Location**: Bengaluru
*   **GitHub**: [samy8144](http://github.com/samy8144)

---
*Created as part of the Twenty20 Systems Hiring Assessment.*
