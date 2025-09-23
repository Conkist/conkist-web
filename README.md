# Conkist Website - Next.js

Este é o projeto base do site da Conkist construído com Next.js, Tailwind CSS e Framer Motion.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **ESLint** - Linting de código

## 📁 Estrutura do Projeto

```
conkist-website/
├── app/                     # App Router (Next.js 13+)
│   ├── about/
│   │   └── page.tsx        # Página /about
│   ├── games/
│   │   └── trashy-racers/
│   │       └── page.tsx    # Página /games/trashy-racers
│   ├── globals.css         # Estilos globais + Tailwind
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página inicial (/)
├── components/             # Componentes reutilizáveis
│   ├── Header.tsx          # Cabeçalho
│   └── Footer.tsx          # Rodapé
├── data/                   # Arquivos JSON estáticos
│   ├── header.json         # Dados do cabeçalho
│   ├── games.json          # Dados dos jogos
│   ├── app-prices.json     # Preços da aplicação
│   ├── partners.json       # Parceiros
│   ├── team.json           # Equipe
│   └── footer.json         # Dados do rodapé
└── lib/                    # Utilitários
    ├── data.ts             # Funções para carregar dados JSON
    └── example-usage.tsx   # Exemplo de uso dos dados
```

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Lint do código
npm run lint
```

## 📄 Páginas Implementadas

### 1. Página Inicial (/)
- Hero section com animações
- Seção de jogos em destaque
- Design responsivo

### 2. Sobre (/about)
- Informações da empresa
- Missão e valores
- Animações com Framer Motion

### 3. Trashy Racers (/games/trashy-racers)
- Detalhes do jogo
- Características e recursos
- Informações de plataformas

## 📊 Dados Estáticos

Os dados são organizados em arquivos JSON na pasta `data/`:

- **header.json**: Logo, navegação e CTA
- **games.json**: Informações dos jogos
- **app-prices.json**: Planos e preços
- **partners.json**: Parceiros da empresa
- **team.json**: Membros da equipe
- **footer.json**: Links e informações do rodapé

### Como usar os dados:

```typescript
import { getGamesData } from '@/lib/data';

// Server Component (padrão no App Router)
export default function GamesPage() {
  const gamesData = getGamesData();
  
  return (
    <div>
      {gamesData.games.map(game => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <p>{game.description}</p>
        </div>
      ))}
    </div>
  );
}

// Para Client Components com interatividade
// arquivo: app/games/page.tsx
import { getGamesData } from '@/lib/data';
import ClientGamesComponent from './ClientGamesComponent';

export default function GamesPage() {
  const gamesData = getGamesData();
  return <ClientGamesComponent gamesData={gamesData} />;
}

// arquivo: app/games/ClientGamesComponent.tsx
'use client';
import { useState } from 'react';
import type { GamesData } from '@/lib/data';

export default function ClientGamesComponent({ gamesData }: { gamesData: GamesData }) {
  const [selectedGame, setSelectedGame] = useState(gamesData.games[0]);
  // ... resto do componente interativo
}
```

## 🎨 Tailwind CSS

O projeto usa Tailwind CSS v4 com configuração inline. Os estilos são aplicados diretamente via classes utilitárias:

```tsx
<div className="bg-gradient-to-br from-blue-50 to-indigo-100">
  <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
    Título
  </h1>
</div>
```

## ✨ Animações

As animações são implementadas com Framer Motion:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Conteúdo animado
</motion.div>
```

## 🔧 Próximos Passos

1. **Adicionar mais páginas**: Blog, contato, carreiras
2. **Integração com API**: Substituir dados estáticos por calls de API
3. **Testes**: Adicionar testes unitários e de integração
4. **SEO**: Melhorar metadados e estruturação
5. **Performance**: Otimizar imagens e carregamento
6. **CMS**: Integrar com um headless CMS para gerenciar conteúdo

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+

## 🚀 Deploy

O projeto está pronto para deploy em plataformas como:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **Azure Static Web Apps**

```bash
# Para Vercel
npx vercel

# Para build estático
npm run build
```
