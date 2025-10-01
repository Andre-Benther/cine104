// Caminho do arquivo: src/components/landing/gallery.tsx
import Image from 'next/image';

export default function Gallery() {
  const galleryImages = [
    { id: 'w1', imageUrl: '/w1.jpg', description: 'Imagem 1', imageHint: 'Imagem 1' },
    { id: 'w2', imageUrl: '/w2.jpg', description: 'Imagem 2', imageHint: 'Imagem 2' },
    { id: 'w3', imageUrl: '/w3.jpg', description: 'Imagem 3', imageHint: 'Imagem 3' }
  ];

  // Estilos CSS que substituem as classes do Tailwind para o nosso teste
  const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Equivalente a 'lg:grid-cols-3'
    gap: '16px', // Equivalente a 'gap-4'
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative', // Equivalente a 'relative'
    width: '100%', // Equivalente a 'w-full'
    aspectRatio: '1 / 1', // Equivalente a 'aspect-square'
  };

  const imageStyle: React.CSSProperties = {
    objectFit: 'cover', // Equivalente a 'object-cover'
  };

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

        {/* Usando os estilos inline para o teste */}
        <div style={gridContainerStyle}>
          {galleryImages.map((image) => (
            <div key={image.id} style={imageContainerStyle}>
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                style={imageStyle} // Usando o style prop em vez de className
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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