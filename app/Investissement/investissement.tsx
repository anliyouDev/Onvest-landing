"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Check } from "lucide-react"

const entreprises = [
  { nom: "AgriNova CI", pays: "Côte d'Ivoire", collecte: 100, objectif: 250, ticket: 100000 },
  { nom: "SenTech", pays: "Sénégal", collecte: 127.5, objectif: 150, ticket: 250000 },
  { nom: "IvoireExport", pays: "Côte d'Ivoire", collecte: 327.5, objectif: 500, ticket: 500000 },
  { nom: "EcoPower Mali", pays: "Mali", collecte: 224, objectif: 400, ticket: 250000 },
  { nom: "KakaoLab CI", pays: "Côte d'Ivoire", collecte: 96, objectif: 300, ticket: 100000 },
]

const fmt = (n: number, dec = 0) =>
  n.toLocaleString("fr-FR", { minimumFractionDigits: dec, maximumFractionDigits: dec })

export default function Investissement() {
  const [index, setIndex] = useState(2)
  const [montant, setMontant] = useState("500000")
  const [pret, setPret] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setPret(true), 100)
    return () => clearTimeout(t)
  }, [])

  const e = entreprises[index]
  const valeur = Number(montant) || 0
  const valeurM = valeur / 1_000_000

  const avant = (e.collecte / e.objectif) * 100
  const apres = Math.min(((e.collecte + valeurM) / e.objectif) * 100, 100)
  const part = (valeurM / e.objectif) * 100
  const insuffisant = valeur < e.ticket

  const raccourcis = [
    { label: `Min. ${fmt(e.ticket)} FCFA`, valeur: e.ticket },
    { label: "1 M FCFA", valeur: 1_000_000 },
    { label: "2,5 M FCFA", valeur: 2_500_000 },
    { label: "5 M FCFA", valeur: 5_000_000 },
  ]

  return (
    <section className="bg-[#f8f9fb] px-5 py-12 sm:px-8 lg:px-24 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="text-3xl font-bold leading-tight text-[#0a1128] md:text-4xl lg:text-5xl">
            Testez votre intention avant de vous engager.
          </h3>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#4A5568] md:text-base">
            Choisissez une entreprise, saisissez un montant : ONVEST affiche le
            ticket minimum, l&apos;objectif de campagne et l&apos;effet de votre
            montant sur la progression.
          </p>

          <ul className="mt-6 space-y-4 text-sm text-[#0a1128] md:text-base">
            <li className="flex items-center gap-3">
              <Check size={20} className="shrink-0 text-green-600" />
              Aucun paiement, aucune transaction réelle.
            </li>
            <li className="flex items-center gap-3">
              <Check size={20} className="shrink-0 text-green-600" />
              Le ticket minimum est vérifié pour chaque projet.
            </li>
            <li className="flex items-center gap-3">
              <Check size={20} className="shrink-0 text-green-600" />
              Votre intention est enregistrée dans votre historique.
            </li>
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-xl rounded-lg bg-[#0d1628] p-5 text-white shadow-2xl sm:p-8">
            <h2 className="text-2xl font-bold sm:text-3xl">Investir</h2>
            <p className="mt-1 text-sm text-gray-400 sm:text-base">
              Rejoignez les entreprises qui construisent l&apos;économie de demain.
            </p>

            <label className="mt-6 block font-mono text-[11px] uppercase tracking-widest text-[#c9a45c]">
              Entreprise
            </label>
            <div className="relative mt-2">
              <select
                value={index}
                onChange={(ev) => {
                  const i = Number(ev.target.value)
                  setIndex(i)
                  setMontant(String(entreprises[i].ticket))
                }}
                className="w-full appearance-none rounded-md border border-white/10 bg-white/5 px-4 py-3 pr-10 font-medium outline-none focus:border-[#c9a45c]"
              >
                {entreprises.map((en, i) => (
                  <option key={en.nom} value={i} className="bg-[#0d1628]">
                    {en.nom} — {en.pays}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <label className="mt-6 block font-mono text-[11px] uppercase tracking-widest text-[#c9a45c]">
              Montant souhaité (FCFA)
            </label>
            <input
              type="number"
              min={0}
              value={montant}
              onChange={(ev) => setMontant(ev.target.value)}
              className="mt-2 w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 font-mono text-lg outline-none focus:border-[#c9a45c]"
            />
            {insuffisant && (
              <p className="mt-2 font-mono text-xs text-red-400">
                Le montant est inférieur au ticket minimum ({fmt(e.ticket)} FCFA).
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {raccourcis.map((r) => (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => setMontant(String(r.valeur))}
                  className="rounded border border-white/10 px-2.5 py-1.5 font-mono text-[11px] text-gray-300 hover:border-[#c9a45c] hover:text-white sm:text-xs"
                >
                  {r.label}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-white/10 bg-white/5 p-4 text-sm sm:p-5">
              <div className="space-y-3">
                <div className="flex justify-between gap-3">
                  <span className="text-gray-300">Ticket minimum</span>
                  <span className="font-mono font-bold">{fmt(e.ticket)} FCFA</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-gray-300">Objectif de campagne</span>
                  <span className="font-mono font-bold">{fmt(e.objectif)} M FCFA</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-gray-300">Part de l&apos;objectif</span>
                  <span className="font-mono font-bold">{fmt(part, 1)} %</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-gray-300">Progression</span>
                  <span className="font-mono font-bold">
                    {fmt(avant, 1)} % → {fmt(apres, 1)} %
                  </span>
                </div>
              </div>

              <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="absolute left-0 top-0 h-full bg-[#c9a45c] transition-all duration-1000 ease-out"
                  style={{ width: `${pret ? avant : 0}%` }}
                />
                <div
                  className="absolute top-0 h-full bg-green-400 transition-all duration-1000 ease-out"
                  style={{
                    left: `${pret ? avant : 0}%`,
                    width: `${pret ? Math.max(apres - avant, 0) : 0}%`,
                  }}
                />
              </div>

              <div className="mt-3 flex gap-4 font-mono text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#c9a45c]" /> Collecté
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400" /> Votre montant
                </span>
              </div>
            </div>

            <button
              type="button"
              disabled={insuffisant}
              className="mt-8 w-full rounded-md bg-[#c9a45c] py-3 font-bold text-[#0d1628] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continuer
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}