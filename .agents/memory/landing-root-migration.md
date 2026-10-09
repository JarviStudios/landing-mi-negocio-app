---
name: Landing root migration
description: Scope choice for building the Mi Negocio landing from the repository root without removing sibling artifacts.
---

Keep the landing as a root-level Vite app and preserve the API Server and Canvas artifacts. The Replit landing preview can continue through its artifact metadata with development and production commands pointing at the root app.

**Why:** The user confirmed moving the landing into the root for an independent build but did not ask to remove the unrelated API Server or Canvas packages.

**How to apply:** For future landing build or deployment work, avoid reintroducing a workspace dependency from the root landing and do not delete sibling artifacts unless the user explicitly asks.
