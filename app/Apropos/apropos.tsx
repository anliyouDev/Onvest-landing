import {
  Eye,
  ShieldCheck,
  DoorOpen,
  TrendingUp,
  Globe,
  TriangleAlert,
} from "lucide-react";

const principles = [
  {
    title: "Transparence",
    description:
      "Des informations claires et structurées, avec les risques associés toujours visibles.",
    icon: Eye,
  },
  {
    title: "Sécurité",
    description:
      "Données personnelles, financières et documents protégés, accès contrôlés par rôle.",
    icon: ShieldCheck,
  },
  {
    title: "Accessibilité",
    description:
      "Un parcours simple pour investir ou présenter son entreprise, sur ordinateur comme sur mobile.",
    icon: DoorOpen,
  },
  {
    title: "Opportunités",
    description:
      "Des dossiers examinés par ONVEST avant publication, dans plusieurs secteurs et pays.",
    icon: TrendingUp,
  },
  {
    title: "Impact économique",
    description:
      "Chaque financement soutient des entreprises locales, des emplois et l'économie réelle.",
    icon: Globe,
  },
];

export default function Apropos() {
  return (
    <section className="bg-[#F7F9FC] px-5 py-12 text-[#0A1628] sm:px-8 lg:px-14 lg:py-16">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-8 grid grid-cols-1 gap-4 md:mb-10 md:grid-cols-2 md:items-center md:gap-5">
          <h2 className="max-w-[650px] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
            Une plateforme construite sur la confiance.
          </h2>

          <p className="max-w-[540px] text-sm leading-6 text-[#536782] sm:text-base md:justify-self-end">
            Cinq principes guident chaque écran, chaque dossier et chaque
            décision de la plateforme.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className="rounded-md border border-[#DCE3ED] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#F5EDE1]">
                  <Icon size={20} strokeWidth={1.8} className="text-[#946B19]" />
                </div>

                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  {principle.title}
                </h3>

                <p className="text-sm leading-6 text-[#536782] sm:text-[15px]">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-md border border-[#E9D9C1] bg-[#F5EDE1] p-5 sm:p-8 lg:mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
            <TriangleAlert
              size={27}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-[#946B19]"
            />

            <div>
              <h3 className="mb-2 text-lg font-semibold">Avant d&apos;investir</h3>

              <p className="text-sm leading-6 text-[#536782] sm:text-[15px]">
                L&apos;investissement dans des entreprises non cotées comporte
                des risques : perte partielle ou totale du capital investi,
                risque d&apos;illiquidité (difficulté à revendre ses titres) et
                rendement non garanti.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#536782] sm:text-[15px]">
                Nous recommandons de diversifier vos investissements, de
                n&apos;investir qu&apos;une partie de votre épargne disponible et de
                lire l&apos;ensemble de la documentation de chaque projet avant
                toute décision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}