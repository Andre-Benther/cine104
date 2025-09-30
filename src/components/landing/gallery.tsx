import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Gallery() {
  const galleryImagesData = [
    { id: 'w1', imageUrl: '/w1.jpg', description: 'Corporate event setup at Cine 104', imageHint: 'corporate event' },
    { id: 'w3', imageUrl: '/w3.jpg', description: 'Kids party at Cine 104', imageHint: 'kids party' },
    { id: 'w2', imageUrl: '/w2.jpg', description: 'Empty auditorium of Cine 104', imageHint: 'cinema auditorium' },
  ];

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
          {galleryImagesData.map((image) => (
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
