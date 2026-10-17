import "./globals.css"
import Navbar from "./navbar/navbar"
import Opportunite from "./opportunite/opportunite"
import Commentcamarche from "./comment ca marche/comment_ca_marche"
import Investissement from "./Investissement/investissement"
import Entreprise from "./entreprises/entreprise"
import Apropos from "./Apropos/apropos"
import Entrepreunariat from "./entrepreunariat/entrepreunariat"
import Footer from "./footer/footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="overflow-x-hidden bg-[#050B14]">
        <Navbar />

        <main className="pt-20 lg:pt-24">
          {children}

          <div id="opportunite">
            <Opportunite />
          </div>

          <div id="comment-ca-marche">
            <Commentcamarche />
          </div>

          <div id="investissement">
            <Investissement />
          </div>

          <div id="entreprises">
            <Entreprise />
          </div>

          <div id="a-propos">
            <Apropos />
          </div>

          <div id="entrepreunariat">
            <Entrepreunariat />
          </div>

          <Footer />
        </main>
      </body>
    </html>
  )
}