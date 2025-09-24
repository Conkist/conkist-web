# Design System - Conkist

## Cores

### Primárias
- **Ciano:** `#00AAD4` (cor principal da marca)
- **Amarelo:** `#FFBF00` (cor secundária da marca)
- **Cinza Escuro:** `#222` (texto principal)

### Variações de Hover
- **Ciano Hover:** `#008BB8`
- **Amarelo Hover:** `#E6AC00`
- **Cinza Claro Hover:** `bg-gray-100`

## Tipografia

### Fontes
- **Display (H1, H2):** Bakbak One (Google Fonts)
- **Corpo (P, UI):** Roboto (Google Fonts)

### Estilos

#### H1 - Títulos Principais
```css
font-family: Bakbak One
text-transform: uppercase
font-weight: bold
color: #00AAD4
text-shadow: 0 2px 4px rgba(0, 170, 212, 0.2)
line-height: 1.1
```

#### H2 - Subtítulos
```css
font-family: Bakbak One
text-transform: uppercase
color: #FFBF00
line-height: 1.2
```

#### P - Parágrafos
```css
font-family: Roboto
color: #222
line-height: 1.6
max-width: 70ch
font-size: 1rem
```

## Componente Button

### Importação
```tsx
import Button from '@/components/Button';
```

### Variantes

#### Primário
```tsx
<Button variant="primary">Texto do Botão</Button>
```
- Fundo: `#00AAD4`
- Texto: branco
- Hover: `#008BB8`

#### Secundário
```tsx
<Button variant="secondary">Texto do Botão</Button>
```
- Fundo: `#FFBF00`
- Texto: preto
- Hover: `#E6AC00`

#### Ghost
```tsx
<Button variant="ghost">Texto do Botão</Button>
```
- Fundo: transparente
- Texto: `#222`
- Borda: cinza claro
- Hover: fundo cinza claro

### Tamanhos
```tsx
<Button size="sm">Pequeno</Button>
<Button size="md">Médio (padrão)</Button>
<Button size="lg">Grande</Button>
```

### Exemplo Completo
```tsx
import Button from '@/components/Button';

export default function ExamplePage() {
  return (
    <div>
      <h1>Título Principal</h1>
      <h2>Subtítulo</h2>
      <p>
        Este é um parágrafo de exemplo que demonstra 
        a tipografia do design system.
      </p>
      
      <div className="flex gap-4">
        <Button variant="primary">Ação Principal</Button>
        <Button variant="secondary">Ação Secundária</Button>
        <Button variant="ghost">Cancelar</Button>
      </div>
    </div>
  );
}
```

## Uso das Fontes

As fontes são configuradas automaticamente através das CSS custom properties:
- `var(--font-bakbak-one)` - Para títulos
- `var(--font-roboto)` - Para texto corpo

Os estilos globais aplicam automaticamente as fontes corretas para H1, H2 e P.

## Acessibilidade

- Botões incluem focus-visible states
- Contraste adequado entre cores
- Tamanhos de toque adequados para mobile
- Hierarquia visual clara com tipografia