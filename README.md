
### Devbox setup:

- Install postgresql
- Create .env file in `/server` folder from `.env.sample`

```
nvm use 22
pnpm install
pnpm run setup
pnpm run dev
```
### Client
pnpm run dev

### Useful commands

To create a new migration file in `server` folder:
`pnpm db-migrate create newMigrationName`
