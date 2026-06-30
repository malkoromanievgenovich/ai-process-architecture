# Human-First Canon

Набір правил про те, як робити програми, де **головна завжди людина**.

Ідея проста: **людина думає і вирішує, а програма чи ШІ — лише інструмент**. Він допомагає, але сам по собі нічого не робить.

*(English below)*

## Три головні правила
* **Людина керує.** ШІ пропонує варіанти й виконує тільки підтверджені команди. Без самодіяльності.
* **Без заборон.** Система може показати ризики — як дзеркало, — але вибір завжди за вами. Забороняти вона не має права.
* **Зробив — і тихо.** Код виконує своє і затихає. Без фонового шуму й зайвих сповіщень.

## Із чого складається канон
Набір `.md`-файлів під різні задачі.

**Діють завжди:**
* [PRINCIPLES.md](PRINCIPLES.md) — філософія та базові правила.
* [CLAUDE.md](CLAUDE.md) — як ми пишемо код.

**Читати за потреби:**
* [WRITING.md](WRITING.md) — тексти
* [DESIGN.md](DESIGN.md) — дизайн і UI/UX
* [STACKS.md](STACKS.md) — код під різні мови та фреймворки
* [DATABASE.md](DATABASE.md) — бази даних
* [DEVOPS.md](DEVOPS.md) — деплой та інфраструктура
* [TESTING.md](TESTING.md) — тестування
* [SECURITY.md](SECURITY.md) — безпека
* [ANALYSIS.md](ANALYSIS.md) — вимоги та аналітика
* [AGILE.md](AGILE.md) — організація роботи

Працюєте через Gemini? Почніть із [GEMINI.md](GEMINI.md) — він веде до тих самих `PRINCIPLES.md`.

## Як користуватися
Підключіть правила до своїх проєктів, щоб агенти знали, як ви працюєте.

1. Редагуйте правила **тільки тут**, у цьому репозиторії.
2. Додайте проєкти в `sync-config.json` (приклад — у `sync-config.example.json`).
3. Розкидайте по проєктах: `node scripts/sync.js`
4. Перевірте, що все ок: `node scripts/validate.js`

Синхронізуйте вручну і лише коли щось змінили — без фонових скриптів.

---

# Human-First Canon (English)

A set of rules for building software where **the human stays in charge**.

The idea is simple: **the human thinks and decides, while the software or AI is just a tool** — it helps, but never acts on its own.

## Three core rules
* **Human in control.** The AI offers options and runs only approved commands. No autonomous moves.
* **No blocking.** The system can show risks — like a mirror — but the choice is always yours. It may not forbid anything.
* **Do the job, then go quiet.** Code does its work and falls silent. No background noise, no needless notifications.

## What the canon is made of
A set of `.md` files for different tasks.

**Always active:**
* [PRINCIPLES.md](PRINCIPLES.md) — philosophy and core rules.
* [CLAUDE.md](CLAUDE.md) — how we write code.

**Read when needed:**
* [WRITING.md](WRITING.md) — text and copy
* [DESIGN.md](DESIGN.md) — design and UI/UX
* [STACKS.md](STACKS.md) — code for different languages and frameworks
* [DATABASE.md](DATABASE.md) — databases
* [DEVOPS.md](DEVOPS.md) — deployment and infrastructure
* [TESTING.md](TESTING.md) — testing
* [SECURITY.md](SECURITY.md) — security
* [ANALYSIS.md](ANALYSIS.md) — requirements and analysis
* [AGILE.md](AGILE.md) — workflow

Using Gemini? Start with [GEMINI.md](GEMINI.md) — it points to the same `PRINCIPLES.md`.

## How to use
Sync the rules into your projects so your agents know how you work.

1. Edit the rules **here only**, in this repository.
2. Add your projects to `sync-config.json` (see `sync-config.example.json`).
3. Sync to projects: `node scripts/sync.js`
4. Check everything: `node scripts/validate.js`

Sync manually, and only when something changed — no background scripts.
