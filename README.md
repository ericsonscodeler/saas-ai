# Projeto SaaS (Software as a Service) utilizando Next.js 13, React, Tailwind, Prisma, Stripe

Features:

- Tailwind
- Tailwind animações e efeitos
- Aplicação responsiva
- Clerk Autenticação (Email, Google, 9+ Social Logins)
- Formulário de validação utilizando react-hook-form
- Tratamento de erros do servidor utlizando react-toast
- Ferramenta de geranção de imagens (Open AI)
- Ferramenta de Geração de Conversa (Open AI)
- Ferramenta de Geração de Vídeo (Replicate AI)
- Ferramenta de Geração de Música (Replicate AI)
- Estados de loading
- Plataforma de Pagamento Stripe para assinaturas.
- Limitar quantidade de request para api para plano gratuíto.
- Rotas POST, DELETE e GET (app/api)
- Armazenar no banco de dados informações utilizando Prisma  (WITHOUT API! like Magic!)
- Estrutura de pastas do NEXT 13.



```shell
git clone https://github.com/ericsonscodeler/saas-ai
```

### Instalar pacotes

```shell
npm i
```

### Arquivo .env


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Prisma

Utilizar banco de dados MySQL (no projeto foi utilizado Planet Scale)

```shell
npx prisma db push

```

### Startar aplicação

```shell
npm run dev
```