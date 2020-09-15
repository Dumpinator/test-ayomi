import React from 'react';
import './Panel.css';
import { MdMailOutline, MdPhone, MdLocationOn, MdStar, MdGroup, MdCardMembership, MdDomain, MdEqualizer, MdFolderShared, MdBusinessCenter } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Panel = (props) => {
    console.log(props);
    return (
        <div className="container">
            <div className="panel">
                <div className="card">
                    <div className="icon-edit"><FaEdit  /></div>
                    <div className="avatar">
                        <div className="circle-avatar" style={{ backgroundImage: `url(${props})` }}></div>
                        <div>Jonathan</div>
                        <div>de BOISVILLIERS</div>
                    </div>
                    <div className="icons-content">
                        <div className="icons-contact" style={{ paddingTop: "10px" }}><MdMailOutline />jdeboisvilliers@gmail.com</div>
                        <div className="icons-contact"><MdPhone />+33 (0)7 69 41 30 47</div>
                        <div className="icons-contact"><MdLocationOn />83 Avenue Simon Bolivar</div>
                        <div className="icons-contact" style={{ display: "block" }}>75019 Paris</div>
                    </div>
                    <div className="datas-content">
                        <div className="icons-datas"><MdStar style={{ color: "#E7AF4E" }}/>19</div>
                        <div className="icons-datas"><MdCardMembership style={{ color: "#8FCD68" }}/>4</div>
                        <div className="icons-datas"><MdGroup style={{ color: "#47B4F1" }}/>13</div>
                    </div>
                    <div className="progress-bar-content">
                        <div className="progress-bar"><progress min="0" max="100" value="76"></progress></div>
                        <div className="progress-info">Profil complété : 76%</div>
                    </div>
                </div>
                <div className="links-btn">
                    <div className="link-btn" style={{ backgroundColor: "#6757EF", color: "white" }}><a><MdEqualizer style={{ color: "white" }}/>Tableau de bord</a></div>
                    <div className="link-btn"><a><MdBusinessCenter />Portefeuille</a></div>
                    <div className="link-btn"><a><MdDomain />Mon entreprise</a></div>
                    <div className="link-btn"><a><MdFolderShared />Projets associés</a></div>
                </div>
                <div className="bg-fake"></div>
            </div>
        </div>
    );
}

export default Panel;
