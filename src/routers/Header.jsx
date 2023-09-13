import React from 'react'
import { Link, Outlet } from "react-router-dom";


export const Header = () => {
    const name = "Usign of context"
  return (
    <>
        <ul>
            <li>
               <Link to= {`/form`} >Formulary</Link>
            </li>
        </ul>
        <Outlet context={[name]}/>
    </>
  )
}
