# AWS Amplify + React Router Routing Issue (nhakhoamyduc.vn)

## Problem Summary

The website is a React application deployed on AWS Amplify Hosting.

Two conflicting behaviors were observed:

### Scenario 1

Using:

```json
[
  {
    "source": "/manifest.json",
    "status": "200",
    "target": "/manifest.json"
  },
  {
    "source": "/favicon.ico",
    "status": "200",
    "target": "/favicon.ico"
  },
  {
    "source": "/static/*",
    "status": "200",
    "target": "/static/*"
  },
  {
    "source": "/*",
    "status": "200",
    "target": "/index.html"
  }
]
```

Result:

* ✅ Root website works
* ✅ www domain works
* ❌ Direct access to React routes fails

Examples:

```txt
https://nhakhoamyduc.vn/pricing
https://nhakhoamyduc.vn/contact
https://nhakhoamyduc.vn/services
```

Refreshing or directly opening those URLs returns errors or 404 pages.

---

### Scenario 2

Using:

```json
[
  {
    "source": "/manifest.json",
    "status": "200",
    "target": "/manifest.json"
  },
  {
    "source": "/favicon.ico",
    "status": "200",
    "target": "/favicon.ico"
  },
  {
    "source": "/static/*",
    "status": "200",
    "target": "/static/*"
  },
  {
    "source": "/<*>",
    "status": "200",
    "target": "/index.html"
  }
]
```

Result:

* ✅ Direct access to React routes works
* ✅ React Router functions correctly
* ❌ www version stops working
* ❌ Rebuilding the site causes white screen
* ❌ Browser reports:

```txt
Unexpected token '<'
```

or

```txt
Failed to load main.6b134b2f.js
```

---

# Root Cause Analysis

There were actually two separate issues.

---

## Issue #1 — React Router Needs a SPA Fallback

When a user visits:

```txt
https://nhakhoamyduc.vn/pricing
```

the browser sends:

```http
GET /pricing
```

Amplify Hosting is a static file host.

It tries to locate:

```txt
/pricing
```

or

```txt
/pricing/index.html
```

Neither file exists.

Result:

```txt
404 Not Found
```

However React Router expects:

```txt
/pricing
```

to be handled by the React application.

To make this work Amplify must serve:

```txt
/index.html
```

instead.

React Router then examines:

```js
window.location.pathname
```

and renders:

```jsx
<Pricing />
```

This process is called:

```txt
SPA (Single Page Application) Fallback Routing
```

---

## Issue #2 — Static Assets Were Being Rewritten

The rule:

```json
{
  "source": "/<*>",
  "target": "/index.html"
}
```

is extremely broad.

It matches:

```txt
/pricing
/contact
/about
```

which is good.

But it can also match:

```txt
/static/js/main.6b134b2f.js
/static/css/main.css
```

which is bad.

When that happens:

```txt
GET /static/js/main.6b134b2f.js
```

becomes:

```txt
/index.html
```

Amplify returns:

```html
<!doctype html>
<html>
...
```

instead of JavaScript.

The browser then tries to execute:

```html
<!doctype html>
```

as JavaScript.

The first character is:

```txt
<
```

which is invalid JavaScript syntax.

Result:

```txt
Uncaught SyntaxError: Unexpected token '<'
```

This is the classic symptom of:

```txt
HTML returned where JS was expected
```

---

# Why Next.js Did Not Have This Problem

With Create React App (CRA):

```txt
/pricing
```

is not a real file.

The build output only contains:

```txt
index.html
static/js/*
static/css/*
```

Therefore Amplify must be taught:

```txt
Any route → serve index.html
```

and React Router handles routing.

---

With Next.js:

```txt
/pricing
/about
/contact
```

are known routes.

Amplify's Next.js integration understands:

```txt
This is a Next.js page
```

and serves it correctly.

No manual SPA fallback is usually required.

---

# Final Working Solution

The final solution separates:

1. Domain redirection
2. SPA fallback routing

Current working rule:

```json
[
  {
    "source": "https://www.nhakhoamyduc.vn/<*>",
    "status": "301",
    "target": "https://nhakhoamyduc.vn/<*>"
  },
  {
    "source": "https://nhakhoamyduc.vn/<*>",
    "status": "200",
    "target": "/index.html"
  },
  {
    "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|jpeg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>",
    "status": "200",
    "target": "/index.html"
  }
]
```

---

# Why This Works

## Rule 1

```json
{
  "source": "https://www.nhakhoamyduc.vn/<*>",
  "status": "301",
  "target": "https://nhakhoamyduc.vn/<*>"
}
```

Redirects:

```txt
https://www.nhakhoamyduc.vn/pricing
```

to:

```txt
https://nhakhoamyduc.vn/pricing
```

This ensures only one canonical domain is used.

Benefits:

* Avoid duplicate content
* Better SEO
* Consistent routing
* Prevents www-specific issues

---

## Rule 2

```json
{
  "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|jpeg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>",
  "status": "200",
  "target": "/index.html"
}
```

This regex says:

```txt
Rewrite only requests that are not static files.
```

Examples:

### Rewritten

```txt
/pricing
/about
/contact
/services
/blog/article
```

become:

```txt
/index.html
```

allowing React Router to handle them.

---

### NOT rewritten

```txt
/static/js/main.js
/static/css/main.css
/favicon.ico
/manifest.json
/logo.png
```

These files are served normally.

Therefore:

```txt
JavaScript loads correctly
CSS loads correctly
Images load correctly
```

and the browser never receives HTML when expecting JS.

---

# Request Flow After Fix

User visits:

```txt
https://www.nhakhoamyduc.vn/pricing
```

Step 1:

```txt
www
↓
301 redirect
↓
https://nhakhoamyduc.vn/pricing
```

Step 2:

Amplify receives:

```txt
/pricing
```

Regex matches.

Amplify serves:

```txt
/index.html
```

Step 3:

Browser loads:

```txt
/static/js/main.js
/static/css/main.css
```

These are NOT rewritten.

Step 4:

React starts.

React Router sees:

```txt
window.location.pathname = "/pricing"
```

and renders:

```jsx
<Pricing />
```

Result:

```txt
URL remains:
/pricing

Pricing page renders successfully.
```

---

# Lessons Learned

### Bad SPA Rule

```json
{
  "source": "/<*>",
  "target": "/index.html"
}
```

Too broad.

May accidentally rewrite asset files.

---

### Good SPA Rule

```json
{
  "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|jpeg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>",
  "target": "/index.html"
}
```

Only rewrites application routes.

---

### React SPA Principle

```txt
All routes
→ index.html
→ React loads
→ React Router decides page
```

---

### Next.js Principle

```txt
Routes exist at build/server level
→ Amplify understands routes directly
→ No SPA fallback needed
```

---

# Final Result

After applying the final rules:

* ✅ https://nhakhoamyduc.vn works
* ✅ https://www.nhakhoamyduc.vn works
* ✅ Direct access to /pricing works
* ✅ Browser refresh on any route works
* ✅ Static JS/CSS files load correctly
* ✅ No more "Unexpected token '<'" errors
* ✅ SEO-friendly canonical domain
* ✅ React Router functions correctly
