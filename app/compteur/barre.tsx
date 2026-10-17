"use client"
import { useEffect, useState } from "react";

export default function Barre({ pourcentage }: { pourcentage: number }) {
    const [largeur, setLargeur] = useState(0);

    useEffect(() => {
        const temp = setTimeout(() => setLargeur(pourcentage), 100)
        return () => clearTimeout(temp)
    }, [pourcentage])

    return (<>
        <div
            className="h-full rounded-full bg-[#c9a45c] transition-all duration-[1500ms] ease-linear"
            style={{ width: `${largeur}%` }}
        />
    </>)
}