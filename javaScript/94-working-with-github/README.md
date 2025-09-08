Perfect! Now that you understand the fundamentals of Git and GitHub, it’s time to dive into **collaborative workflows** used by **professional developers and teams**.

---

# 👥 **Chapter 94: Working with GitHub Projects, Branches & Pull Requests (PRs)**

---

## 🎯 Objectives:

By the end of this chapter, you’ll be able to:

* Understand how teams **collaborate** on GitHub
* Work with **branches** and **pull requests**
* Use **GitHub Projects**, **Issues**, and **Discussions**
* Collaborate like a pro – even as a solo dev!

---

## 📌 Why This Matters

| Without Collaboration Tools | With GitHub Features                    |
| --------------------------- | --------------------------------------- |
| Chaos in managing tasks     | Clear task management (issues/projects) |
| Code overwritten by others  | Use branches and PRs safely             |
| No teamwork or feedback     | PR reviews and comments                 |
| Hard to track features      | GitHub Projects and milestones          |

---

## 🧪 GitHub Collaboration Workflow

> 💡 This is how open-source projects and professional teams collaborate.

### 1️⃣ Create a **Branch**

```bash
git checkout -b feature/contact-form
```

* Keep `main` branch clean
* Work on new features safely

---

### 2️⃣ Make Changes → Commit

```bash
git add .
git commit -m "Added contact form feature"
```

---

### 3️⃣ Push to GitHub

```bash
git push origin feature/contact-form
```

---

### 4️⃣ Create a **Pull Request (PR)**

1. Go to your repo on GitHub
2. Click **“Compare & Pull Request”**
3. Write a clear title + description
4. Submit PR to `main` branch

---

### 5️⃣ Review → Merge

* Collaborators can comment, suggest changes, or approve
* Once ready, click **“Merge Pull Request”**
* Delete the feature branch if no longer needed

---

## ✅ PR Example Workflow

```bash
main        ← production branch
 └─ feature/contact-form (you worked here)
     → Pull Request
         → Review / Approve / Merge
             → Code added to main
```

---

## 🧰 GitHub Projects – Kanban for Developers

> Organize tasks visually like **Trello** or **Notion**

1. Go to **"Projects"** tab
2. Create a **board**
3. Add **columns**: `To Do`, `In Progress`, `Done`
4. Link **issues** or **pull requests** to cards
5. Track progress visually

---

### 📌 Use Projects For:

* Team Task Planning
* Open-source Roadmaps
* Milestone Tracking

---

## 🔧 GitHub Issues

Issues help you:

* Track bugs 🐛
* Plan features 🚀
* Assign team members 👨‍💻👩‍💻

```markdown
# Issue: Contact Form Submission Fails
Steps to Reproduce:
- Submit empty form
- See JS error in console

Expected: Should validate and prevent submission
```

> You can link Issues directly to PRs with `Fixes #issueNumber`

---

## 💬 GitHub Discussions

Use when you need:

* Feedback on feature ideas
* Asking the community
* Brainstorming or Q\&A

---

## 🌟 Bonus: Contributing to Open Source

* Fork a repo → Clone it
* Create a branch → Add your fix
* Push → Open PR
* Follow the project’s **CONTRIBUTING.md** rules

---

## 🧪 Assignment: Practice Team Workflow

1. Create a repo
2. Make 2 branches: `feature/navbar`, `feature/footer`
3. Push each to GitHub
4. Create a pull request for both
5. Merge one, ask a friend to review the other (or use your second GitHub account)

---

## 🔗 Useful Commands

```bash
# Create a branch
git checkout -b feature/branch-name

# Push to GitHub
git push origin feature/branch-name

# Switch back to main
git checkout main

# Merge (in GitHub or CLI)
git merge feature/branch-name
```

---

## 📚 Resources

* [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects)
* [PR Best Practices](https://www.pullrequest.com/blog/writing-a-great-pull-request-description/)
* [Open Source Contribution Guide](https://opensource.guide/how-to-contribute/)

---

## ✅ Summary

| Feature     | Purpose                      |
| ----------- | ---------------------------- |
| Branches    | Isolate features and fixes   |
| PRs         | Review and merge changes     |
| Issues      | Track bugs, tasks, and ideas |
| Projects    | Visualize progress           |
| Discussions | Team + community feedback    |

> 🧠 Mastering this workflow means you're **ready for real-world teamwork**, **open-source**, and **professional development pipelines**.

---

## 🚀 Next Chapter:

➡️ **Chapter 95: Why Use Frameworks? Intro to React/Next.js**

Or would you like to create a **GitHub Collaboration Mini Project** before moving to frameworks?

Let me know!
