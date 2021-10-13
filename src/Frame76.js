import React from 'react';
//import { render } from "react-dom";
import { renderToString } from "react-dom/server";
// import './Frame76.css';
import './Frame76.scss';
import img1 from "./img/coolicon.png";
import img2 from "./img/coolicon1.png";
import lobe1 from "./img/lobe1.png";
import colorChart from "./img/image 95.png";
import logo from "./img/BTXI_Logo.png";
import jsPDF from "jspdf";

// const targetDiv = () => (

// );

export default function Frame76() {
    
      const colstyle = {
        width: "30%"
      };
      const tableStyle = {
        width: "100%"
      };

    const print = () =>{
        const string = renderToString(<Prints />);
        const pdf = new jsPDF("p", "mm", "a4");
        const columns = [
          "SOW Creation Date",
          "SOW Start Date",
          "Project",
          "Last Updated",
          "SOW End Date"
        ];
        var rows = [
          [
            "Dec 13, 2017",
            "Jan 1, 2018",
            "ABC Connect - ABCXYZ",
             "Dec 13, 2017",
            "Dec 31, 2018"
          ]
        ];
        pdf.fromHTML(string);
        pdf.save("pdf");
    }

    const Prints = () => (
        <div className="container">
                {/* header */}
                <div className="header"> 
                    <div>Last Printed</div>
                    <div>26/07/2021</div>
                </div>

                {/* main title */}
                <div className="main-title"> 
                    <div>
                        <text>BTXBrain-Amyloid</text>
                    </div>
                    <div>
                        <text>AI-based Automatic Amyloid-beta PET Quantification Report</text> 
                    </div>
                </div>

                {/* small first title */}
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

                {/* small second title */}
                <div className="third-div">
                    <div>
                        <img src={img2} />
                        <div>Quantification Results</div>
                    </div>

                    {/* brain table */}
                    <div>
                        {/* lobe one */}
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
                        {/* lobe two */}
                        <div>
                            <div>
                                <img src={lobe1}/>
                                <div>Frontal lobe</div>
                            </div>
                            {/* results number box */}
                            <div className="resultsNumBox"> 
                                <div>
                                    <div>L</div>
                                    <div>1.6</div>
                                </div>
                                <div>
                                    <div>R</div>
                                    <div>1.95</div>
                                </div>
                            </div>
                        </div>
                        {/* lobe three */}
                        <div>
                            <div>
                                <img src={lobe1}/>
                                <div>Parietal lobe</div>
                            </div>
                            {/* results box */}
                            <div className="resultsNumBox"> 
                                <div>
                                    <div>L</div>
                                    <div>1.50</div>
                                </div>
                                <div>
                                    <div>R</div>
                                    <div>1.51</div>
                                </div>
                            </div>
                        </div>
                        {/* lobe four */}
                        <div>
                            <div>
                                <img src={lobe1}/>
                                <div>Temporal lobe</div>
                            </div>
                            {/* results box */}
                            <div className="resultsNumBox"> 
                                <div>
                                    <div>L</div>
                                    <div>1.30</div>
                                </div>
                                <div>
                                    <div>R</div>
                                    <div>1.35</div>
                                </div>
                            </div>
                        </div>
                        {/* lobe five */}
                        <div>
                            <div>
                                <img src={lobe1}/>
                                <div>Occipital lobe</div>
                            </div>
                            {/* results box */}
                            <div className="resultsNumBox"> 
                                <div>
                                    <div>L</div>
                                    <div>1.18</div>
                                </div>
                                <div>
                                    <div>R</div>
                                    <div>1.22</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* color Chart */}
                <div className="colorChart">
                    <div>SUVR</div>
                    <div>
                        <div><img src={colorChart}/></div>
                        <div>
                            <div>1.0</div>
                            <div>1.2</div>
                            <div>1.4</div>
                            <div>1.6</div>
                            <div>1.8</div>
                            <div>2.0</div>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <div className="footer">
                    <div><img src={logo}/></div>
                    <div>page 1/3</div>
                </div>
                
                
            </div>
      );

    return (
        <>
            <div  onClick={print} 
            style={{position:"absolute", top:"0", left:"0", width:"50px", height:"50px", backgroundColor:"red"}}></div>
            <Prints/>
        </>
    )
}
