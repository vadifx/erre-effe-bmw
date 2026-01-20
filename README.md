# BMW Site

Progetto [Next.js](https://nextjs.org) configurato con le ultime versioni stabili.

## 🚀 Stack Tecnologico

- **Next.js**: 16.1.4 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Tailwind CSS**: 4.x
- **Turbopack**: Bundler di default (Next.js 16)

## ✨ Caratteristiche Configurate

- ✅ **App Router**: Struttura moderna con cartella `app/`
- ✅ **TypeScript**: Configurazione strict mode
- ✅ **Tailwind CSS v4**: Configurazione con PostCSS
- ✅ **Alias `@`**: Import path alias configurato (`@/*` → `./*`)
- ✅ **Turbopack**: Bundler di default per sviluppo e build
- ✅ **ESLint**: Configurazione Next.js

## 🛠️ Getting Started

Prima di tutto, installa le dipendenze (se non già fatto):

```bash
npm install
```

Poi avvia il server di sviluppo:

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere il risultato.

La pagina si aggiorna automaticamente mentre modifichi i file.

## 📁 Struttura del Progetto

```
bmw-site/
├── app/              # App Router (Next.js 13+)
│   ├── layout.tsx   # Layout root
│   ├── page.tsx     # Homepage
│   └── globals.css  # Stili globali Tailwind
├── components/       # Componenti React riutilizzabili
├── public/          # File statici
├── next.config.ts   # Configurazione Next.js + Turbopack
├── tsconfig.json    # Configurazione TypeScript con alias
└── postcss.config.mjs # Configurazione PostCSS per Tailwind
```

## 📝 Utilizzo Alias `@`

Puoi importare file usando l'alias `@` invece di percorsi relativi:

```typescript
// ✅ Con alias
import { Button } from "@/components/Button";

// ❌ Senza alias (evitare)
import { Button } from "../../components/Button";
```

## 🎨 Tailwind CSS

Tailwind CSS v4 è configurato e pronto all'uso. Le classi sono disponibili in tutti i componenti.

Esempio:
```tsx
<div className="flex items-center justify-center p-4 bg-blue-500 text-white">
  Hello World
</div>
```

## 🔧 Script Disponibili

- `npm run dev` - Avvia il server di sviluppo con Turbopack
- `npm run build` - Crea la build di produzione con Turbopack
- `npm run start` - Avvia il server di produzione
- `npm run lint` - Esegue ESLint

## 📚 Risorse

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
