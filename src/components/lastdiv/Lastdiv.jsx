import React,{useState} from 'react'
import "./lastdiv.css"
export default function Lastdiv() {
    const [slider1, setslider1] = useState(20)
    const [slider2, setslider2] = useState(30)
    const [slider3, setslider3] = useState(40)
    return (
        <div className="container4 AL-B">
            <div className="left">
            <div className="flexcol AL-B" style={{width:"250px"}}>
            <p className="labelsmedium ">Retirement Strategy</p>
                <p className="labelme mt1">Employee Contribution</p>
                
                <div class="slidecontainer">
                    
                    <input type="range" min="1" max="100" value={slider1} class="slider" onChange={(e)=>{
                        setslider1(e.target.value)
                    }} id="myRange" />
                    <p className="labelsmedium ml1">{slider1}%</p>
                </div>
            </div>

            <div className="flexcol AL-B secondaryborderBottom" style={{width:"250px",paddingBottom:"2rem"}}>
                <p className="labelme mt1">Retirement Age</p>
                
                <div class="slidecontainer">
                    
                    <input type="range" min="1" max="100" value={slider2} class="slider" onChange={(e)=>{
                        setslider2(e.target.value)
                    }} id="myRange" />
                    <p className="labelsmedium ml1">{slider2}%</p>
                </div>
            </div>

            <div className="flexcol AL-B">
                    <div className="flexrow">
                        <p className="labelsmedium">Employer Contribution </p>
                        <p className="labelsmedium ml2">8.4%</p>
                    </div>
                    <div className="flexrow mt1">
                        <p className="labelsmedium">Intrest Rate </p>
                        <p className="labelsmedium ml2">5.4%</p>
                    </div>
            </div>
            </div>
            <div className="primaryButton" style={{alignSelf:"center",width:"100%"}}>
                        <p>Update</p>
            </div>
            <p className="labelsmedium go"  style={{alignSelf:"center",marginTop:"2rem",cursor:"pointer"
                ,color:"#4935FF"
        }}>View Helpful Docs !</p>

        </div>
    )
}
