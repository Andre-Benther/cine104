export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-6 px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Cine 104. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
