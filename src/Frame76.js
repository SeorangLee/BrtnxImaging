import React from 'react';
// import './Frame76.css';
import './Frame76.scss';
import img1 from "./img/coolicon.png";
import img2 from "./img/coolicon1.png";
import lobe1 from "./img/lobe1.png";
import lobe2 from "./img/lobe1.png";
import lobe3 from "./img/lobe1.png";
import lobe4 from "./img/lobe1.png";
import lobe5 from "./img/lobe1.png";


export default function Frame76() {

    return (
        <>
            <div  onClick={()=>window.print()} 
            style={{position:"absolute", top:"0", left:"0", width:"50px", height:"50px", backgroundColor:"red"}}></div>
            <div className="container">
                <div> 
                    <div>
                        <text className="ftBoldTitle">BTXBrain-Amyloid</text>
                    </div>
                    <div>
                        <text className="ftNomTitle">AI-based Automatic Amyloid-beta PET Quantification Report</text> 
                    </div>
                </div>
                <div className="second-div">
                    <div>
                        <img src={img1} />
                        <div>Patient Information</div>
                    </div>
                    <div>
                        <div>
                            <div>Patient ID</div>
                            <div>Name</div>
                            <div>Date of birth</div>
                            <div>Gender</div>
                            <div>Study description</div>
                            <div>Study date</div>
                        </div>
                        <div>
                            <div>123123</div>
                            <div>BRTNX</div>
                            <div>123123</div>
                            <div>Male</div>
                            <div>Florbetaben</div>
                            <div>2016.0x0x0</div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="third-div">
                    {/* third title */}
                    <div>
                        <img src={img2} />
                        <div>Quantification Results</div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={lobe1}/>
                                <div>Global lobe</div>
                            </div>
                            <div>
                                <div>Bilateral</div>
                                <div>1.60</div>
                            </div>
                        </div>
                        <div>
                            <img src={lobe1}/>
                            <div>Frontal lobe</div>
                        </div>
                        <div>
                            <img src={lobe1}/>
                            <div>Parietal lobe</div>
                        </div>
                        <div>
                            <img src={lobe1}/>
                            <div>Temporal lobe</div>
                        </div>
                        <div>
                            <img src={lobe1}/>
                            <div>Occipital lobe</div>
                        </div>
                    </div>
        
                </div>

                {/* <div className="block">
                    <img src="./cocolicon1.png"/>
                    <text className="secondTitle">Quantification Results</text>
                </div>

                <div>
                    <text className="tableText">Table</text>
                </div>
                <div className="foot">
                    <img src="./coolicon.png"/>
                    <text>BRIGHTTONIXIMAGING</text>
                </div> */}
                <div className="footer">Hello</div>
            </div>
        </>
    )
}
