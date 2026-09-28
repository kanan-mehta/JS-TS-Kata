# JavaScript & TypeScript Kata

A collection of JavaScript and TypeScript katas focused on strengthening core language fundamentals, problem-solving, algorithms, and practical testing.

This project is built as an interactive showcase where each implemented kata documents the **problem, examples, constraints, approach, solution, and tests**.

## 🚀 Live Demo

[View the Kata Playground](YOUR_VERCEL_URL)

## 📌 About

This project is part of my frontend engineering practice and portfolio work.

The goal is not to build another coding challenge platform. Instead, it is a place to document how I approach common JavaScript and TypeScript problems and demonstrate the reasoning behind each implementation.

The project focuses on:

* Strong JavaScript fundamentals
* Practical TypeScript usage
* Problem-solving and algorithmic thinking
* Clean and readable implementations
* Edge-case handling
* Unit testing
* Modern frontend tooling
* Documenting the reasoning behind solutions

## 🧩 Kata Structure

Each implemented kata can include:

* **Problem** — What needs to be solved
* **Examples** — Sample inputs and expected outputs
* **Constraints** — Important limitations and requirements
* **Notes** — Additional observations or considerations
* **My Approach** — The reasoning behind the solution
* **My Solution** — The TypeScript implementation
* **Tests** — Test cases covering expected behaviour and edge cases

The kata catalogue contains both **planned** and **implemented** katas.

Implemented katas can be opened from the catalogue and include their solution and supporting documentation. Planned katas remain visible so the overall learning roadmap is clear, but their detail pages are not yet available.

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* React Router
* Vitest
* CSS

## 📚 Topics

The collection covers a range of JavaScript and TypeScript concepts, including:

### JavaScript Fundamentals

* Arrays
* Strings
* Objects
* Functions
* Higher-order functions
* Closures
* Scope
* Recursion
* Error handling

### Data Structures & Algorithms

* Array manipulation
* Searching
* Sorting
* Hash maps
* Trees
* Algorithms
* Time and space complexity
* Problem-solving patterns

### Functional Programming

* `map`
* `filter`
* `reduce`
* Composition
* Immutability
* Higher-order functions

### Browser & Async JavaScript

* Promises
* Async/await
* Debouncing
* Throttling
* Browser APIs
* Event handling

### TypeScript

* Types
* Interfaces
* Generics
* Union and intersection types
* Type narrowing
* Utility types
* Function types

### Testing

* Unit testing
* Edge cases
* Expected behaviour
* Test-driven thinking
* Vitest

## 📂 Project Structure

```text
src/
├── components/
│
├── data/
│   ├── categories.ts
│   └── katas.ts
│
├── katas/
│   ├── valid-palindrome/
│   │   ├── solution.ts
│   │   └── tests.ts
│   │
│   ├── array-map/
│   │   ├── solution.ts
│   │   └── tests.ts
│   │
│   └── ...
│
├── pages/
│   ├── HomePage/
│   ├── KatasListPage/
│   └── KatasDetailPage/
│
└── ...
```

Each kata keeps its implementation and tests close together, while the catalogue metadata is maintained separately in the `data` directory.

This keeps the **content/navigation layer** separate from the **actual kata implementations**.

## 🧪 Testing

Tests are written using [Vitest](https://vitest.dev/).

Run the test suite:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## 💻 Getting Started

### Clone the repository

```bash
git clone https://github.com/kanan-mehta/js-ts-kata.git
```

### Navigate to the project

```bash
cd js-ts-kata
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 📈 Progress

The kata collection contains both planned and implemented problems.

| Status      | Meaning                                                             |
| ----------- | ------------------------------------------------------------------- |
| Planned     | The kata is part of the collection but has not been implemented yet |
| Implemented | The problem, solution, explanation, and tests have been added       |

The catalogue is intentionally kept visible even when a kata has not yet been implemented. This makes the project function as both a **learning roadmap** and a record of completed work.

## 🎯 Goals

This is an ongoing learning and portfolio project focused on:

1. Strengthening JavaScript fundamentals
2. Writing idiomatic TypeScript
3. Practising problem-solving techniques
4. Thinking about edge cases before implementation
5. Writing meaningful unit tests
6. Documenting the reasoning behind solutions
7. Improving algorithmic thinking
8. Building reusable and maintainable code

## 👩‍💻 Author

**Kanan Mehta**

Senior Frontend & Full-Stack Engineer

React · Next.js · TypeScript · Node.js

[GitHub](https://github.com/kanan-mehta) · [LinkedIn](https://www.linkedin.com/in/kanan-mehta-93770157/)
