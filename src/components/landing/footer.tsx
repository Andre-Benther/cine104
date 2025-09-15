import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-6 px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Cine 104. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs">
          Produzido por{' '}
          <Link href="https://instagram.com/d4t4tr4ck" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            d4t4tr4ck
          </Link>
        </p>
      </div>
    </footer>
  );
}
