import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { createWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/config';
import { Calendar, MapPin } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  const heroStyle = heroImage ? { backgroundImage: `url(${heroImage.imageUrl})` } : {};

  return (
    <section 
      className="relative w-full h-[85vh] text-white bg-cover bg-center"
      style={heroStyle}
      data-ai-hint={heroImage?.imageHint}
    >
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline text-shadow-lg shadow-black/30">
          Bem-vindo ao Cine 104
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-shadow-md shadow-black/30 text-primary-foreground/90">
          O seu espaço exclusivo para eventos, projeções e momentos inesquecíveis.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform transform hover:scale-105">
            <Link href={createWhatsAppLink(WHATSAPP_MESSAGES.scheduleDate)}>
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Data
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-transform transform hover:scale-105">
            <Link href={createWhatsAppLink(WHATSAPP_MESSAGES.scheduleVisit)}>
              <MapPin className="mr-2 h-5 w-5" />
              Agendar Visita
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}