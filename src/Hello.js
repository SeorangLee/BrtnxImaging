import React, {useRef} from 'react';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Hello(props) {
  const refPDF1 = useRef(null);
  const refPDF2 = useRef(null);

  const printDocument = async () => {
    const pdf = new jsPDF('p', 'mm');
    debugger;
    const width = pdf.internal.pageSize.getWidth();
    const height = pdf.internal.pageSize.getHeight();

    const item1 = await html2canvas(refPDF1.current);
    const imgData1 = item1.toDataURL('image/png');

    pdf.addImage(imgData1, 'JPEG', 0, 0, width, height);

    pdf.addPage();

    const item2 = await html2canvas(refPDF2.current);
    const imgData2 = item2.toDataURL('image/png');

    pdf.addImage(imgData2, 'JPEG', 0, 0, width, height);

    pdf.save("download.pdf");
  }

  return (
    <div className="Container5">
      <div className="Container5-Header">
        Header
        <button onClick={printDocument}>Print</button>
      </div>
      <div className="Container5-Body">

        <div ref={refPDF1} style={{
          backgroundColor: '#f5f5f5',
          width: '210mm',
          minHeight: '297mm',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: "10px red solid",
          marginTop:"15%",
          color:"black",
          fontSize:"30px"
        }}>
          <div>Hello11</div>
          abcdef
        </div>


        <div ref={refPDF2} style={{
          backgroundColor: '#f5f5f5',
          width: '210mm',
          minHeight: '297mm',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: "10px blue solid",
          marginTop:"15%",
          color:"black",
          fontSize:"30px"
        }}>
          <div>Hello22</div>
          abcdef
        </div>



      </div>
    </div>
  )
}
export default Hello;