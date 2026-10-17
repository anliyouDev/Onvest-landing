import { ArrowRight, MapPin } from "lucide-react"
import Compteurs from "../compteur/compteur"
import Barre from "../compteur/barre"

const opportunites = [
  { nom: "AgriNova CI", secteur: "Agriculture", pays: "Côte d'Ivoire", image: "/Agriculture.jpg",
    description: "Serres intelligentes et systèmes hydroponiques pour développer l'agriculture urbaine à Abidjan.",
    collecte: 100, objectif: 250, investisseurs: 45, jours: 60, ticket: 100000, statut: "active" },
  { nom: "SenTech", secteur: "Technologie", pays: "Sénégal", image: "/Technologie.jpg",
    description: "Suite logicielle ERP adaptée aux réalités des PME d'Afrique de l'Ouest.",
    collecte: 127.5, objectif: 150, investisseurs: 89, jours: 14, ticket: 250000, statut: "active" },
  { nom: "IvoireExport", secteur: "Commerce", pays: "Côte d'Ivoire", image: "/commece.avif",
    description: "Expansion des exportations de produits agricoles transformés avec un centre logistique au port d'Abidjan.",
    collecte: 327.5, objectif: 500, investisseurs: 128, jours: 42, ticket: 500000, statut: "active" },
  { nom: "EcoPower Mali", secteur: "Industrie", pays: "Mali", image: "/industrie.jpeg",
    description: "Infrastructures solaires décentralisées pour les zones industrielles péri-urbaines.",
    collecte: 224, objectif: 400, investisseurs: 71, jours: 28, ticket: 250000, statut: "active" },
  { nom: "KakaoLab CI", secteur: "Agriculture", pays: "Côte d'Ivoire", image: "/cacao.jpeg",
    description: "Transformation locale des fèves de cacao en produits finis destinés à l'export.",
    collecte: 96, objectif: 300, investisseurs: 38, jours: 35, ticket: 100000, statut: "active" },
  { nom: "AfriLog", secteur: "Services", pays: "Mali", image: "/service.avif",
    description: "Modernisation de la flotte de transport de marchandises et construction d'entrepôts.",
    collecte: 0, objectif: 400, investisseurs: 0, jours: 12, ticket: 500000, statut: "bientot" },
]

const secteurs = ["Agriculture", "Technologie", "Commerce", "Industrie", "Services"]

export default function Opportunite() {
  return (
    <>
      <section className="bg-[#f8f9fb] px-5 py-12 text-[#0A1628] sm:px-8 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-8">
          <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Des entreprises qui recherchent des capitaux, aujourd&apos;hui
          </h2>
          <a
            href="#opportunites"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-md border border-[#0A1628] bg-white px-5 py-3 text-sm font-bold text-[#0A1628] md:text-base"
          >
            Voir toutes les opportunités
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section id="opportunites" className="bg-[#f8f9fb] px-5 pb-12 sm:px-8 lg:px-24 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold uppercase sm:flex sm:flex-wrap sm:gap-3 sm:text-sm">
            <a
              href="#opportunites"
              className="col-span-2 rounded-md border border-[#0A1628] bg-[#0A1628] px-3 py-2.5 text-center text-white sm:px-5 sm:py-3"
            >
              Tous les secteurs
            </a>
            {secteurs.map((s) => (
              <a
                key={s}
                href="#opportunites"
                className="rounded-md border border-[#0A1628] px-3 py-2.5 text-center text-[#0A1628] sm:px-5 sm:py-3"
              >
                {s}
              </a>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {opportunites.map((o) => {
              const bientot = o.statut === "bientot"
              const pct = (o.collecte / o.objectif) * 100
              const dec = (n: number) => (n % 1 ? 1 : 0)

              return (
                <article key={o.nom} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white">
                  <div className="relative h-40 w-full overflow-hidden bg-[#0A1628] sm:h-44">
                    <div className="absolute left-0 right-0 top-3 z-10 flex justify-between gap-2 px-3">
                      <span className="rounded bg-[#0A1628] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#c9a45c] sm:text-[11px]">
                        {o.secteur}
                      </span>
                      <span
                        className={`rounded bg-white px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider sm:text-[11px] ${
                          bientot ? "text-[#c9a45c]" : "text-[#3E7D53]"
                        }`}
                      >
                        {bientot ? "Bientôt" : "Campagne active"}
                      </span>
                    </div>
                    <img src={o.image} alt={o.nom} className="h-full w-full object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold text-[#0A1628] sm:text-xl">{o.nom}</h3>
                      <div className="flex shrink-0 items-center gap-1 font-mono text-xs text-gray-400">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{o.pays}</span>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-gray-500">{o.description}</p>

                    <hr className="my-4 border-gray-200" />

                    <div className="flex justify-between gap-3 font-mono">
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-gray-500">Collecté</p>
                        <p className="text-sm font-bold text-[#0a1128] sm:text-base">
                          {bientot ? "–" : (<><Compteurs fin={o.collecte} decimale={dec(o.collecte)} /> M FCFA</>)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] uppercase tracking-wide text-gray-500">Objectif</p>
                        <p className="text-sm font-bold text-[#0a1128] sm:text-base">
                          <Compteurs fin={o.objectif} /> M FCFA
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <Barre pourcentage={pct} />
                    </div>

                    <div className="mt-3 flex flex-wrap items-start justify-between gap-x-4 gap-y-1 font-mono text-xs">
                      {bientot ? (
                        <>
                          <span className="text-gray-500">Non démarrée</span>
                          <span className="text-gray-500">
                            Ouverture dans <Compteurs fin={o.jours} /> jours
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="font-semibold text-green-600">
                            <Compteurs fin={pct} decimale={dec(pct)} /> % financé
                          </span>
                          <span className="text-gray-500">
                            <Compteurs fin={o.investisseurs} /> investisseurs ·{" "}
                            <Compteurs fin={o.jours} /> jours restants
                          </span>
                        </>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 font-mono">
                      <span className="text-[11px] uppercase tracking-wide text-gray-500">Ticket minimum</span>
                      <span className="text-sm font-bold text-[#0a1128]">
                        <Compteurs fin={o.ticket} /> FCFA
                      </span>
                    </div>

                    <div className="mt-auto pt-5">
                      {bientot ? (
                        <button className="w-full rounded-md border border-gray-300 py-3 text-sm font-semibold text-[#0A1628]">
                          Être notifié
                        </button>
                      ) : (
                        <>
                          <a href="#" className="block rounded-md bg-[#0A1628] py-3 text-center text-sm font-semibold text-white hover:opacity-90">
                            Découvrir le projet
                          </a>
                          <a href="#" className="mt-3 block text-center font-mono text-xs font-bold text-[#8a6d1f] underline decoration-[#c9a45c] underline-offset-4">
                            Simuler mon intention
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}