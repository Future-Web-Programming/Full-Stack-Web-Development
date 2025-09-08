Great! Chapter 93 is one of the **most critical** chapters for becoming a **real-world developer**. Mastering version control is essential not just for teamwork, but also for **professional portfolios**, **open-source contributions**, and **real job workflows**.

---

# 🔀 **Chapter 93: Version Control Basics (Git + GitHub)**

## 🎯 Objectives:

By the end of this chapter, you’ll be able to:

* Understand **Git** and **GitHub**
* Use Git to **track project history**
* Push your code to **GitHub**
* Collaborate with teams via **branches**, **pull requests**, and **commits**
* Prepare for interviews and real-world dev environments

---

## 🧠 Why Learn Git?

| Problem Without Git   | Solution With Git                      |
| --------------------- | -------------------------------------- |
| No history of changes | Tracks all code changes                |
| Can't revert mistakes | Roll back to any version               |
| Hard to collaborate   | Branching, merging, pull requests      |
| Manual file backups   | Cloud-based version control via GitHub |

---

## 🧰 What Are Git & GitHub?

| Tool       | Description                                 |
| ---------- | ------------------------------------------- |
| **Git**    | Local version control system (CLI tool)     |
| **GitHub** | Cloud hosting platform for Git repositories |

---

## 📦 Step-by-Step Git & GitHub Workflow

### ✅ 1. Initialize a Git Repo

```bash
git init
```

### ✅ 2. Configure Git (first-time only)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

### ✅ 3. Create Your Project Files

```plaintext
/project-folder
  ├── index.html
  ├── script.js
  └── style.css
```

---

### ✅ 4. Track Files in Git

```bash
git add .
git commit -m "Initial commit"
```

> `git add .` adds all files
> `git commit -m "message"` saves a snapshot

---

### ✅ 5. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com/)
2. Click **"New Repository"**
3. Set name, description, public/private
4. Don’t initialize with README (we’ll push manually)

---

### ✅ 6. Connect Local Repo to GitHub

Copy the URL from GitHub and run:

```bash
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

---

### ✅ 7. Make Changes and Push Again

Make changes → Save → Then:

```bash
git add .
git commit -m "Updated feature"
git push
```

---

## 🛠️ Common Git Commands Cheatsheet

| Command               | Purpose               |
| --------------------- | --------------------- |
| `git init`            | Start a repo          |
| `git add .`           | Track all changes     |
| `git commit -m "msg"` | Save snapshot         |
| `git status`          | Check changed files   |
| `git log`             | View commit history   |
| `git push`            | Upload to GitHub      |
| `git pull`            | Download from GitHub  |
| `git clone`           | Copy repo from GitHub |

---

## 🌿 Branching (Optional Preview)

```bash
git checkout -b feature-branch
# Make changes
git add .
git commit -m "New feature"
git checkout main
git merge feature-branch
```

> You’ll use branching more in **Chapter 94** when we discuss **PRs** and **team collaboration**.

---

## 🧠 Git in Real Life (How Pros Use It)

* Auto backup every change to GitHub
* Multiple developers work in parallel
* Bug fixes and features handled in separate branches
* Easy rollback if things break
* Required for open-source contributions

---

## 📁 Real-World Git Project Structure

```
/my-js-project
  ├── .git/            (hidden)
  ├── index.html
  ├── app.js
  ├── style.css
  ├── README.md
  └── .gitignore
```

---

## 🧹 Bonus: Create `.gitignore` File

```plaintext
node_modules/
dist/
.env
```

> Prevents unnecessary files from being tracked (like secrets or build folders)

---

## 📺 Extra: VS Code Git Integration

* View changes in **Source Control** tab
* Stage, commit, push right inside VS Code
* Install **GitHub Copilot** (optional) for AI suggestions

---

## 🔗 Your GitHub Profile = Your Portfolio

* Pin your top projects
* Add README.md for every project
* Keep code clean and well-documented

---

## 🧪 Assignment

1. Create a simple JS project (`index.html`, `script.js`)
2. Initialize Git
3. Create a GitHub repo
4. Push code to GitHub
5. Modify files and push again

---

## 📚 Resources

* [Git Book (Free)](https://git-scm.com/book/en/v2)
* [GitHub Docs](https://docs.github.com/en)
* [Try Git Online](https://learngitbranching.js.org/)
* [GitHub Student Developer Pack](https://education.github.com/pack)

---

## ✅ Summary

* Git = Track changes locally
* GitHub = Host code in the cloud
* Learn to push, pull, branch, and commit
* Essential for solo and team projects
* Required for job interviews and freelance work

---

✅ Let me know when you're ready for:

➡️ **Chapter 94: Working with GitHub Projects/PRs**
Or if you'd like to add a **collaborative mini project** using Git + GitHub (ideal for practice).
