# SYSTEM-MAP.md — The Living Map (Project as a Human Body)

A project is navigated as a living tree, not as flat code. The map is the
primary interface: orient at the top in business language, descend to code only
at the point that must change. Grounded in how the **human body** organizes —
and kept honest the way the body keeps itself honest. We build systems for
people, so we model them on the human body, not on biology in general.

The "tree" is the **shape** of the navigation; the biology underneath is human
anatomy. Where the model needs a surface that meets the world, that surface is
the body's own — skin, senses, the linings where exchange happens — not a
plant's leaf.

## The Model
- **Containment tree (the body):** Body (product) → Systems → Organs (modules)
  → Tissues (components) → Surfaces (UI / endpoints / jobs — skin and senses,
  where the body meets the world) → DNA (the code you actually edit).
- **Cross-cutting systems (graphs that ignore the hierarchy):** nervous
  (events), circulatory (data/state), endocrine (config/flags), and the immune
  system below. A feature is a node in the tree AND a set of touches by these
  systems.
- **Anchors are many-to-many:** a node points to its code (`file:symbol`, route,
  event); one node may have many anchors and one file may serve many nodes.
  Never force a clean 1:1 tree.

## The Artifact
Each project carries `feature-tree.yaml`: every node has a business
description, status, optional flow (the Process Flow template, `GEMINI.md`),
children, and — at surfaces — code anchors. It is the single source the visual
diagram is rendered from.

## The Immune System (mandatory)
Any living body needs error-correction or it rots. The immune layer works in
**both** directions:
- **Forward (map → code):** a validator MUST fail when a node's anchor no longer
  resolves to real code — a node that lies is drift, caught automatically (like
  DNA repair and apoptosis).
- **Backward (code → map):** code reachable from no nerve ending (no route, job,
  event, export, or live node) is dead tissue — flagged to fall away. What is
  connected lives; what is not, dies. This is the *Law of the Smallest
  Mechanism* enforced by anatomy.

## How Claude uses it
1. Read the map first; locate the node by business meaning.
2. Descend only into that node's anchors — not the whole codebase.
3. Edit at the locus; update the node; re-validate.
4. Any feature change updates the tree in the same PR (Completeness of
   Execution, `CLAUDE.md`).

## What it is not
Not blind imitation of nature: we keep intentional design, global refactoring,
and the Law of the Smallest Mechanism — no junk DNA, no redundancy. The operator
views the rendered tree; the depth is for the system to maintain.
