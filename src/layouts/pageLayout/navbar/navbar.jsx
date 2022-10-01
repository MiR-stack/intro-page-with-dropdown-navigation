import Nav from "./nav/nav"
import data from './data'
import './navbar.scss'
import {ReactComponent as Menu} from '../../../assets/images/icon-menu.svg'
import {ReactComponent as Close} from '../../../assets/images/icon-close-menu.svg'
import Transparent_Bg from "../../../components/shared/transparent_bg/transparent_bg"
import { useState } from "react"

const Navbar = ()=>{

    const [nav,setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

    return <nav>
        <div className="brand_name">snap</div>
        <Transparent_Bg triger={nav} handleTriger={handleNav} />
        <div className={`wraper ${nav?'nav-show':''}`}>
            <div className="close">
                <Close onClick={handleNav} />
            </div>
            <Nav data={data} />
            <div className="authentication">
                <button className="login">login</button>
                <button className="registration">registration</button>
            </div>
        </div>
        <div className="menu">
            <Menu onClick={handleNav} />
        </div>
    </nav>
}

export default Navbar;