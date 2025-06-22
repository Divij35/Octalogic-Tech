# Playwright Test Assignment

This project contains automated UI tests for a demo web application (`https://minimals.cc`) using [Playwright](https://playwright.dev/) with TypeScript.

---

## 📌 Features Tested

| Module                 | Feature                                                                 |
|------------------------|-------------------------------------------------------------------------|
| Billing Account        | Update billing name & payment method                                    |
| Search & Filter        | Search for an order; apply job filters                                  |
| Chat Messaging         | Open a chat, send a message, validate it                                |
| File Manager           | Select all files, delete them, and verify deletion                      |

---

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- GitHub Actions (for CI)
- Node.js (LTS)

---

## 🧪 How to Run Tests Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Divij35/Octalogic-Tech
cd octalogic-tech
```

### 2. Install Dependencies
```bash
npm ci 
```

### 3. Run tests
```bash
npx playwright test
```

To view test in ui mode 
```bash
npx playwright test --ui
```

## To view the html report
```bash
npx playwright show-report
```

## Github actions CI/CD
This project includes GitHub Actions for continuous testing on every push or pull_request.

+ Location: .github/workflows/playwright.yml

+ Artifacts: HTML test report is uploaded for each CI run

## Credentials
+ URL: https://minimals.cc

+ Email: demo@minimals.cc

+ Password: @2Minimal


