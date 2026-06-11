# AI-Process-Architecture: Modular Engineering Rules

**A structured framework for organizing work and managing cognitive load using AI agents.**

## 🧩 Core Logic: Strategy & Execution

Efficiency is achieved by separating high-level intent from surgical implementation:

- **Strategic Frame (Gemini):** Analysis, architectural mapping, and backlog planning. See [GEMINI.md](GEMINI.md).
- **Surgical Execution (Claude):** Coding, refactoring, and rigorous validation. See [CLAUDE.md](CLAUDE.md).

## 🏗️ Rule Modules

The framework provides a modular library of specifications categorized by role:

- **Core & Meta**: Communication protocols, cognitive discipline, and the architectural contract.
- **Engineering Foundations**: Stack-agnostic standards for security, data integrity, and quality assurance.
- **Infrastructure & Delivery**: Declarative patterns for orchestration and deployment.
- **Domain-Specific Stacks**: Surgical rules for backend, frontend, and mobile platforms.

## 🔄 Rule Synchronization

Distribute these rules across your projects using the automated engine.

### Quick Start

1. **Discover**: Scan your project to identify required modules:
   - **Linux/macOS**: `./bin/discover.sh /path/to/project`
   - **Windows**: `bin\discover.bat C:\path\to\project`

2. **Automate**: Enable background synchronization:
   - **Linux/macOS**: `./bin/setup.sh --install-cron`
   - **Windows**: `bin\setup.bat`

3. **Learn More**: See [Operational Guide](docs/OPERATIONS.md) for advanced flags and manual sync.

## 🛠️ Adoption Flow

1. **Initialize:** Clone this repo as your standard foundation.
2. **Configure:** Set local paths in `sync-config.json`.
3. **Sync:** Run the sync tool to update target projects.
4. **Enforce:** Add the generated rules to your AI agent's context.
