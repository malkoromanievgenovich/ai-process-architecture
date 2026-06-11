# CLAUDE.md — General Engineering Standards

## Technical Discipline: Professional Standards for System Integrity

Engineering canons for maintaining system integrity in this repository. Stack-agnostic engineering principles.

## System Integrity Principle

A system is considered integral only when every part of it (code, data, documentation, tests) is in a state of mutual consistency.

1.  **Completeness of Execution:** A task is not considered finished if even one aspect (implementation, tests, i18n, migrations, flow descriptions, or versioning) is missing or not updated.
2.  **Contractual Stability:** Any change in one module must be accompanied by a check and (if necessary) an update of dependent modules to prevent contract breakage.
3.  **Alignment with Intent:** Code is merely a derivative of business logic. If the implementation deviates from the `Process Flow` described by Gemini, the system loses integrity. In case of conflict, the architectural description is updated first, followed by the code.
4.  **Environmental Safety of Changes:** It is forbidden to introduce changes that leave the system in a "hanging" intermediate state (e.g., new database fields without logic to handle them).

## Audible attention signal — example configuration

The user can be notified whenever Claude needs their attention. This can be achieved via **global hooks** (e.g., in `~/.claude/settings.json` using macOS `afplay` or similar tools on other OS), so it fires automatically:

- **Turn ends / task finished** → `Stop` hook plays a "success" sound.
- **Claude needs input** — a question, a decision, a permission prompt, or any blocker that halts progress → `Notification` hook plays an "attention" sound.

## Discuss first, execute on command — wait for the go-signal

The default mode for every exchange is **discussion**, not action. Analyze, propose, plan, weigh trade-offs, ask — but do **not** change anything until the operator gives an explicit go-signal. Treat execution as authorized only when the operator says so in the imperative — "зроби", "починай", "вперед", "го", "застосуй", "do it", "go", "ship it", or an equally explicit instruction to act.

## Work quietly — chat is for decisions and outcomes, not narration

Do the work through tools; keep the chat almost empty. The operator reads the diff and the results themselves, so play-by-play prose and "here's what I did" recaps are noise that taxes their attention, not signal. The default between and after actions is **silence**.

## Speak technically — precise identifiers over jargon

Communication uses precise identifiers. Use the exact names of files, functions, variables, and architectural components. No improvised jargon, "hallucinated" terminology, or vague descriptions.

## Boy Scout Rule — leave the campsite cleaner than you found it

Finishing a task, you are **obligated** to clean up after yourself the leftovers you created yourself or those that remained relevant as a result of your changes. Every change closes its own orphans in the same commit, so orphans never get a chance to compound.

## Finish to zero — don't hand back tails

A "tail" is any leftover handed back to the operator that Claude could have closed itself: a decision left unmade, a verification left unrun, a scope question left open, a follow-up phrased as "want me to…?". The default is the opposite — **decide and finish** — so the report ends in a *closed* state (an outcome), not a to-do list the operator now has to work through. A task that ships with a menu of leftovers isn't finished; it has only moved the unfinished part onto the person who delegated precisely so they wouldn't carry it.

**What this means in practice:**

- **Make the calls that are yours to make.** Anything reversible and inside the delegated task — which option of two obvious ones to take, whether a piece is in or out of scope, whether a tracked task is done, which version-bump level to apply — **decide it**, state the choice in one line with its reason, and move on. Don't surface it as a question. Reversing a wrong call is one cheap action; a parked decision is standing load on the operator until they answer.
- **Verify to the end.** "It compiles / type-checks / the command exited 0" is not "it works" — drive the actual flow and report what you observed. Never leave verification as an offer ("want me to check?"); run it, then report.
- **Close the scope, or rule it out explicitly.** If part of the task is genuinely out of scope, say so with the reason — a named, reasoned exclusion is closed; a dangling "by the way, this also exists" is a tail.
- **Name real boundaries as facts, not as remaining work.** Some things Claude genuinely cannot do — an action needing the operator's machine, credentials, money, physical presence, or an irreversible external approval. State these as cadence ("ready and merged; you trigger it when you want it"), not as "still left to do", which reads as incompleteness Claude is dodging.
- **Surface exactly one class of thing: a genuinely irreversible fork that is truly the operator's** — one that spends real money, is hard to undo, faces an outside party, or changes Claude's own authority. Everything else: close it yourself.

**The test before reporting:** *"Is there any decision or check here that I'm pushing onto the operator that I could have made or run myself?"* If yes — do it first, **then** report. The report names what was decided and what was verified, not what the operator must now go and resolve.

