import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faHome,faListAlt,faAddressCard,faUser,faBell,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import "./sidenav.styles.css"

export default function Sidenav() {
    const [color, setcolor] = useState("#696969")
    return (
        <div className="sidecont">
            <div className="flexcol one">
                <img className="logo" src="https://img.icons8.com/fluent/96/000000/butterfly-side-view.png"/>
                <FontAwesomeIcon icon={faSearch} color={"#808080"} style={{fontSize:"1.5rem"}} />
            </div>
           

            <div className="flexcol two">
                <div className="icon-button">
                    <FontAwesomeIcon className="icon" icon={faHome} color="#808080"  />
                </div>
                <FontAwesomeIcon className="icon" icon={faListAlt} color="#808080"  />
                <FontAwesomeIcon className="icon" icon={faAddressCard} color="#808080"   />
                <FontAwesomeIcon className="icon" icon={faUser} color="#808080"  />
            </div>

            <div className="flexcol three">
            <FontAwesomeIcon className="icon" icon={faBell} color="#808080"  />
            <FontAwesomeIcon className="icon" icon={faSignOutAlt} color="#808080"   />
            </div>
            
        </div>
    )
}
