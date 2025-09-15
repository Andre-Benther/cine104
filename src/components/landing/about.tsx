import { PartyPopper, Film, Mic, Gamepad2, Briefcase } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Film className="h-8 w-8 text-primary" />,
      title: 'Sessões de Cinema',
      description: 'Exiba filmes com qualidade profissional para seu público.',
    },
    {
      icon: <Mic className="h-8 w-8 text-primary" />,
      title: 'Palestras e Convenções',
      description: 'Um ambiente sofisticado com acústica impecável para suas apresentações.',
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: 'Eventos Corporativos',
      description: 'Surpreenda sua equipe e clientes em um local único.',
    },
    {
      icon: <PartyPopper className="h-8 w-8 text-primary" />,
      title: 'Festas Exclusivas',
      description: 'Celebre momentos especiais em um espaço charmoso e versátil.',
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-primary" />,
      title: 'Jogos e Lançamentos',
      description: 'A tela grande perfeita para campeonatos e lançamentos de produtos.',
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Um Espaço Único para Momentos Inesquecíveis
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Localizado em um patrimônio histórico tombado no coração de Belo Horizonte, o Cine 104 é um espaço que une tradição e modernidade em um ambiente aconchegante e sofisticado. Com capacidade para até 85 pessoas, tecnologia de ponta e acústica impecável, o Cine 104 é perfeito para:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-accent/30 p-4 rounded-full">
                {feature.icon}
              </div>
              <h3 className="mt-4 font-bold text-lg text-primary">{feature.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
