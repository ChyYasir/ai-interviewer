# Git & GitHub Commit Message Guidelines

> **Best Practice Guide** following Conventional Commits style (used by Google, Angular, GitHub, and many open-source projects)

---

## 📋 Table of Contents

- [Basic Commit Message Structure](#basic-commit-message-structure)
- [Commit Types](#commit-types)
- [Subject Line Rules](#subject-line-rules)
- [Scope Guidelines](#scope-guidelines)
- [Commit Body](#commit-body)
- [Footer Usage](#footer-usage)
- [Atomic Commits](#atomic-commits)
- [What NOT to Do](#what-not-to-do)
- [Real-World Examples](#real-world-examples)
- [Team Rules](#team-rules)
- [Quick Template](#quick-template)
- [Teaching Tips](#teaching-tips)

---

## Basic Commit Message Structure

```
<type>(optional-scope): short, imperative summary

[optional body]

[optional footer]
```

### Example

```
feat(auth): add JWT-based login system

Implemented access and refresh tokens.
Updated middleware for protected routes.
```

---

## Commit Types

Use these types consistently to categorize your commits:

| Type       | Meaning                                         |
| ---------- | ----------------------------------------------- |
| `feat`     | New feature                                     |
| `fix`      | Bug fix                                         |
| `docs`     | Documentation only                              |
| `style`    | Formatting, whitespace (no logic change)        |
| `refactor` | Code restructuring (no new feature, no bug fix) |
| `perf`     | Performance improvement                         |
| `test`     | Adding or updating tests                        |
| `build`    | Build system or dependency changes              |
| `ci`       | CI/CD configuration                             |
| `chore`    | Maintenance, tooling, cleanup                   |
| `revert`   | Revert a previous commit                        |

---

## Subject Line Rules

### ✔ Use Imperative Mood

- ✅ `add login validation`
- ❌ `added login validation`
- ❌ `adding login validation`

### ✔ Keep It Short

- Maximum **50 characters**
- Be concise and descriptive

### ✔ No Period at the End

- ✅ `fix null pointer in user service`
- ❌ `fix null pointer in user service.`

### ✔ Capitalization

- **Lowercase is standard** (recommended)
- ✅ `feat(cart): add checkout button`
- ❌ `Feat(Cart): Add Checkout Button`

---

## Scope Guidelines

Use scope to indicate **where** the change happened.

### Examples

```
feat(cart): add quantity update feature
fix(api): handle empty request body
docs(readme): update setup instructions
test(auth): add unit tests for login
```

### Common Scopes

- `auth` - Authentication/Authorization
- `api` - API endpoints
- `ui` - User Interface
- `db` - Database
- `config` - Configuration files
- `tests` - Testing
- `docs` - Documentation
- `deps` - Dependencies

---

## Commit Body

Use the body only when the **subject line alone is insufficient**.

### Rules

- **Wrap lines at 72 characters**
- Explain **what** and **why**, not how
- Separate from subject with a **blank line**

### Example

```
refactor(order): simplify price calculation

Removed duplicate tax logic and centralized
price computation in the service layer.
This improves maintainability and reduces
the risk of calculation inconsistencies.
```

---

## Footer Usage

### Reference Issues

```
fix(payment): prevent double charge

Closes #142
```

```
feat(profile): add avatar upload feature

Resolves #89
Related to #56
```

### Breaking Changes

```
feat(api): change user endpoint response format

BREAKING CHANGE: /users now returns paginated data
instead of a flat array. Update all client code accordingly.
```

---

## Atomic Commits

### Golden Rule

**One commit = One logical change**

### ❌ Bad Example

```
fix bugs and update UI and add feature
```

### ✅ Good Example

```
fix(auth): correct password validation
style(ui): align login form buttons
feat(profile): add avatar upload
```

---

## What NOT to Do

### ❌ Avoid These Commit Messages

- `update code`
- `fix stuff`
- `final`
- `changes`
- `asdf`
- `wip` (Work In Progress - should be squashed before merging)
- `test commit`
- `commit`

### ❌ Don't Commit

- Generated files (unless required)
- IDE-specific files (`.vscode`, `.idea`)
- OS-specific files (`.DS_Store`, `Thumbs.db`)
- Environment files with secrets (`.env`)
- Large binary files without LFS

---

## Real-World Examples

### ❌ Bad Commits

```
bug fix
update stuff
final changes
asdf
fixed it
```

### ✅ Good Commits

```
fix(search): handle empty query gracefully
feat(dashboard): add real-time data updates
docs(api): update authentication examples
refactor(utils): extract date formatting logic
perf(db): add index on user email field
```

### Complex Example with Body and Footer

```
feat(notifications): add email notification system

Implemented a queue-based email notification system
using Bull and Redis. Notifications are sent asynchronously
to improve API response times.

Features:
- Welcome email on user registration
- Password reset email
- Order confirmation email

BREAKING CHANGE: Email templates now use Handlebars
instead of plain text. Update all email content accordingly.

Closes #234
Related to #189
```

---

## Team Rules

### Suggested Enforcement Guidelines

1. **Follow Conventional Commits** format
2. **No direct commits to `main`** (use PRs)
3. **PR title must follow commit style**
4. **Squash & merge** for clean history
5. **CI must pass** before merge
6. **Code review required** for all PRs
7. **Link issues** in commit footer when applicable

### Git Hooks (Optional)

Use tools like **commitlint** or **husky** to enforce commit message standards automatically.

---

## Quick Template

Use this template for your commits:

```
type(scope): short description

[why the change was needed]
[what was done]
[any side effects or considerations]

[Closes #issue]
[BREAKING CHANGE: description if applicable]
```

### Copy-Paste Template

```
type(scope):

```

---

## Teaching Tips

### For Faculty/Mentors

> **"If I can understand what changed and why from your commit message alone, without looking at the code, it's a good commit."**

### Key Points to Emphasize

1. **Clarity over brevity** - Be concise but clear
2. **Future you will thank you** - Good commits help during debugging
3. **Team collaboration** - Others need to understand your changes
4. **Professional habit** - Industry standard in modern software development
5. **Git history is documentation** - Treat it as such

### Student Exercise

Ask students to:

1. Review their last 10 commits
2. Rewrite them following these guidelines
3. Explain why the new version is better

---

## Additional Resources

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
- [Semantic Versioning](https://semver.org/)

---

## Quick Reference Card

```
feat:     New feature
fix:      Bug fix
docs:     Documentation
style:    Formatting
refactor: Code restructuring
perf:     Performance
test:     Testing
build:    Build system
ci:       CI/CD
chore:    Maintenance
revert:   Revert commit

Format: type(scope): imperative subject

        Optional body

        Optional footer
```

---

## License

Feel free to use and adapt these guidelines for your team or project.

---

**Last Updated:** February 2025  
**Maintained by:** [Your Name/Organization]
