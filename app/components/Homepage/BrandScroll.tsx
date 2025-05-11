"use client"
import { get } from "http"

import { useEffect } from "react"

export const BrandScroll = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if(hash){
            const target = document.getElementById(hash.replace("#", ""));
            if(target){ 
                setTimeout(() => {
                    target.scrollIntoView({behavior: "smooth",
                        block: "start"
                    });
                }, 200);
            }
        }
    },[]) 

    return null;
}