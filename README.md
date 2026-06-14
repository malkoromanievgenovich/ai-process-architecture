# Process Architecture: The Source of Divine Intent

**The global source of Ethics, Rules, and Patterns for digital manifestation.**

## 🧩 The Divine Intent: Pattern & Law

This repository represents the **Divine Intent**—the source of pure ethics, engineering laws, and architectural patterns.

- **Strategic Frame (The Bridge):** Guidelines for translating Intent into Strategy. See [GEMINI.md](GEMINI.md).
- **Surgical Execution (The Pattern):** The standards of structural integrity. See [CLAUDE.md](CLAUDE.md).

## 🏗️ The Ethical Corpus

The framework provides a modular library of laws categorized by their role in the universal order:

- **Core & Meta**: Communication protocols, cognitive discipline, and the ethical contract.
- **Engineering Foundations**: Stack-agnostic laws for security, integrity, and quality.
- **Infrastructure & Delivery**: Declarative patterns for alignment and leveling of space.
- **Domain-Specific Stacks**: Surgical patterns for backend, frontend, and mobile platforms.

## 🛠️ Usage

This framework acts as the **Global Source of Truth**. Rules are managed here and synchronized to target projects.

### 1. Link a New Project
Create `sync-config.json` in the root (see `sync-config.example.json`):
```json
{
  "projects": [
    {
      "name": "your-project",
      "path": "/absolute/path/to/project",
      "autodetect": true
    }
  ]
}
```

### 2. Synchronize
Run the sync script to distribute the Law:
```bash
node scripts/sync.js
```
The script recursively scans your project, detects technologies (Next.js, Spring Boot, Docker, etc.), and injects relevant modules into `GEMINI.md` and `CLAUDE.md`.

### 3. Maintain Integrity
- **Never hand-edit** rule files in target projects.
- **Update the Law** in the `modules/` directory of this repository.
- **Sync** to propagate changes across the entire ecosystem.

---
P.S. These rules are just an instrument. Responsibility for the impact of products born from these rules rests entirely with the individual using them.
