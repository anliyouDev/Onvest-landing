export default function Entrepreunariat() {
  return (
    <section className="bg-[#0b1221] px-5 py-14 font-sans sm:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-4xl space-y-6 text-center sm:space-y-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Prêt à participer à la prochaine histoire entrepreneuriale africaine ?
        </h1>

        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-xl">
          Créez votre compte pour explorer les opportunités, ou présentez
          votre entreprise à nos investisseurs.
        </p>

        <div className="grid grid-cols-2 gap-3 pt-2 sm:flex sm:items-center sm:justify-center sm:gap-4 sm:pt-4">
          <button className="flex items-center justify-center gap-2 rounded bg-[#d4a34b] px-3 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-[#c2923e] sm:px-8 sm:py-4 sm:text-base">
            Découvrir les opportunités
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden sm:block"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>

          <button className="rounded border border-slate-600 bg-transparent px-3 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-slate-400 sm:px-8 sm:py-4 sm:text-base">
            Créer un compte
          </button>
        </div>
      </div>
    </section>
  );
}