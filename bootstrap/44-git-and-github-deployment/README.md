# 📦 Chapter 38: Git, GitHub & Netlify Deployment

🚀 *Deploy Your Bootstrap Projects Like a Pro!*

---

## 🎯 What You’ll Learn:

* Basics of Git & GitHub for version control
* Setting up a GitHub repository for your Bootstrap project
* Pushing your Bootstrap project to GitHub
* Deploying your site using **Netlify** (Free hosting for static websites)
* Live site management, automatic redeployment on code change
* Bonus: Deploying via GitHub Pages

---

## 🧠 Why This Matters

Your project isn’t complete until it's live!
Learning **how to deploy your Bootstrap website** means you can:

* Share your work with clients, friends, or employers
* Build a live portfolio
* Collaborate with other developers using Git & GitHub
* Automate deployment (CI/CD-style) with tools like **Netlify**

---

## ✅ Prerequisites

Before we begin, make sure:

* You have a finished Bootstrap project (you can use any project from Phase 3)
* Git is installed on your system
* You have a free **GitHub** and **Netlify** account

---

## 🧰 Tools We’ll Use

| Tool             | Purpose                        |
| ---------------- | ------------------------------ |
| Git              | Version Control                |
| GitHub           | Remote code hosting            |
| Netlify          | One-click deployment & CI/CD   |
| VS Code Terminal | Command-line interface for Git |

---

## 🧱 Step-by-Step Deployment Guide

### 🔹 Step 1: Initialize a Git Repo Locally

Open your project in VS Code and run:

```bash
git init
git add .
git commit -m "Initial commit"
```

---

### 🔹 Step 2: Push Project to GitHub

1. Create a new repository on GitHub
2. Then, link and push your code:

```bash
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

---

### 🔹 Step 3: Deploy to Netlify (Drag & Drop)

#### 🔁 Method 1: Manual (Perfect for Beginners)

1. Go to [https://netlify.com](https://netlify.com)
2. Log in or sign up
3. Click **“Add New Site” > “Deploy manually”**
4. Drag & drop your project folder’s **`dist/`** or main directory into the box

✅ Your Bootstrap site is now live!

---

### 🔹 Step 4: Deploy via GitHub (Auto-Deploy)

#### 🔁 Method 2: GitHub Integration

1. Go to **Netlify Dashboard** > Add new site → **Import from Git**
2. Choose GitHub and authorize Netlify
3. Select your repo
4. Set:

   * **Build Command**: (leave blank if no build tool)
   * **Publish directory**: `./` or `dist` (where your HTML & CSS live)
5. Click **Deploy**

✅ Anytime you push changes to GitHub → Netlify auto-redeploys 🎯

---

## 🌐 Alternative: Deploy to GitHub Pages

```bash
# For simple HTML/CSS (Bootstrap) projects:
git checkout -b gh-pages
git push origin gh-pages
```

1. Go to **Settings > Pages**
2. Select branch `gh-pages`, save
3. Your site will be live at:

```
https://your-username.github.io/your-repo/
```

---

## 🎁 Bonus Tips

* Add a **custom domain** in Netlify
* Use `robots.txt` and `sitemap.xml` for SEO
* Enable **HTTPS** for free SSL
* Monitor deployment logs for debugging

---

## 💼 Real-World Use Cases

| Scenario             | Why This Chapter Helps                        |
| -------------------- | --------------------------------------------- |
| You’re freelancing   | Share live preview links with clients         |
| You’re job hunting   | Add live project links to your resume         |
| You’re collaborating | Use Git & GitHub for version control          |
| You're building SaaS | Use Netlify for easy staging/production setup |

---

## 🎥 YouTube Walkthrough (What to Record)

1. Explaining Git & GitHub for beginners
2. Live GitHub repo creation + commit/push demo
3. Deploying via Netlify (manual + GitHub-connected)
4. GitHub Pages as a bonus option
5. Final result: Show site live on Netlify or GitHub Pages

---

## 📌 Assignment for Students

> ✅ **Task**: Take your previous Bootstrap project and deploy it live using either Netlify or GitHub Pages.
>
> 🎯 Submit the live link + GitHub repo in the comments or assignment portal.

---

## 🚀 Coming Up Next:

➡️ **Chapter 39: Freelancing with Bootstrap**
Learn how to use your Bootstrap skills to get paid — on **Fiverr**, **Upwork**, and from **local clients**.
