# QuizForge Frontend

Frontend for **QuizForge**, an online quiz platform (see project synopsis).
Restructured into a standard React/Vite layout so a MERN backend can be
plugged in without touching page or component code.

## Included
- Student dashboard, quiz library with search/filter, timed quiz flow,
  automatic scoring, results + answer review, leaderboard, analytics,
  bookmarks
- Admin overview and quiz management UI
- Responsive layout for desktop/mobile
- Runs fully on mock data today — **no backend required to develop the UI**

## Project structure

```
src/
  main.jsx              entry point
  App.jsx               top-level layout + page routing (student/admin state)
  index.css             all styles (unchanged from the original design)

  api/                  <-- THE ONLY LAYER THAT TALKS TO THE BACKEND
    client.js            fetch wrapper, base URL, auth token, USE_MOCK_API flag
    auth.js               login / register / getCurrentUser / logout
    quizzes.js             getQuizzes / getQuestions / submitAttempt / createQuiz
    leaderboard.js          getLeaderboard / getMyRankSummary
    analytics.js             getStudentAnalytics / getAdminOverview

  data/                  mock data used ONLY while USE_MOCK_API is true
    mockQuizzes.js, mockQuestions.js, mockLeaderboard.js, mockAnalytics.js

  hooks/
    useQuizzes.js        loads + shares the quiz list across pages
    useAsync.js          generic "fetch on mount" hook for self-contained pages

  components/
    layout/              TopBar, Sidebar, StudentNav, AdminNav
    common/               Stat, QuizCard (reused across pages)
    quiz/                  QuizIntro, QuizRunner, Result, Review

  pages/                 one file per screen: Dashboard, QuizExplorer,
                         Leaderboard, Analytics, Bookmarks, AdminDashboard,
                         ManageQuizzes
```

## Run locally

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal. The app works
out of the box with mock data — nothing else to configure.

## Connecting the MERN backend

Every function your UI needs already exists in `src/api/*.js`, each with two
branches: a **mock** branch (used today) and a **real** branch (a plain
`fetch` call via `apiClient`). To switch to your real backend:

1. Copy `.env.example` to `.env` and set:
   ```
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_USE_MOCK_API=false
   ```
2. Build the matching Express routes (they map 1:1 to the calls already
   written in `src/api/`):
   - `POST /api/auth/login`, `POST /api/auth/register`, `GET /api/auth/me`
   - `GET /api/quizzes`, `GET /api/quizzes/:id`, `POST /api/quizzes`
   - `GET /api/quizzes/:id/questions`
   - `POST /api/quizzes/:id/attempts`
   - `GET /api/leaderboard`, `GET /api/leaderboard/me`
   - `GET /api/analytics/me`, `GET /api/analytics/admin`
3. That's it — no component or page needs to change. `client.js` already
   attaches the JWT (stored in `localStorage`) to every request once
   `setToken()` is called from `api/auth.js`.

Nothing in `pages/` or `components/` imports mock data or `fetch` directly —
they only call functions from `src/api/`, so the mock→real swap is isolated
to that one folder.

## Future MERN integration checklist
- Express/Node REST APIs (routes listed above)
- MongoDB/Mongoose models for User, Quiz, Question, Attempt
- JWT authentication (`api/auth.js` already expects a `token` in the response)
- bcrypt password hashing (backend-only, no frontend change needed)
- Cloudinary uploads (for quiz/question images, if added later)
- Chart.js/Recharts (optional upgrade for the bar/line placeholders in
  `pages/Analytics.jsx` and `pages/Dashboard.jsx`)
- Real student/admin roles and persistent quiz attempts
