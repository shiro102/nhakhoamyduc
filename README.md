# Nha Khoa My Duc

Website and staff admin for **Nha Khoa My Duc** (My Duc Dental Clinic). The public site is a React app; clinic records and login are served by an Express API backed by PostgreSQL.

- Production site: [https://nhakhoamyduc.vn](https://nhakhoamyduc.vn)
- API (Render): [https://nhakhoamyduc-api.onrender.com](https://nhakhoamyduc-api.onrender.com)
- Repository: [github.com/shiro102/nhakhoamyduc](https://github.com/shiro102/nhakhoamyduc)

## Architecture

```
Browser (Amplify / localhost)
        │  fetch(..., { credentials: "include" })
        ▼
Express API  (src/server.js)     cookies: userId (httpOnly)
        │
        ▼
Prisma Client  (lib/prisma.js)
        │
        ▼
PostgreSQL     (DATABASE_URL)
```

Frontend and API are **separate origins** in production (Amplify vs Render). CORS and `SameSite=None` cookies are required so login works across those hosts.

| Layer | Stack |
| --- | --- |
| Frontend | React 19, React Router 6, Tailwind CSS, i18next (Vietnamese / English), dark mode |
| Backend | Express 5, cookie-parser, cors, express-rate-limit, bcryptjs |
| Database | PostgreSQL via Prisma 6 |
| Frontend hosting | AWS Amplify |
| API hosting | Render (`PORT` from the platform, default `5000` locally) |

## Features

**Public site**

- Home, pricing, about, contact (Google Maps embed)
- Vietnamese (default) and English
- Light / dark theme

**Staff admin** (`/admin`, login required)

- Client list (latest 100 by default, or all)
- Search by name, email, phone, address, document, client ID, birth year
- Create and update client records
- Excel-oriented workflow in the table UI (`xlsx`)

## Project layout

```
src/
  App.jsx, routes.jsx, index.jsx
  config/api.js          # API base URL helper
  server.js              # Express API
  components/
    auth/                # Login, ProtectedRoute
    admin/               # Staff dashboard
    table/               # Client table CRUD
    home/                # Public pages
    layout/              # Header, footer, layout
  context/ThemeContext.jsx
  data/translateData.js  # i18n strings
lib/prisma.js            # Shared Prisma client
prisma/
  schema.prisma
  migrations/
  import-users.js        # One-off Excel → Client import
```

## Frontend routes

| Path | Access | Page |
| --- | --- | --- |
| `/` | Public | Home |
| `/pricing` | Public | Services / pricing |
| `/about` | Public | About |
| `/contact` | Public | Contact + map |
| `/login` | Public | Staff login / register |
| `/admin` | Cookie session | Client admin |

Unauthenticated visits to `/admin` redirect to `/login`.

The frontend talks to the API through `src/config/api.js`:

```js
const API_BASE = process.env.REACT_APP_API_URL || "";
```

If `REACT_APP_API_URL` is empty, requests go to the same origin (useful when a reverse proxy forwards `/api` to Express). In production set it to the Render API URL, for example `https://nhakhoamyduc-api.onrender.com`.

## Backend

Start with:

```bash
yarn server
# or: npm run server
```

That runs `node src/server.js`. The process listens on `process.env.PORT` or **5000**.

## Local development

You need **Node.js**, **Yarn** (or npm), and a **PostgreSQL** database.

```bash
yarn install
# or: npm install

# Database
npx prisma generate
npx prisma migrate deploy   # or: prisma migrate dev

# Terminal 1 — API
yarn server                 # http://localhost:5000

# Terminal 2 — React (Create React App)
yarn start                  # http://localhost:3000
```

Create a `.env` in the project root (or export vars in the shell):

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE"
REACT_APP_API_URL="http://localhost:5000"
REACT_APP_GOOGLE_MAP_API_KEY="your-maps-key"
```

CRA only exposes variables prefixed with `REACT_APP_`. Restart `yarn start` after changing them.

`yarn build` / `npm run build` writes a production frontend to `build/`.

## Deployment

**Frontend (AWS Amplify)**

- Production: `https://nhakhoamyduc.vn` (and `www`)
- Other Amplify apps/branches exist for previews and backups (for example `nhakhoamyduc-backup.d1oa3aicm14zeg.amplifyapp.com`)
- Opening a PR against the `deployment` branch can spin up an Amplify PR preview (see `.github/workflows/amplify-pr-preview-open.yml`). Closing the PR tears it down.

Set Amplify env `REACT_APP_API_URL` to the Render API origin and `REACT_APP_GOOGLE_MAP_API_KEY` for the contact map.

**Backend (Render)**

- Service: Node, start command `node src/server.js` (same as `yarn server`)
- Example URL: `https://nhakhoamyduc-api.onrender.com`
- Set `DATABASE_URL`. `PORT` is provided by Render.
- After changing CORS in `src/server.js`, **redeploy the API**. A frontend-only deploy does not update allowed origins.

If a new Amplify URL is blocked in the browser, add that origin (no trailing slash) to `allowedOrigins` and deploy the API again.

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` | CRA dev server (port 3000) |
| `yarn build` | Production frontend build |
| `yarn test` | CRA tests |
| `yarn server` | Express API |
| `npx prisma studio` | Browse the database |
| `npx prisma migrate dev` | Create/apply migrations locally |

## License

MIT. See `package.json`.
