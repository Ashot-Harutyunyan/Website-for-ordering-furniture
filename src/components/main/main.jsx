import React from 'react'
import { Outlet } from "react-router"

function Main() {
    return (<main className='scrollUp'>
        <Outlet />
    </main>)
}

export default Main