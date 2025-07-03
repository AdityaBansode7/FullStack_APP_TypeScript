# 🚀 Fullstack CRUD Assignment

This is a **Fullstack User Management App** built for an assignment. It features:

1.Frontend in **Next.js (TypeScript + Tailwind CSS)**  
2.Backend in **Firebase Cloud Functions** (TypeScript)  
3.CRUD operations for Users  
4.Beautiful, modern UI with toast notifications  
5.Local development using Firebase Emulator Suite  

---
## 📸 Frontend UI

![Frontend UI](https://github.com/AdityaBansode7/FullStack_APP_TypeScript/blob/main/screenshots/Frontend_UI.jpg?raw=true)


## ✨ Tech Stack

- **Frontend**  
  - Next.js (v14.x)
  - TypeScript
  - Tailwind CSS
  - Axios
  - React Toastify

- **Backend**  
  - Firebase Cloud Functions
  - Firestore
  - TypeScript

- **Dev Tools**
  - PostCSS
  - Tailwind CLI
  - Firebase CLI

---

## 📂 Project Structure

```
my-app/
│
├── frontend/                  # Next.js frontend
│   ├── pages/
│   │     ├── index.tsx
│   │     └── _app.tsx
│   ├── styles/
│   │     └── globals.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── tsconfig.json
│
└── backend/                   # Firebase Functions backend
    ├── functions/
    │    ├── index.ts
    │    ├── createUser.ts
    │    ├── getUsers.ts
    │    ├── updateUser.ts
    │    ├── deleteUser.ts
    │    └── lib/            # Compiled JS outputs
    ├── firebase.json
    ├── package.json
    └── tsconfig.json
```

---

## ⚙️ How to Run Locally

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd my-app
```

---

## 🛠 Backend Setup (Firebase Functions)

### Install Firebase CLI

Install globally if you don’t have it:

```bash
npm install -g firebase-tools
```

---

### Install Backend Dependencies

From the backend folder:

```bash
cd backend
npm install
```

---

### Build Backend Functions

Compile TypeScript to JS:

```bash
npm run build
```

---

### Start Firebase Emulators

Still inside `backend`:

```bash
firebase emulators:start
```

Emulator UI will be available at:

```
http://localhost:4000
```

Your backend APIs will run on:

```
http://localhost:5001/fullstack-crud-assignment/us-central1/
```

Example routes:

- GET `/apiGetUsers`
- POST `/apiCreateUser`
- PUT `/apiUpdateUser`
- DELETE `/apiDeleteUser`

---

## 💻 Frontend Setup (Next.js)

### Install Frontend Dependencies

From the frontend folder:

```bash
cd ../frontend
npm install
```

---

### Start Frontend Dev Server

```bash
npm run dev
```

Runs locally at:

```
http://localhost:3000
```

---

## ✅ Environment Config

Update the API base URL in:

```
frontend/pages/index.tsx
```

For local development:

```ts
const apiBase = "http://localhost:5001/fullstack-crud-assignment/us-central1";
```

---

## 📦 Project Dependencies

### Frontend Dependencies

```json
"dependencies": {
  "axios": "^1.6.0",
  "next": "^14.2.30",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "react-toastify": "^11.0.5"
},
"devDependencies": {
  "@types/node": "^24.0.10",
  "@types/react": "^19.1.8",
  "autoprefixer": "^10.4.21",
  "postcss": "^8.5.6",
  "tailwindcss": "^3.4.17",
  "typescript": "^5.0.0"
}
```

---

### Backend Dependencies

```json
"dependencies": {
  "firebase-admin": "^12.0.0",
  "firebase-functions": "^4.5.0"
},
"devDependencies": {
  "typescript": "^5.0.0"
}
```

---

## 🚀 Deployment

- To deploy backend functions, upgrade to Firebase Blaze Plan:
    ```
    firebase deploy --only functions
    ```

- For frontend deployment:
    - Vercel
    - Netlify
    - Or any Node.js hosting platform

---

## 📝 License

MIT or as per your assignment guidelines.
