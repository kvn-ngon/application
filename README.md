# Coaching Program Application Form

A Typeform-style multi-step application form, self-hosted for free on GitHub Pages.

---

## 📁 Project Structure

```
coaching-form/
├── index.html          ← main HTML (don't edit for content)
├── css/
│   └── style.css       ← all styling
├── js/
│   ├── config.js       ← ✏️  EDIT THIS to change questions & settings
│   └── form.js         ← form logic (no need to touch)
├── assets/
│   └── background.jpg  ← drop your background image here
└── README.md
```

---

## 🚀 Setup Guide

### Step 1 — Add your background image
1. Put your image in the `/assets/` folder
2. In `js/config.js`, set: `backgroundImage: "assets/your-image.jpg"`

### Step 2 — Set up Formspree (free email delivery)
1. Go to [formspree.io](https://formspree.io) and sign up for free
2. Click **"New Form"**, name it (e.g. "Coaching Applications")
3. Set the email to **reachmrkvn@gmail.com**
4. Copy your **Form ID** (looks like `xabcdefg`)
5. In `js/config.js`, update: `formspreeEndpoint: "https://formspree.io/f/xabcdefg"`
6. On first submission, Formspree will send you a confirmation email — click it to activate

> **Free tier**: 50 submissions/month. Upgrade ($10/mo) for unlimited + file attachments.

### Step 3 — Edit your questions
Open `js/config.js` — everything is documented inline. You can:
- Change question text, hints, placeholder text
- Add/remove pages
- Change question types (`short`, `long`, `choice`, `checklist`)
- Reorder pages

### Step 4 — Deploy to GitHub Pages (free)
1. Create a new GitHub repository (e.g. `coaching-form`)
2. Upload all files, maintaining the folder structure
3. Go to **Settings → Pages → Source: main branch → / (root)**
4. Your form is live at: `https://yourusername.github.io/coaching-form/`

---

## ✏️ Editing Questions

All questions live in `js/config.js` in the `pages` array.

### Question types

**Short answer** — single line text
```js
{
  id: "full_name",
  type: "short",
  question: "What's your full name?",
  hint: "We'll use this in our correspondence.",
  placeholder: "Jane Smith",
  required: true,
}
```

**Long answer** — multi-line textarea
```js
{
  id: "story",
  type: "long",
  question: "Tell me your story.",
  hint: "Be as open as you like.",
  placeholder: "I started my journey when…",
  required: true,
}
```

**Multiple choice** — pick one (auto-advances on selection)
```js
{
  id: "goal",
  type: "choice",
  question: "What's your biggest goal?",
  hint: "Pick the one that fits best.",
  required: true,
  options: ["Option A", "Option B", "Option C"],
}
```

**Checklist** — pick many
```js
{
  id: "challenges",
  type: "checklist",
  question: "What challenges do you face?",
  hint: "Select all that apply.",
  required: true,
  options: ["Challenge 1", "Challenge 2", "Challenge 3"],
}
```

**Intro page** — no input, just a welcome message + Begin button
```js
{
  id: "intro",
  type: "intro",
  question: "Welcome to my coaching program.",
  hint: "This application takes about 5 minutes.",
}
```

---

## 📧 Response Format

Each submission arrives in your inbox like this:

| Question | Answer |
|---|---|
| What's your full name? | Jane Smith |
| What's the best email to reach you? | jane@example.com |
| What's your primary goal right now? | Grow my business revenue |
| What challenges are you currently facing? | Procrastination, Burnout |
| … | … |

---

## 🎨 Customising the Look

Edit `css/style.css`. The key CSS variables at the top control the colour palette:

```css
:root {
  --accent:  #c8a96e;   /* gold highlight colour */
  --accent2: #e8c98a;   /* lighter gold for hover */
  --dark:    #1a1714;   /* background fallback */
  --cream:   #f5f0e8;   /* light text */
}
```

Fonts are loaded from Google Fonts in `index.html`. Change the `@import` URL and update `--font-display` / `--font-body` in the CSS.

---

## 🔒 No Server Required

This form is entirely static — no Node, Go, or PHP server needed. GitHub Pages hosts static files for free. Formspree handles the email delivery securely via their servers.