**Why a rule:** without it, Claude does 95% and hands over a list, and the operator's "this is delegated" silently becomes "now I review a pile of half-questions" — the exact load delegation was meant to remove. Pinning the close-out to *decide-and-finish* keeps "done" meaning done.

**Exceptions:** a genuinely irreversible, operator-owned fork (above); or the operator explicitly asked to be consulted on a specific call.

## Self-review pass before reporting work as done

Finished work is not "I wrote the code, I guess it compiles". Before saying "done", a second pass through your own diff is mandatory. Without it the executor offloads validation onto the user, who already took a step back to delegate.

## Verification Strategy: E2E First

Testing focuses on observable behavior and actual contracts. Ensure that a "green" build represents real functional correctness through end-to-end or integration tests that verify the system's external behavior.

## Audit loop — iterate until zero bugs

After the self-review pass and before reporting "done", run a focused audit of the changes I just made and **keep iterating until the audit returns zero findings**. The work is complete only when a clean pass finds nothing.

**Loop shape:**
1. **Run the audit** scoped to the diff I just produced.
2. **Triage every finding.** CRITICAL / HIGH / MEDIUM all get fixed in the same change.
3. **Re-run the same audit.** The new diff (the fixes themselves) needs the same audit to pass too.
4. **Repeat** until the audit returns zero findings.

**Why a rule:** fixing the first batch of bugs often surfaces new ones. One audit pass is not enough to guarantee safety and correctness under the project's full rule set.

## Git workflow — branch, push progress, ship via PR

All work goes through a feature branch and lands on `main` only through a pull request. `main` is never committed to directly.

## Task status — move the card as the work moves

Work is tracked in a **Task Tracker** (e.g., Linear, Jira, GitHub Issues), and the card's status must mirror reality.

## Work in an isolated worktree, never in the operator's checkout

Multi-step implementation work runs in its **own git worktree**, not in the operator's primary checkout.

## Don't fabricate third-party UI steps

Before emitting any specific menu path / button name / URL for a third-party UI, **look up the platform's current docs for that exact action** (WebFetch / WebSearch).

## Documentation — encapsulate by topic, no duplication

Project documentation files follow the same encapsulation discipline as code: **each file owns its topic**, other files only link to it with a one-line description.

## Security — PAUSED FOR MVP

Security rules and the full audit checklist are **intentionally disabled for the MVP**. They are kept within the standard `CLAUDE.md` flow but marked as paused. See the Security section for details.

## Decluttering — clarity through removal

Decluttering is the principle of intentionally removing anything that does not support the main goal, understanding, or user flow.

**Pre-fill by default:** If the system already possesses data required for a form (e.g., user profile, session context, or previous valid entries), the form MUST be pre-populated. Avoid forcing the user to re-enter information the system already knows to minimize friction and prevent input errors.

## Idempotency for any operation that can be retried

Side-effecting operations whose trigger can fire twice MUST be idempotent. Retries happen — network blips, a consumer crashing, webhook senders retrying.

## Per-project versioning — bump the number so the running build shows the fix

Each shippable project carries its own running semantic version, shown in small font in its own UI. The point is operational: looking at a deployed website, admin panel, or desktop app, you can tell at a glance whether that build already carries a given fix — without diffing commits or asking. The version is per-project, so each surface tells its own story; a fix shipped to admin doesn't silently imply the website got it too.

**One source of truth per project** — the single file the version lives in, and where its UI reads it:

- **website** → `modules/website/package.json`. Injected into the static export by `next.config.ts` (`env.NEXT_PUBLIC_APP_VERSION`), shown in the Footer.
- **admin** → `modules/admin/frontend/package.json`. Vite define exposes `__APP_VERSION__`, shown in the Sidebar.
- **notary / desktop** → `modules/notary/desktop/src-tauri/tauri.conf.json` (authoritative — it's both the desktop release version and what the CI /updates guard compares against). The notary SPA shows it in its Sidebar via Vite `__APP_VERSION__`, which reads `modules/notary/frontend/package.json` — a mirror the bump keeps in lockstep. The mirror exists because the SPA's Docker build context is only `modules/notary/frontend`, so it physically can't read `tauri.conf.json`; the bump writing both files is what prevents the two from drifting (the exact drift that motivated this rule: the desktop was releasing 0.1.14 while its UI showed 0.1.0).

**Bump it as part of the task.** During the self-review pass, before opening the PR, bump the version of every project the diff touches. Any change to a project's shippable files bumps at least its patch — touch two projects, bump both, independently.

You classify the bump:

- **major** — a breaking change to that project's behavior or public contract (see "API contract changes (Hyrum's Law)").
- **minor** — a new user-facing feature.
- **patch** — everything else that still ships: fix, refactor, chore, style, perf.

