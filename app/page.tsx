import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Compteurs from "./compteur/compteur"
import Barre from "./compteur/barre";

export default function Page() {
  const pourcentage = (327.5 / 500) * 100;
  const kipData = [
    { value: 6, label: "Opportunités publiées" },
    { value: 3, label: "Pays en Afrique de l'Ouest" },
    { value: 5, label: "Secteurs d'activité" },
    { value: 100000, label: "FCFA, ticket minimum dès" },
  ];
  const routes = [
    { id: "route-dakar", begin: "0s" },
    { id: "route-bamako", begin: "0.5s" },
    { id: "route-ouaga", begin: "1s" },
    { id: "route-niamey", begin: "1.5s" },
    { id: "route-lagos", begin: "2s" },
    { id: "route-accra", begin: "2.5s" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#0d1628] px-5 py-12 sm:px-8 md:py-16 lg:px-24 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_55%,rgba(255,255,255,0.06),transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/4 hidden h-[420px] w-[55%] opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:18px_18px] md:block"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0 text-left">
            <h1 className="max-w-xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Investir dans les entreprises africaines.{" "}
              <span className="text-[#c9a45c]">
                Construire l&apos;Afrique de demain.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg md:mt-6">
              ONVEST met en relation des entreprises africaines en recherche de
              capitaux et des investisseurs qui souhaitent financer
              l&apos;économie réelle. Explorez les opportunités, analysez les
              dossiers, simulez votre intention.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <Link
                href="#opportunite"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#c9a45c] px-3 py-3 text-sm font-bold text-[#0d1628] hover:opacity-90 sm:px-6 sm:py-4 sm:text-base"
              >
                Découvrir les opportunités
                <ArrowRight size={18} className="hidden sm:block" />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-3 py-3 text-sm font-bold text-white hover:bg-white hover:text-[#0d1628] sm:px-6 sm:py-4 sm:text-base"
              >
                Lever des fonds
              </Link>
            </div>

            <div className="mt-8 flex max-w-lg items-start gap-3 font-mono text-xs text-gray-400 sm:text-sm">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              <p>
                Mode démonstration : vos intentions sont enregistrées, aucun
                fonds n&apos;est transféré.
              </p>
            </div>
          </div>

          <div className="relative flex min-w-0 flex-col items-center lg:block lg:min-h-[560px]">
            <svg
              viewBox="0 0 520 400"
              className="mx-auto w-full max-w-xl overflow-visible"
              aria-hidden="true"
            >
              <g fill="none" stroke="#c9a45c" strokeWidth="1.2" opacity="0.7">
                <path id="route-dakar" d="M245 250 L40 110" />
                <path id="route-bamako" d="M245 250 Q150 200 165 85" />
                <path id="route-ouaga" d="M245 250 Q290 160 300 70" />
                <path id="route-niamey" d="M245 250 Q380 120 440 55" />
                <path id="route-lagos" d="M245 250 Q380 170 450 235" />
                <path id="route-accra" d="M245 250 Q290 235 320 280" />
              </g>

              <g fill="#c9a45c">
                {routes.map((r) => (
                  <circle key={r.id} r="3.5">
                    <animateMotion dur="3s" repeatCount="indefinite" begin={r.begin}>
                      <mpath href={`#${r.id}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0"
                      keyTimes="0;0.1;0.85;1"
                      dur="3s"
                      repeatCount="indefinite"
                      begin={r.begin}
                    />
                  </circle>
                ))}
              </g>

              <g fill="#fff">
                <circle cx="40" cy="110" r="5" />
                <circle cx="165" cy="85" r="5" />
                <circle cx="300" cy="70" r="5" />
                <circle cx="440" cy="55" r="5" />
                <circle cx="450" cy="235" r="5" />
                <circle cx="320" cy="280" r="5" />
              </g>

              <circle cx="245" cy="250" r="11" fill="none" stroke="#c9a45c" strokeWidth="3" />
              <circle cx="245" cy="250" r="4" fill="#0d1628" />

              <g fill="#cbd5e1" fontSize="12" fontFamily="monospace" textAnchor="middle">
                <text x="40" y="92">Dakar</text>
                <text x="165" y="68">Bamako</text>
                <text x="300" y="52">Ouagadougou</text>
                <text x="440" y="38">Niamey</text>
                <text x="450" y="262">Lagos</text>
                <text x="320" y="308">Accra</text>
                <text x="245" y="282" fill="#c9a45c">Abidjan</text>
              </g>
            </svg>

            <div className="relative mt-6 w-full max-w-sm rounded-2xl bg-white p-5 shadow-lg sm:p-6 lg:absolute lg:bottom-10 lg:left-0 lg:mt-0">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-[#0d1628] sm:text-xl">
                  IvoireExport
                </h3>
                <span className="font-mono text-xs text-gray-500 sm:text-sm">
                  Côte d&apos;Ivoire
                </span>
              </div>

              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <Barre pourcentage={pourcentage} />
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-xs sm:text-sm">
                <span className="font-semibold text-green-600">
                  <Compteurs fin={65.5} decimale={1} /> % financé
                </span>
                <span className="text-gray-500">
                  <Compteurs fin={327.5} decimale={1} /> M / 500 M FCFA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fb] px-5 pb-10 sm:px-8 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 -mt-10 grid grid-cols-2 overflow-hidden rounded-lg bg-white shadow-xl md:-mt-16 md:grid-cols-4 md:divide-x md:divide-gray-200">
            {kipData.map((kip, index) => (
              <div
                key={index}
                className="flex flex-col justify-center border-b border-gray-100 p-4 sm:p-6 md:border-b-0 md:p-8"
              >
                <span className="mb-1 block text-2xl font-bold text-[#0a1128] sm:text-3xl md:mb-2 md:text-4xl">
                  <Compteurs fin={kip.value} />
                </span>
                <span className="font-mono text-[11px] text-gray-500 sm:text-xs md:text-sm">
                  {kip.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-3 text-right font-mono text-xs text-gray-400">
            Indicateurs de la maquette – données fictives.
          </p>
        </div>
      </section>
    </>
  );
}