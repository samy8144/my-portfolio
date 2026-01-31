# Samata's Portfolio


A responsive full-stack web application with user authentication, MongoDB integration, and portfolio display.

## 🌟 Features

- **User Registration** - Create new accounts with email and password
- **User Login** - Secure authentication with JWT tokens
- **Portfolio Page** - Display user profile and portfolio content
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Dark mode with gradient accents and smooth animations
- **Secure** - Password hashing with bcrypt and JWT-based authentication

## 🛠️ Technology Stack

### Frontend
- HTML5
- CSS3 (Modern responsive design with animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

### Backend
- Node.js
- Express.js (Serverless functions)
- MongoDB with Mongoose
- bcryptjs (Password hashing)
- jsonwebtoken (JWT authentication)

### Deployment
- Vercel (Serverless deployment)
- MongoDB Atlas (Cloud database)

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account (free tier)
- Vercel account (for deployment)
- Git

## 🚀 Local Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Twenty20
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/twenty20?retryWrites=true&w=majority
   JWT_SECRET=your-secret-key-change-this-in-production
   ```

4. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

5. **Run locally**
   ```bash
   vercel dev
   ```

6. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📦 Deployment to Vercel

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Add environment variables in Vercel**
   - Go to your project settings on Vercel dashboard
   - Add `MONGODB_URI` and `JWT_SECRET` in Environment Variables

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

## 🗄️ MongoDB Atlas Setup

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster (free tier M0)
3. Create a database user with read/write permissions
4. Whitelist all IP addresses (0.0.0.0/0) for Vercel deployment
5. Get your connection string and add it to `.env` and Vercel environment variables

## 📁 Project Structure

```
Twenty20/
├── api/
│   ├── login.js          # Login endpoint
│   ├── register.js       # Registration endpoint
│   └── verify.js         # Token verification endpoint
├── lib/
│   └── db.js            # MongoDB connection and User model
├── public/
│   ├── index.html       # Landing page with login/register
│   ├── portfolio.html   # Portfolio page
│   ├── styles.css       # Styles for all pages
│   ├── app.js          # Landing page JavaScript
│   └── portfolio.js    # Portfolio page JavaScript
├── .env.example        # Environment variables template
├── .gitignore         # Git ignore file
├── package.json       # Dependencies and scripts
├── vercel.json       # Vercel configuration
└── README.md         # This file
```

## 🧪 Testing the Application

### Registration Flow
1. Open the deployed URL
2. Click on the "Register" tab
3. Enter name (optional), email, and password (min 6 characters)
4. Click "Register"
5. Verify success message is displayed
6. Check MongoDB Atlas to confirm user was created

### Login Flow
1. Click on the "Login" tab
2. Enter registered email and password
3. Click "Login"
4. Verify redirect to portfolio page
5. Confirm user name and email are displayed

### Portfolio Page
1. After successful login, view portfolio sections:
   - About Me
   - Skills
   - Projects
2. Verify all content is displayed correctly
3. Test on different screen sizes (mobile/tablet/desktop)

### Logout Flow
1. Click the "Logout" button
2. Verify redirect to landing page
3. Confirm session is cleared (can't access portfolio without login)

## 🔒 Security Features

- Passwords hashed with bcrypt (salt rounds: 10)
- JWT tokens for secure authentication
- Token expiration (7 days)
- Protected routes (portfolio page requires authentication)
- Email validation
- Password minimum length requirement (6 characters)
- CORS enabled for API endpoints

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1920x1080 and above)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎨 Design Features

- Modern dark mode theme
- Gradient accents and glassmorphism effects
- Smooth micro-animations
- Hover effects on interactive elements
- Premium color palette
- Custom Google Fonts (Inter)

## 📝 Customization

To customize the portfolio content:
1. Edit `public/portfolio.html`
2. Update the About Me section with your information
3. Modify the Skills grid with your skills
4. Replace project items with your actual projects

## 🐛 Troubleshooting

**Issue: Can't connect to MongoDB**
- Verify MongoDB URI in environment variables
- Check network access settings in MongoDB Atlas
- Ensure database user credentials are correct

**Issue: Login/Registration not working**
- Check browser console for errors
- Verify API endpoints are accessible
- Confirm environment variables are set in Vercel

**Issue: Portfolio page not loading**
- Clear browser localStorage
- Check if token is being stored correctly
- Verify authentication endpoint is working

## 📄 License

This project is created as part of the Twenty20 Systems hiring assessment.

## 👤 Author

[Your Name]
- Email: [Your Email]
- GitHub: [Your GitHub Profile]

## 🔗 Links

- **Live Demo**: [Your Vercel URL]
- **GitHub Repository**: [Your GitHub Repo URL]
