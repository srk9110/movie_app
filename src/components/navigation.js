import React from 'react';
import {Link} from 'react-router-dom';
import "./navigation.css";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation(){

    //<a href="/">를 사용하면 로드된 페이지라도 전체가 다시 로드됨
    //리액트 전체가 죽었다가 다시 살아남 -> 비효율적 
    return (
        <div className="navibar">
            <Link to="/">
                <FontAwesomeIcon icon={faHome}/>  
            </Link>
        </div>
    );
}

export default Navigation;