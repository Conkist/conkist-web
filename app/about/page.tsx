import Button from '@/components/Button';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6 px-4">
      <h1 className="text-5xl">Sobre Conkist</h1>
      <h2 className="text-2xl">Nossa Missão</h2>
      <p className="text-center">
        Desenvolvemos jogos mobile inovadores que conectam pessoas e criam 
        experiências únicas. Nossa paixão é criar entretenimento de qualidade 
        que une jogadores ao redor do mundo.
      </p>
      <div className="flex gap-4">
        <Button variant="primary">Conheça Nossos Jogos</Button>
        <Button variant="ghost">Entre em Contato</Button>
      </div>
    </div>
  );
}