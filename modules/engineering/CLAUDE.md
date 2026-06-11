# Core Engineering Standards

## Decluttering
The principle of intentionally removing noise to improve clarity and focus. Every line of code, every UI element, and every documentation block must justify its existence.

- **Interface Decluttering:** Hide complex actions behind "Expert" toggles or progressive disclosure. The primary view must show only what is essential for the current task.
- **Code Decluttering:** Remove dead code, redundant comments, and "just-in-case" logic immediately. Prefer explicit, readable flow over clever, compressed syntax.
- **Cognitive Load:** Minimize the number of things a human must hold in their head to understand a component or function.

## Conceptual Consistency & Recursive Familiarity
Interfaces must be architected so that the user's mental model scales effortlessly across the entire system.

- **Component Recursion:** Reuse interaction patterns (e.g., how a "Workbench" opens) identically across all modules.
- **Predictable Affordance:** Buttons, links, and status indicators must behave exactly the same way on every screen.
- **Spatial Logic:** If "Primary Actions" are at the bottom-right on Screen 1, they must be there on every subsequent screen.
- **The "Already Known" Test:** Before adding a new UI pattern, ask: "Can I solve this using a pattern the user already knows from other parts of the system?"

## Process Flow (Engineering Register)
Every interactive element must have a documented flow. Use the template from GEMINI.md but focus on technical contracts:
- **Trigger:** Event/Method name.
- **Input:** Types and schemas.
- **Steps:** State mutations and service calls.
- **Side Effects:** External API calls, events, or persistent logs.
