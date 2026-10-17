export default function Footer() {
  return (
    <footer className="relative border-t border-[#d4a34b]/30 bg-[#050B14] px-5 pb-8 pt-12 font-sans text-slate-300 shadow-[0_-8px_50px_-5px_rgba(212,163,75,0.15)] sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:mb-16 lg:grid-cols-4 lg:gap-12">
          <div className="col-span-2 space-y-4 lg:col-span-1 lg:pr-8">
            <img
              src="/logo_caré-fond_noir-removebg-preview.png"
              alt="Logo ONVEST"
              className="h-auto w-14 object-contain"
            />
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Plateforme d&apos;investissement dans les entreprises africaines.
              Périmètre initial : Côte d&apos;Ivoire et Afrique de l&apos;Ouest.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#d4a34b] lg:mb-6">
              Onvest
            </h3>
            <ul className="space-y-3 text-sm lg:space-y-4">
              <li><a href="#a-propos" className="transition-colors hover:text-white">À propos</a></li>
              <li><a href="#" className="transition-colors hover:text-white">FAQ</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#d4a34b] lg:mb-6">
              Investir
            </h3>
            <ul className="space-y-3 text-sm lg:space-y-4">
              <li><a href="#opportunite" className="transition-colors hover:text-white">Opportunités</a></li>
              <li><a href="#comment-ca-marche" className="transition-colors hover:text-white">Comment ça marche ?</a></li>
              <li><a href="#entreprises" className="transition-colors hover:text-white">Pour les entreprises</a></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#d4a34b] lg:mb-6">
              Légal
            </h3>
            <ul className="space-y-3 text-sm lg:space-y-4">
              <li><a href="#" className="transition-colors hover:text-white">Mentions légales</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Politique de confidentialité</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Conditions d&apos;utilisation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs leading-relaxed text-slate-500">
          <p>
            © 2026 ONVEST. Maquette de démonstration — données fictives.
            L&apos;investissement comporte un risque de perte en capital.
          </p>
        </div>
      </div>
    </footer>
  );
}