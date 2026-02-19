# ShopZone – E-Commerce SPA (React Router + Context API)

This document records how AI tools were used during the development of the ShopZone Single Page Application project.

## Project Understanding & Architecture Planning

**Prompt style used:**
> Explain how to build a multi-page E-Commerce frontend using React Router and Context API step by step.

**Purpose:**
- Understand how Single Page Applications (SPA) work
- Break project into Level 1 (Routing) and Level 2 (Global Cart)
- Decide clean folder structure (`pages`, `components`, `context`, `services`)
- Understand how real-world React apps manage navigation and shared state
- Plan development in logical phases instead of building everything at once

---

## Routing Setup & SPA Navigation (Level 1 – Phase 1)

**Prompt style used:**
> Explain how React Router works and how to structure routes properly in a Vite project.

**Purpose:**
- Understand `BrowserRouter` and why it must wrap the entire app
- Learn the difference between `<a>` and `<Link>`
- Configure multiple routes: `/`, `/shop`, `/product/:id`, `/cart`, `/contact`
- Ensure navigation works without page reload
- Structure `Navbar` outside `Routes` for persistent layout

---

## API Integration & Data Fetching (Level 1 – Phase 2)

**Prompt style used:**
> Show how to fetch products from an API and structure the logic cleanly in React.

**Purpose:**
- Fetch products from [https://dummyjson.com/products](https://dummyjson.com/products)
- Use `async`/`await` with `useEffect`
- Separate API logic into a `services/api.js` file
- Avoid mixing business logic with UI code
- Handle loading state before data renders

---

## Dynamic Routing with useParams (Level 1 – Phase 3)

**Prompt style used:**
> Explain how dynamic routing works in React Router using `/product/:id` and `useParams`.

**Purpose:**
- Understand route parameters and dynamic URLs
- Fetch single product using the ID from the URL
- Prevent infinite re-renders using dependency arrays
- Handle direct URL access (e.g., typing `/product/5` manually)
- Implement conditional rendering for loading state

---

## Global State Management with Context API (Level 2 – Phase 1)

**Prompt style used:**
> Explain how to avoid prop drilling using Context API in a shopping cart application.

**Purpose:**
- Understand why prop drilling is problematic
- Create `CartContext` and `CartProvider`
- Wrap entire application with global state
- Manage `cartItems` using `useState`
- Structure provider value cleanly

---

## Cart Logic & Add to Cart Functionality (Level 2 – Phase 2)

**Prompt style used:**
> Show how to implement add-to-cart logic that increases quantity instead of duplicating items.

**Purpose:**
- Detect existing products in cart
- Increase quantity if item already exists
- Add new item if not present
- Maintain clean and predictable state updates
- Update `Navbar` badge instantly using `reduce()`

---

## Cart Page & Total Calculation (Level 2 – Phase 3)

**Prompt style used:**
> Explain how to calculate total price dynamically in a cart using reduce.

**Purpose:**
- Map through cart items
- Calculate subtotal per item
- Compute grand total using `reduce()`
- Implement remove item functionality
- Display empty cart message conditionally

---

## UI & Tailwind Design Decisions

**Prompt style used:**
> Suggest how to structure a clean, responsive e-commerce layout using Tailwind CSS.

**Purpose:**
- Design responsive grid layouts
- Improve homepage with hero section and CTA
- Add professional Contact page with phone & email links
- Maintain consistent spacing and typography
- Keep UI minimal but production-ready

---

## Git Workflow & Phase-Based Development

**Prompt style used:**
> How should I structure my commits professionally for internship review?

**Purpose:**
- Divide Level 1 and Level 2 into logical phases
- Maintain clean Git commit history
- Avoid pushing everything in a single commit
- Mimic real-world sprint development
- Demonstrate structured thinking

---

## Debugging & Error Resolution

**Prompt style used:**
> Tailwind CLI is not working with `npx tailwindcss init -p`. Explain why and how to fix it.

**Issue Encountered:**
- `npm error could not determine executable to run`

**Purpose:**
- Understand version compatibility issues (Tailwind v4 vs v3)
- Identify CLI execution problems in Windows/Git Bash
- Downgrade to stable Tailwind v3
- Learn how dependency versions affect project setup

**Outcome:**
- Identified compatibility issue
- Installed Tailwind v3
- Successfully initialized configuration files
- Resolved environment-related CLI error

---

## 🧠 Overall Reflection

Using AI as a structured learning assistant helped me:
- Understand SPA architecture deeply
- Learn dynamic routing instead of copying code
- Implement real-world cart logic using Context API
- Structure code professionally
- Debug environment and dependency issues confidently
- Think in phases and architecture, not just features

**✅ Final Note**
AI tools were used to understand concepts, debug issues, and refine architecture decisions. All final implementation logic was written after reasoning and testing to ensure genuine understanding and professional development practice.
