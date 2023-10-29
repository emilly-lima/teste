import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Search() {

    return (
        <section className="flex p-4 flex-row-reverse">
            <div className="flex">
                <FontAwesomeIcon id="search-icon" className="left-[30px] pointer-events-none left-[40px] relative" icon={faMagnifyingGlass} width={25} style={{ color: "var(--secondary)" }} />
                <input type="search" name="search" id="search" />
            </div>
        </section>
    );
}