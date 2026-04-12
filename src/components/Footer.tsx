export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Nexum Consulting Tutti i diritti riservati
        </p>
        <p className="text-nexum-blue font-bold tracking-tight">
          La connessione verso un'Italia a zero emissioni
        </p>
      </div>
    </footer>
  );
}
