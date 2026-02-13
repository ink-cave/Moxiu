# Contributing

Please follow these guidelines when contributing:

- Use `npm`/`bun` workspaces in root.
- Run `bun install` before work.
- Code style: Prettier + ESLint (run `bun run format` and `bun run lint`).
- Tests: `bun run test`.
- Commit messages: use Conventional Commits. A commit-msg hook validates messages.
- To create a release: run `bun run changeset` to create a changeset, then `bun run version:changeset` and push.
