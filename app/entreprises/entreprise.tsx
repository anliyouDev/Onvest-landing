"use client";

import { ArrowRight, Check, Circle } from "lucide-react";

const steps = [
  {
    title: "Brouillon",
    description: "Profil et informations générales complétés",
    date: "02 oct.",
    status: "completed",
  },
  {
    title: "Soumis",
    description: "Documents téléversés, projet envoyé à ONVEST",
    date: "06 oct.",
    status: "completed",
  },
  {
    title: "En cours d'examen",
    description: "Analyse du dossier par l'équipe ONVEST",
    date: "En cours",
    status: "current",
  },
  {
    title: "Validé ou informations demandées",
    description: "Publication de la campagne après validation",
    date: "—",
    status: "pending",
  },
];

export default function Entreprise() {
  return (
    <section className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 lg:px-16 lg:py-20 xl:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="w-full">
            <p className="mb-4 font-mono text-xs tracking-[0.16em] text-[#D6A544] sm:text-sm">
              POUR LES ENTREPRISES
            </p>

            <h1 className="max-w-[650px] text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-[54px]">
              Votre entreprise cherche des capitaux ?
            </h1>

            <p className="mt-5 max-w-[650px] text-base leading-7 text-[#B9C5D8] sm:text-lg sm:leading-8">
              Présentez votre besoin de financement à une communauté
              d&apos;investisseurs. Chaque dossier est examiné par l&apos;équipe
              ONVEST avant toute publication.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-4">
                <Check size={21} className="mt-0.5 shrink-0 text-[#D6A544]" />
                <span className="text-base leading-6 text-[#E2E8F0] sm:text-lg">
                  Créez votre compte et votre profil entreprise.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Check size={21} className="mt-0.5 shrink-0 text-[#D6A544]" />
                <span className="text-base leading-6 text-[#E2E8F0] sm:text-lg">
                  Déposez votre projet, vos informations financières et vos documents.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <Check size={21} className="mt-0.5 shrink-0 text-[#D6A544]" />
                <span className="text-base leading-6 text-[#E2E8F0] sm:text-lg">
                  Suivez l&apos;état de votre demande puis les résultats de votre campagne.
                </span>
              </li>
            </ul>

            <button
              type="button"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#D0A85E] px-6 py-4 text-base font-semibold text-[#101827] transition duration-300 hover:bg-[#E2BC76] focus:outline-none focus:ring-2 focus:ring-[#D6A544] focus:ring-offset-2 focus:ring-offset-[#0F172A] sm:mt-10 sm:w-auto sm:px-8"
            >
              Présenter mon entreprise
              <ArrowRight size={21} />
            </button>
          </div>

          <div className="w-full rounded-md border border-[#303B51] bg-[#172238] p-5 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 border-b border-[#344056] pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold sm:text-2xl">
                  Dossier AgriNova CI
                </h2>
                <p className="mt-2 font-mono text-xs text-[#94A7C4] sm:text-sm">
                  Exemple de suivi côté entreprise
                </p>
              </div>

              <span className="w-fit shrink-0 rounded-full bg-[#393A3D] px-4 py-2 font-mono text-xs tracking-wide text-[#D6A544]">
                En cours d&apos;examen
              </span>
            </div>

            <div className="pt-6">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex gap-4 pb-7 last:pb-0"
                >
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[17px] top-[35px] h-[calc(100%-25px)] w-px bg-[#3B475D]" />
                  )}

                  <div className="relative z-10 flex h-[36px] w-[36px] shrink-0 items-center justify-center">
                    {step.status === "completed" && (
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#43D98B] text-[#102237]">
                        <Check size={18} strokeWidth={2.5} />
                      </div>
                    )}

                    {step.status === "current" && (
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#D6A544] bg-[#172238] ring-4 ring-[#D6A544]/15">
                        <Circle size={14} fill="#D6A544" stroke="#D6A544" />
                      </div>
                    )}

                    {step.status === "pending" && (
                      <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#526078] bg-[#172238]" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1 pt-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                      <h3
                        className={`text-base font-semibold sm:text-lg ${
                          step.status === "pending" ? "text-[#94A3B8]" : "text-[#F1F5F9]"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <span className="shrink-0 font-mono text-xs text-[#94A7C4] sm:pt-1">
                        {step.date}
                      </span>
                    </div>

                    <p
                      className={`mt-2 text-sm leading-6 sm:text-base ${
                        step.status === "pending" ? "text-[#94A3B8]" : "text-[#94A7C4]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}