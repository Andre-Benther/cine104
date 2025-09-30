import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function EventTypes() {
  const corporateImage = PlaceHolderImages.find(p => p.id === 'event-corporate');
  const kidsImage = PlaceHolderImages.find(p => p.id === 'event-kids');
  const otherImage = PlaceHolderImages.find(p => p.id === 'event-other');

  return (
    <section className="py-16 md:py-24 bg-secondary" id="events">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Um Cenário para Todo Tipo de Evento
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
            Da magia das festas infantis à sofisticação dos eventos corporativos, nosso espaço se transforma para realizar sua ideia.
          </p>
        </div>

        <Tabs defaultValue="corporate" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto">
            <TabsTrigger value="corporate" className="py-2">Eventos Corporativos</TabsTrigger>
            <TabsTrigger value="kids" className="py-2">Festas Infantis</TabsTrigger>
            <TabsTrigger value="other" className="py-2">Celebrações e Outros</TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="corporate">
              <Card className="overflow-hidden">
                <CardContent className="p-0 md:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-primary mb-3 font-headline px-6 pt-6 md:px-0 md:pt-0">Convenções, Palestras e Lançamentos</h3>
                    <p className="text-muted-foreground mb-4 px-6 md:px-0">
                      Surpreenda sua equipe e clientes com um evento memorável. Nossa estrutura tecnológica de ponta, incluindo som e projeção de cinema, é ideal para apresentações, workshops e eventos de networking.
                    </p>
                    <p className="text-muted-foreground px-6 pb-6 md:px-0 md:pb-0">
                      Oferecemos a possibilidade de customização total, desde a recepção até a integração de tecnologias para eventos Tech, garantindo uma experiência única e impactante.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-80 relative group">
                    {corporateImage && (
                      <Image
                        src={corporateImage.imageUrl}
                        alt={corporateImage.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={corporateImage.imageHint}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="kids">
              <Card className="overflow-hidden">
                <CardContent className="p-0 md:p-6 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-8">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-primary mb-3 font-headline px-6 pt-6 md:px-0 md:pt-0">Aniversários e Festas Mágicas</h3>
                    <p className="text-muted-foreground mb-4 px-6 md:px-0">
                      Imagine comemorar o aniversário do seu filho com uma sessão de cinema exclusiva para os amigos! O Cine 104 se transforma no cenário perfeito para uma festa inesquecível.
                    </p>
                     <p className="text-muted-foreground px-6 pb-6 md:px-0 md:pb-0">
                      Além do filme, o espaço pode ser decorado e adaptado para incluir buffet, brincadeiras e tudo que a imaginação permitir. Um dia de estrela de cinema para os pequenos!
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-80 relative group">
                     {kidsImage && (
                      <Image
                        src={kidsImage.imageUrl}
                        alt={kidsImage.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={kidsImage.imageHint}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="other">
              <Card className="overflow-hidden">
                <CardContent className="p-0 md:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-primary mb-3 font-headline px-6 pt-6 md:px-0 md:pt-0">Jantares, Comemorações e Sessões Privadas</h3>
                    <p className="text-muted-foreground mb-4 px-6 md:px-0">
                      Seja para um jantar sofisticado, uma festa de formatura ou uma sessão de cinema exclusiva com amigos, o Cine 104 oferece um ambiente charmoso e versátil.
                    </p>
                     <p className="text-muted-foreground px-6 pb-6 md:px-0 md:pb-0">
                      A flexibilidade do nosso espaço permite a criação de eventos sociais únicos, combinando a magia do cinema com a exclusividade de uma celebração privada.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 h-64 md:h-80 relative group">
                     {otherImage && (
                      <Image
                        src={otherImage.imageUrl}
                        alt={otherImage.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={otherImage.imageHint}
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
