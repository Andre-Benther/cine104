import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { createWhatsAppLink, WHATSAPP_MESSAGES } from '@/lib/config';
import { Calendar, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
          Entre em Contato
        </h2>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          Estamos ansiosos para receber seu evento. Agende uma visita ou reserve sua data.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105">
            <Link href={createWhatsAppLink(WHATSAPP_MESSAGES.scheduleDate)}>
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Data
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="transition-transform transform hover:scale-105">
            <Link href={createWhatsAppLink(WHATSAPP_MESSAGES.scheduleVisit)}>
              <MapPin className="mr-2 h-5 w-5" />
              Agendar Visita
            </Link>
          </Button>
        </div>
        <div className="mt-16 border-t border-border pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="flex items-start space-x-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary">Endereço</h3>
              <p className="text-muted-foreground">Praça Rui Barbosa, 104 - Centro<br/>Belo Horizonte, MG, 30160-040</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary">Telefone</h3>
              <p className="text-muted-foreground">(31) 3248-7400</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary">Email</h3>
              <p className="text-muted-foreground">contato@cine104.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