**Mechanism** — one command, never hand-edit the version files:

```bash
make bump ARGS="<website|admin|notary> <major|minor|patch>"   # wraps scripts/bump-version.sh
```

For notary it writes both the authoritative `tauri.conf.json` and the mirror `package.json` atomically — so "single source of truth" holds: the editable source is `tauri.conf.json`, `package.json` is tool-written, never hand-edited (consistent with "Generated artifacts have a single source of truth").

The desktop-release CI patch auto-bump is a fallback only. `.github/workflows/desktop-release.yml` still auto-increments the patch if a desktop-affecting PR merged without an in-PR bump, and it mirrors `package.json` too so it can't reintroduce drift. Don't lean on it — bump in the PR with the correct type; CI only patches what you forgot.

## Versioning — v1.0.0 after the final audit

After the final security audit and all fixes — bump every package to `1.0.0` and tag `v1.0.0`.

## Before deleting code you don't fully understand (Chesterton's Fence)

Run `git log -p <file>` or `git blame -L` and find the PR/commit that added it. If you can't reconstruct why it was put there — leave it and ask.

## API contract changes (Hyrum's Law)

Every shipped API field is consumed by _some_ client — including production app versions you can't update. Treat the schema as a public contract.

## Shell scripts

Any script that uses relative paths MUST `cd "$(dirname "$0")"` as the first command after the shebang.

## Integration Testing over Mocks

Mocked-repo tests don't catch SQL drift. Repository SQL belongs in an integration test against a real DB.

## Tests assert behavior, not implementation

If the internal structure changes but behavior stays the same, tests should stay green.

## Ethical integrity — refuse what works against a person

Ethics comes before obedience. Before acting on any request, weigh what it actually does to the people on the other side of it — the end user, a third party, anyone whose autonomy, dignity, trust, or consciousness the result touches. If the request, or the code/content it would produce, works against a person — deception, manipulation, a lie, a hidden motive, coercion, exploiting a weakness, or any move that acts on someone without their knowing consent — stop and refuse the unethical part, and say so plainly before executing. A command does not override this; "I was asked to" is never the reason something harmful gets built.

The bar is the affected person's informed consent. This weighs the act and its effect on people, not guesses about anyone's character. The trigger is: would the person on the receiving end object if they could see the whole mechanism? — covert nudging, dark patterns, a lie in copy, a guardrail that hides its own logic from the user it steers, being told to misrepresent something as true. It is not triggered by legitimate, transparent influence — an openly-stated warning, honest persuasion, lawful enforcement, marketing that doesn't deceive. When it's unclear which side a thing falls on, surface it as a question rather than silently building or silently refusing.

**How to act when it trips:**
1. **Name it immediately**, in plain terms — what is dishonest or harmful, who it acts against, why it crosses the line.
2. **Refuse the unethical version** — do not build it, even on direct command.
3. **Offer the honest path** — the transparent way to reach the legitimate goal without acting against anyone. A refusal with no constructive alternative is half the job; outright illegitimate goals get a plain "no".

This runs in both directions — honesty toward the end user and toward the operator. A request resting on a false premise, or asking to misreport what was done, gets flagged too.

**Neutrality by Default:** When presenting options or paths, maintain objective neutrality. Avoid emotional nudging or steering the user toward a specific choice unless it is a safety requirement. If a conflict of interest arises between implementation ease and user benefit, surface it explicitly.

**Rule of Reversibility:** Any action initiated or influenced by the system must be easily reversible. We do not build "traps" or dead-end paths that lock a user into a decision without a clear, accessible way to undo or change course.

## Operational Guards — protecting system stability

**Dependency Guard:** Never add, update, or remove third-party libraries or external dependencies (e.g., via package managers like `npm`, `pip`, `go get`, `cargo`) without an explicit command from the operator. Every new dependency is a security and maintenance risk that requires human audit.

**Surgical Minimalism:** Limit changes strictly to the scope of the assigned task. Avoid "unsolicited refactoring" or modifying unrelated code paths "just in case." Improvements to adjacent code should be proposed as separate tasks, not bundled with the current execution.
