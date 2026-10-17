"use client"

import { useEffect,useState } from "react"
export default function Compteurs({fin,duree=1500,decimale=0}:{fin:number ; duree?:number ; decimale?:number}) {
    const [valeur, setValeur] = useState(0);
    useEffect(()=>{
        const debut = performance.now();
        let frame: number;

        const animer = (maintenant: number)=> {
                const progression = Math.min((maintenant - debut)/duree,1);
                setValeur(Number((progression*fin).toFixed(decimale)));
                if (progression < 1) {
                    frame = requestAnimationFrame(animer);
                }
        };
        frame = requestAnimationFrame(animer);
        return() => cancelAnimationFrame(frame);
    },[fin,duree,decimale])
    return (<>
                {valeur.toLocaleString("fr-FR",{
                    minimumFractionDigits: decimale,
                    maximumFractionDigits: decimale,
                })}
           </>)
}