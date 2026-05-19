// ============================================================
//  COACHING FORM — CONFIGURATION FILE
//  Edit this file to change questions, branding, and settings.
// ============================================================

const CONFIG = {

  // ── BRANDING ──────────────────────────────────────────────
  title: "Coaching Program",
  subtitle: "Application",

  // Background image path (relative). Use "" for no background.
  // Drop your image into the /assets/ folder and reference it here.
  backgroundImage: "assets/background.jpg",

  // Formspree endpoint — replace XXXXXXXX with your Formspree form ID.
  // Sign up free at https://formspree.io → New Form → copy the ID.
  // Your responses will be emailed to reachmrkvn@gmail.com once set up.
  formspreeEndpoint: "https://formspree.io/f/xdajklpg",

  // ── PAGES / QUESTIONS ─────────────────────────────────────
  // Each object = one page (one question per page).
  //
  // Supported types:
  //   "short"    — single-line text input
  //   "long"     — multi-line textarea
  //   "choice"   — multiple-choice (pick ONE), pass options: []
  //   "checklist"— checklist (pick MANY), pass options: []
  //
  // Fields:
  //   id       : unique key used in the emailed data (no spaces)
  //   type     : one of the types above
  //   question : the big heading text
  //   hint     : smaller helper text below the question (optional)
  //   required : true/false
  //   options  : array of strings — required for "choice" and "checklist"
  //   placeholder: hint text inside input — for "short" and "long"
  // ────────────────────────────────────────────────────────────

  pages: [

    // ── PAGE 1: Welcome / Intro (no input — type "intro") ───
    {
      id: "intro",
      type: "intro",
      question: "Let's start your journey.",
      hint: "This application takes about 5 minutes. Be honest — there are no wrong answers.",
    },

    // ── PAGE 2: Short answer ──────────────────────────────
    {
      id: "full_name",
      type: "short",
      question: "What's your full name?",
      hint: "",
      placeholder: "Jane Smith",
      required: true,
    },

    // ── PAGE 3: Short answer ──────────────────────────────
    {
      id: "email",
      type: "short",
      question: "What's the best email to reach you?",
      hint: "I'll use this to send you next steps.",
      placeholder: "jane@example.com",
      required: true,
    },

    // ── PAGE 4: Choice (pick one) ─────────────────────────
    {
      id: "coaching_goal",
      type: "choice",
      question: "What's your primary goal right now?",
      hint: "Choose the one that resonates most.",
      required: true,
      options: [
        "Grow my business revenue",
        "Find clarity in my career direction",
        "Build confidence & mindset",
        "Improve work-life balance",
        "Launch something new",
        "Other",
      ],
    },

    // ── PAGE 5: Checklist (pick many) ─────────────────────
    {
      id: "challenges",
      type: "checklist",
      question: "What challenges are you currently facing?",
      hint: "Select all that apply.",
      required: true,
      options: [
        "Lack of clarity on next steps",
        "Procrastination & self-doubt",
        "Not enough accountability",
        "Burnout or overwhelm",
        "Difficulty prioritising",
        "Imposter syndrome",
        "Struggling to monetise my skills",
      ],
    },

    // ── PAGE 6: Long answer ───────────────────────────────
    {
      id: "current_situation",
      type: "long",
      question: "Describe where you are right now.",
      hint: "What does your day-to-day look like? What's working, and what isn't?",
      placeholder: "Write as much or as little as you'd like…",
      required: true,
    },

    // ── PAGE 7: Long answer ───────────────────────────────
    {
      id: "desired_outcome",
      type: "long",
      question: "What would success look like in 6 months?",
      hint: "Be specific. Paint me a picture of your ideal outcome.",
      placeholder: "In 6 months I want to…",
      required: true,
    },

    // ── PAGE 8: Choice (pick one) ─────────────────────────
    {
      id: "investment_readiness",
      type: "choice",
      question: "Are you ready to invest in yourself?",
      hint: "Coaching is a partnership — I want to make sure the timing is right for you.",
      required: true,
      options: [
        "Yes — I'm ready to commit now",
        "I need to know more about pricing first",
        "I'm exploring options for the next 1–3 months",
        "Not quite ready yet, but want to stay in touch",
      ],
    },

    // ── PAGE 9: Short answer ──────────────────────────────
    {
      id: "referral",
      type: "short",
      question: "How did you hear about me?",
      hint: "",
      placeholder: "Instagram, referral, Google…",
      required: false,
    },

    // ── Add more pages below following the same pattern ───

  ],
};
