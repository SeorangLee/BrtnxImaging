import React,{useRef} from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf" ;

import './Frame76.scss';
import img1 from "./img/coolicon.png";
import img2 from "./img/coolicon1.png";
import lobe1 from "./img/lobe1.png";
import colorChart from "./img/image 95.png";
import logo from "./img/BTXI_Logo.png";




export default function Frame76(props) {
    const refPDF1 = useRef(null);
    const refPDF2 = useRef(null);
    const refPDF3 = useRef(null);
    const refPDF4 = useRef(null);
    
    const printDocument = async () => {

        const pdf = new jsPDF('p', 'mm');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();

        // print first page
        const item1 = await html2canvas(refPDF1.current);
        const imgData1 = item1.toDataURL('image/png');
    
        pdf.addImage(imgData1, 'JPEG', 0, 0, width, height);
        pdf.addPage();
        
        // print second page
        const item2 = await html2canvas(refPDF2.current);
        const imgData2 = item2.toDataURL('image/png');
    
        pdf.addImage(imgData2, 'JPEG', 0, 0, width, height);
        pdf.addPage();

        //print third page
        const item3 = await html2canvas(refPDF3.current);
        const imgData3 = item3.toDataURL('image/png');
    
        pdf.addImage(imgData3, 'JPEG', 0, 0, width, height);
    
        pdf.save("download.pdf");
        pdf.addPage();

        //print fourth page
        const item4 = await html2canvas(refPDF4.current);
        const imgData4 = item4.toDataURL('image/png');
    
        pdf.addImage(imgData4, 'JPEG', 0, 0, width, height);
    
        pdf.save("download.pdf");

      }



    return (
            <>
        <button style={{display:"absolute",top:0, left:0, width:'50px'}} onClick={window.print}>print with window</button>
        <button style={{display:"absolute",top:0, left:0, width:'50px'}} onClick={printDocument}>print with react-to-pdf</button>
        
        {/* first page */}
        <div className="container" ref={refPDF1}>
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
                    <div className="small-title">
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

            {/* second page */}
            <div className="container" ref={refPDF2}>
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

                {/* small title */}
                <div className="page2-second-div">
                    <div className="small-title">
                        <img src={img1} />
                        <div>Quantification Results</div>
                    </div>

                    {/* first content */}
                    <div className="page2-first-content">
                        <div>
                            <div>Global cortex</div>
                            <div>Frontal cortex</div>
                            <div>Precuneus-PCC</div>
                            <div>Lateral parietal cortex</div>
                            <div>Lateral temporal cortex</div>
                            <div>Medial temporal cortex</div>
                            <div>Occipital cortex</div>
                        </div>
                        <div>
                            <div>SUVR</div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div>
                                <div>min</div>
                                <div>max</div>
                            </div>
                        </div>
                        <div>
                        <div>Centiloid</div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div className="chartBar"></div>
                            <div>
                                <div>0</div>
                                <div>100</div>
                            </div>
                        </div>
                    </div>

                    {/* second content */}
                    <div className="page2-second-content">
                        <div>Regional SUVR</div>
                        <table  border='1' style={{borderCollapse: "collapse"}}>
                            <thead>
                                <tr>
                                    <th>Brain Region</th>
                                    <th>Total</th>
                                    <th>Left</th>
                                    <th>Right</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Grobal</td>
                                    <td>1.60</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    
                </div>
                {/* footer */}
                <div className="footer">
                    <div><img src={logo}/></div>
                    <div>page 2/3</div>
                </div> 
            </div>





            {/* third page */}
            <div className="container" ref={refPDF3}>
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
                    
                {/* first content */}
                <div className="page3-first-content">
                    <div>
                        <div>Regional SUVR</div>
                        <table  border='1' style={{borderCollapse: "collapse"}}>
                            <thead>
                                <tr>
                                    <th>Brain Region</th>
                                    <th>Total</th>
                                    <th>Left</th>
                                    <th>Right</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Grobal</td>
                                    <td>1.60</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr>
                                <tr>
                                    <td>Occipital</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                    <td>0.85</td>
                                </tr> 
                            </tbody>   
                        </table>
                        
                    </div>

                    
                </div>
                {/* second content */}
                <div className="page3-second-content">
                    <div>
                        <div>Regional Centiloid</div>
                        <table  border='1' style={{borderCollapse: "collapse"}}>
                            <thead>
                                <tr>
                                    <th>Brain Region</th>
                                    <th>Total</th>
                                    <th>Left</th>
                                    <th>Right</th>
                                </tr>
                                <tr>
                                    <td>Grobal</td>
                                    <td>88</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Frontal</td>
                                    <td>78</td>
                                    <td>75</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>Cingulate</td>
                                    <td>100</td>
                                    <td>98</td>
                                    <td>102</td>
                                </tr>
                                <tr>
                                    <td>Lat. parietal</td>
                                    <td>52</td>
                                    <td>50</td>
                                    <td>55</td>
                                </tr> 
                                <tr>
                                    <td>Lat. temporal</td>
                                    <td>61</td>
                                    <td>62</td>
                                    <td>60</td>
                                </tr> 
                                <tr>
                                    <td>Occipital</td>
                                    <td>31</td>
                                    <td>30</td>
                                    <td>33</td>
                                </tr>  
                            </tbody>  
                        </table>
                        
                    </div>                    
                </div>              
    
                {/* footer */}
                <div className="footer">
                    <div><img src={logo}/></div>
                    <div>page 3/3</div>
                </div> 

                
            </div>
            {/* fourth page */}
            <div className="container" ref={refPDF4}>
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

                {/* small title */}
                <div className="page2-second-div">
                    <div className="small-title">
                        <img src={img1} />
                        <div>Amyloid-beta PET Image</div>
                    </div>
                </div>

                {/* first content */}
                <div className="page4-first-content"> 
                    <div>Spatially normalized SUVR image</div>
                    
                    <div>
                        <div>
                            <div>
                                {/* lobe picture table 1 */}
                                <div>
                                    <div>뇌1</div>
                                    <div>뇌2</div>
                                    <div>뇌3</div>
                                    <div>뇌4</div>
                                </div>
                                <div>
                                    <div>뇌5</div>
                                    <div>뇌6</div>
                                    <div>뇌7</div>
                                    <div>뇌8</div>
                                </div>
                            </div>
                            <div>chart</div>
                        </div>
                        
                        
                    </div>
                </div>

                {/* second content */}
                <div className="page4-second-content">
                    <div>SUVR rendered on brain surface</div>
                    <div>
                        <div>
                            {/* lobe picture table 2 */}
                            <div>
                                <div>뇌1</div>
                                <div>뇌2</div>
                            </div>
                            <div>
                                <div>뇌3</div>
                                <div>뇌4</div>
                            </div>
                        </div>

                        <div>chart</div>
                    </div>
                </div>
                
                {/* footer */}
                <div className="footer">
                    <div><img src={logo}/></div>
                    <div>page 3/3</div>
                </div> 

                
            </div>
            
        </>
    )
}
