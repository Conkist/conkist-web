import Button from '@/components/Button';

export default function TrashyRacers() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 px-4">
      <h1 className="text-5xl text-center">Página Trashy Racers</h1>
      <h2 className="text-2xl">O Jogo de Corrida Definitivo</h2>
      <p className="text-center">
        Experimente a emoção das corridas com carros personalizáveis e 
        pistas desafiadoras. Trashy Racers oferece uma experiência única 
        de corrida mobile que vai te manter grudado na tela.
      </p>
      <div className="flex gap-4">
        <Button variant="secondary">Baixar Agora</Button>
        <Button variant="ghost">Ver Trailer</Button>
      </div>
    </div>
  );
}