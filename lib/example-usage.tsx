// Exemplo de como usar os dados estáticos no App Router do Next.js

import { 
  getHeaderData, 
  getGamesData, 
  getAppPricesData, 
  getPartnersData, 
  getTeamData, 
  getFooterData
} from '@/lib/data';

// No App Router, este é um Server Component por padrão
// Você pode carregar dados diretamente no componente
export default function ExamplePage() {
  // Carregando dados no servidor (build time / request time)
  const headerData = getHeaderData();
  const gamesData = getGamesData();
  const appPricesData = getAppPricesData();
  const partnersData = getPartnersData();
  const teamData = getTeamData();
  const footerData = getFooterData();

  return (
    <div>
      <h1>Exemplo de uso dos dados JSON no App Router</h1>
      
      {/* Usando dados do header */}
      <h2>{headerData.logo.text}</h2>
      
      {/* Listando jogos */}
      {gamesData.games.map(game => (
        <div key={game.id}>
          <h3>{game.title}</h3>
          <p>{game.description}</p>
        </div>
      ))}
      
      {/* Mostrando preços */}
      {Object.entries(appPricesData.appPrices).map(([key, price]) => (
        <div key={key}>
          <h4>{price.title}</h4>
          <p>{price.price}</p>
        </div>
      ))}
      
      {/* Listando parceiros */}
      {partnersData.partners.map(partner => (
        <div key={partner.id}>
          <h4>{partner.name}</h4>
          <p>{partner.description}</p>
        </div>
      ))}
      
      {/* Mostrando equipe */}
      {teamData.team.map(member => (
        <div key={member.id}>
          <h4>{member.name}</h4>
          <p>{member.role}</p>
        </div>
      ))}
      
      {/* Usando dados do footer */}
      <footer>
        <p>{footerData.legal.copyright}</p>
      </footer>
    </div>
  );
}

// Para Client Components com dados (quando você precisa de interatividade)
// Exemplo: 

// arquivo: app/interactive-example/page.tsx
/*
import { getGamesData } from '@/lib/data';
import ClientComponent from './ClientComponent';

export default function InteractiveExamplePage() {
  const gamesData = getGamesData();
  
  return <ClientComponent gamesData={gamesData} />;
}
*/

// arquivo: app/interactive-example/ClientComponent.tsx
/*
'use client';

import { useState } from 'react';
import type { GamesData } from '@/lib/data';

interface ClientComponentProps {
  gamesData: GamesData;
}

export default function ClientComponent({ gamesData }: ClientComponentProps) {
  const [selectedGame, setSelectedGame] = useState(gamesData.games[0]);
  
  return (
    <div>
      <h1>Jogos Interativos</h1>
      {gamesData.games.map(game => (
        <button 
          key={game.id}
          onClick={() => setSelectedGame(game)}
          className={selectedGame.id === game.id ? 'bg-blue-500' : 'bg-gray-200'}
        >
          {game.title}
        </button>
      ))}
      
      <div>
        <h2>{selectedGame.title}</h2>
        <p>{selectedGame.description}</p>
      </div>
    </div>
  );
}
*/

// Para dados dinâmicos (fetch de API), use async/await no Server Component:
/*
export default async function DynamicDataPage() {
  const response = await fetch('https://api.example.com/games');
  const dynamicGames = await response.json();
  
  return (
    <div>
      {dynamicGames.map((game: any) => (
        <div key={game.id}>{game.title}</div>
      ))}
    </div>
  );
}
*/