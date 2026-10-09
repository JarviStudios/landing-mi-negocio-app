---
name: GitHub repo linking from Replit
description: Use the Replit Git pane when shell authentication does not provide GitHub access.
---

When the GitHub integration and shell authentication disagree, do not ask for or handle a personal access token. Use the Project Editor's Tools → Git flow to connect the repository, then verify that the workspace has the expected remote before pushing.

**Why:** In this workspace, the GitHub integration reported an active connection, while `gh auth status` reported no authenticated host and the connection reauthorization flow could not start.

**How to apply:** While linking a local Repl repository, verify shell access rather than assuming an integration status means Git CLI access. If authentication is unavailable, direct the user to the Git pane and resume after the remote is connected.
