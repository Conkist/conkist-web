import Button from '@/components/Button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 px-4">
      <h1 className="text-6xl">Homepage Conkist</h1>
      <h2 className="text-3xl">Design System Demo</h2>
      <p className="text-center">
        Este é um parágrafo de exemplo para demonstrar o design system. 
        Note como a tipografia está configurada com as fontes corretas e 
        os estilos globais aplicados automaticamente.
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="primary">Botão Primário</Button>
        <Button variant="secondary">Botão Secundário</Button>
        <Button variant="ghost">Botão Ghost</Button>
      </div>
      
      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="primary" size="sm">Pequeno</Button>
        <Button variant="primary" size="md">Médio</Button>
        <Button variant="primary" size="lg">Grande</Button>
      </div>
    </div>
  );
}
