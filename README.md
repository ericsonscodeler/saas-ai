
## Getting Started

```bash

npm install
# or
yarn
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Initialize prisma studio

```bash
npx prisma studio
```

Initialize stripe for dev

```bash
stripe listen --forward-to localhost/3000/api/webhook

