
---

### 📄 `CONTRIBUTING.md`

```markdown
# Contributing to B2B Lead CRM Lite

Thank you for your interest in contributing to the **B2B Lead CRM Lite** project! 🚀  
This guide will help you get started with setting up, collaborating, and contributing effectively.

---

## 🧩 Project Structure

```

/client    --> Frontend (React)
/server    --> Backend (Express + MongoDB)
/docs      --> Documentation and planning

````

---

## 🛠 Prerequisites

- Git & GitHub account
- Node.js & npm/yarn installed
- MongoDB (local or Atlas)
- Code editor (VS Code preferred)

---

## 🚀 Getting Started

1. **Fork** this repository.
2. **Clone** your forked repo:
   ```bash
   git clone https://github.com/<your-username>/B2B_lead_crm_lite.git
   cd B2B_lead_crm_lite
````

3. **Set upstream remote** (once):

   ```bash
   git remote add upstream https://github.com/sukhdeep143/B2B_lead_crm_lite.git
   ```

---

## 🌱 Create a Feature Branch

Before you start coding, create a branch for your feature:

```bash
git checkout -b feature/<feature-name>
```

**Examples:**

* `feature/login-page`
* `feature/dashboard-ui`
* `feature/lead-api`

> 🔁 Never work directly on `main` or `dev`.

---

## 👥 Team Collaboration Rules

* Frontend and backend developers **working on the same feature** should use **the same branch name** (e.g., `feature/dashboard`).
* Communicate clearly about who is doing what in that branch (e.g., UI vs API).

---

## 💻 Coding Guidelines

* Use meaningful commit messages.
* Keep code clean and modular.
* Add comments where necessary.
* Follow file/folder structure conventions.
* Test your code before pushing.

---

## ✅ Commit & Push

```bash
git add .
git commit -m "Add: <what you did>"
git push origin feature/<feature-name>
```

---

## 🔁 Making a Pull Request (PR)

1. Go to your forked repo.
2. Click **"Compare & pull request"**.
3. Provide a clear PR title and description.
4. Select `dev` branch as the base.
5. Submit your pull request.

---

## 🧪 Code Review & Merge

* PRs will be reviewed by team leads.
* Suggestions will be left as comments.
* Once approved, it will be merged into the `dev` branch.

---

## 🤝 Code of Conduct

We follow respectful and inclusive communication.
Be kind, helpful, and professional with your teammates.

---

## 📝 Need Help?

Create an issue or contact the team lead directly.



