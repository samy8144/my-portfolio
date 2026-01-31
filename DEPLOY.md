# 🚀 How to Deploy Your Portfolio

Since your local version is working perfectly, here are the steps to make it accessible to everyone using **Vercel** (Free).

## Step 1: Create a GitHub Repository
1.  Go to [GitHub.com](https://github.com) and log in.
2.  Click the **+** icon (top right) -> **New repository**.
3.  Name it `my-portfolio` (or anything you like).
4.  Make it **Public**.
5.  Click **Create repository**.
6.  You will see commands to "push an existing repository". Keep this page open.

## Step 2: Push Your Code to GitHub
Open your terminal (VS Code) and run these commands one by one:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio commit"

# Link to your new GitHub repo (Replace URL with your actual repo link from Step 1)
git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git

# Push the code
git push -u origin master
```

## Step 3: Setup Database (MongoDB Atlas)
Since your local method (In-Memory DB) won't work on the cloud, you need a free cloud database.

1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and sign up (Free).
2.  Create a **M0 (Free)** Cluster.
3.  **Create a User**: Go to "Database Access", create a user (e.g., `admin`) and password. **Remember this password!**
4.  **Network Access**: Go to "Network Access" -> "Add IP Address" -> **Allow Access from Anywhere (0.0.0.0/0)**. (Required for Vercel).
5.  **Get Connection String**:
    *   Click "Connect" -> "Drivers" -> Copy the string.
    *   It looks like: `mongodb+srv://admin:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`
    *   Replace `<password>` with your actual password.

## Step 4: Deploy to Vercel
1.  Go to [Vercel.com](https://vercel.com) and sign up with GitHub.
2.  Click **"Add New..."** -> **Project**.
3.  Select your `my-portfolio` repository and click **Import**.
4.  **Configure Project**:
    *   **Framework Preset**: Other (default is fine).
    *   **Root Directory**: `./` (default).
    *   **Environment Variables**: You MUST add these:
        *   `MONGODB_URI`: Paste your connection string from Step 3.
        *   `JWT_SECRET`: Type any random secret word (e.g., `mysecretkey123`).
5.  Click **Deploy**.

## Step 5: Done!
Vercel will build your site and give you a link (e.g., `https://samata-portfolio.vercel.app`). You can share this link with anyone!
