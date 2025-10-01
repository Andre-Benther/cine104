import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Gallery() {
  // The user wants the order w1, w3, w2
  const galleryImages = [
    PlaceHolderImages.find(p => p.imageUrl === '/w1.jpg'),
    PlaceHolderImages.find(p => p.imageUrl === '/w3.jpg'),
    PlaceHolderImages.find(p => p.imageUrl === '/w2.jpg')
  ].filter(Boolean) as (typeof PlaceHolderImages[number])[];

  return (
    <section className="py-16 md:py-24 bg-secondary" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Nosso Espaço
          </h2>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore um pouco do charme e da versatilidade do Cine 104.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="relative aspect-square overflow-hidden rounded-lg group">
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
            </div>
          ))}
        </div>
         <p className="text-center text-xs text-muted-foreground mt-4">
          Imagens meramente ilustrativas.
        </p>
      </div>
    </section>
  );
}
