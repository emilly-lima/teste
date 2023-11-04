"use client"

import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
    const lupa = React.useRef(null);
    const ctexto = React.useRef(null);

    React.useEffect(()=>{
        lupa.current.addEventListener('click', ()=>{
            ctexto.current.focus();
        });
    }, []);

    return (
        <div className="flex relative">
            <input type="text" ref={ctexto} name="search" id="search" placeholder="Busque um jogo..." className="rounded-lg p-2 outline-none pr-8 w-8 sm:w-full focus:w-full transition-all cursor-pointer ease-in-out duration-300 direction-alternate origin-right" />
            <FontAwesomeIcon ref={lupa} icon={faMagnifyingGlass} width={20} className="absolute right-2 top-[25%]" />
        </div>
    );
}