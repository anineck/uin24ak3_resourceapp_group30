import { NavLink } from "react-router-dom";

export default function Layout({children}){
    return (
        <>
        <header>
            <nav>
                <ul className="links">
                    <li><NavLink to="/"  exact>html</NavLink></li>
                    <li><NavLink to="/css" >css</NavLink></li>
                    <li><NavLink to="/javascript" >javascript</NavLink></li>
                    <li><NavLink to="/react" >react</NavLink></li>
                    <li><NavLink to="/headless-cms" >headless-cms</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}