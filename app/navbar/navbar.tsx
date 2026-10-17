"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import Logo from "../../public/logo_caré-fond_noir-removebg-preview.png"

const liens = [
  { label: "Opportunité", href: "#opportunite" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Pour les entreprises", href: "#entreprises" },
  { label: "À propos", href: "#a-propos" },
]

export default function Navbar() {
  const [ouvert, setOuvert] = useState(false)

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0d1628] text-white shadow-xl">
      <div className="flex h-20 items-center justify-between px-5 lg:h-24 lg:px-10">
        <Link href="/" className="shrink-0">
          <Image src={Logo} alt="Logo Onvest" width={65} height={65} />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
          {liens.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="whitespace-nowrap text-sm uppercase transition-colors hover:text-[#c9a45c] xl:text-lg"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="#"
            className="whitespace-nowrap text-sm uppercase transition-colors hover:text-[#c9a45c] xl:text-lg"
          >
            Connexion
          </Link>
          <Link
            href="#"
            className="whitespace-nowrap rounded bg-[#c9a45c] px-5 py-2 text-sm font-semibold uppercase text-[#0d1628] hover:opacity-90 xl:text-lg"
          >
            Inscription
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOuvert(!ouvert)}
          className="lg:hidden"
        >
          {ouvert ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {ouvert && (
        <div className="border-t border-white/10 bg-[#0d1628] px-5 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {liens.map((l) => (
              <li key={l.href} className="border-b border-white/10">
                <Link
                  href={l.href}
                  onClick={() => setOuvert(false)}
                  className="block py-4 uppercase hover:text-[#c9a45c]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="#"
              onClick={() => setOuvert(false)}
              className="rounded border border-white/40 py-3 text-center font-semibold uppercase"
            >
              Connexion
            </Link>
            <Link
              href="#"
              onClick={() => setOuvert(false)}
              className="rounded bg-[#c9a45c] py-3 text-center font-semibold uppercase text-[#0d1628]"
            >
              Inscription
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}