import { Search, ChartColumn, Wallet, TrendingUp } from "lucide-react";

const etapes = [
  {
    icone: Search,
    titre: "Découvrez",
    description:
      "Parcourez les opportunités et filtrez par secteur, pays, ticket minimum ou état de campagne.",
  },
  {
    icone: ChartColumn,
    titre: "Analysez",
    description:
      "Consultez la fiche détaillée : équipe, informations financières, utilisation des fonds et documents.",
  },
  {
    icone: Wallet,
    titre: "Investissez",
    description:
      "Simulez un montant et manifestez votre intention d'investir en quelques clics.",
  },
  {
    icone: TrendingUp,
    titre: "Suivez",
    description:
      "Retrouvez vos intentions et votre historique dans votre tableau de bord investisseur.",
  },
];

export default function Commentcamarche() {
  return (
    <section className="bg-[#F5EBE0] px-5 py-12 sm:px-8 lg:px-24 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#8a6d1f]">
          Comment ça marche ?
        </p>

        <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
          <h2 className="max-w-xl text-3xl font-bold leading-tight text-[#0a1128] md:text-4xl lg:text-5xl">
            Quatre étapes, de la découverte au suivi.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[#4A5568] md:text-base">
            Un parcours simple et transparent, pensé pour que chaque
            investisseur comprenne ce qu&apos;il consulte et les risques
            associés.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-10">
          {etapes.map((e, i) => {
            const Icone = e.icone;
            return (
              <div key={e.titre}>
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e5d9c8] bg-white lg:h-16 lg:w-16">
                    <Icone size={22} className="text-[#8a6d1f]" />
                  </div>
                  {i < etapes.length - 1 && (
                    <div className="hidden flex-1 border-t-2 border-dashed border-[#c9a45c]/70 lg:block" />
                  )}
                </div>

                <div className="mt-5 flex items-baseline gap-3">
                  <h3 className="text-xl font-bold text-[#0a1128] lg:text-2xl">
                    {e.titre}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-[#8a6d1f]">
                    étape {i + 1}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-[#4A5568] lg:text-base">
                  {e.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}