import React from 'react'
import "./maindiv.style.css"
import {Bar,Doughnut} from "react-chartjs-2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ChartDonut } from '@patternfly/react-charts';


export default function maindiv() {
    const barChartData = {
        labels: ['10', '20', '30', '40', '50', '60', '70','80', '90', '100', '120'],
        datasets: [
        {
        label: 'Active',
        backgroundColor: '#08019c',
        stack: '2',
        data: [100, 200, 100, 200, 50, 60, 100, 200, 80, 100, 200, 100],
        },
        {
        label: 'Banned',
        backgroundColor: '#4936fb',
        stack: '2',
        data: [100, 200, 100, 200, 50, 60, 100, 200, 80, 100, 200, 100],
        },
        {
            label: 'Banned',
            backgroundColor: '#84afff',
            stack: '2',
            data: [200, 100, 80, 60, 100, 80, 200, 60, 160, 200, 300, 90],
            },

        ],
        };
        
        const barChartOptions = {
            responsive: true,
            
        legend: {
        display: false,
        },
        scales: {
        xAxes: [
        {
        stacked: true,
        barPercentage: 0.4
        },
        ],
        yAxes: [
        {
        stacked: true,
        },
        ],
        },
        };

        const ddata = {
            
            datasets: [{
                data: [70,20],
                backgroundColor: [
                '#69ffd9',
                '#a2fae4',
                '#FFCE56'
                ]
            }],
           
        };
        var options = {        
            cutoutPercentage: 80,
            centerText: {
                display: true,
                text: `90%`
            }
        };
    return (
        <div className="container2">
            <div className="flexcol AL-B">
                <p className="smallPHead">Retirement Income</p>
                <p className="labelmedium">Starting Year 2056</p>
            </div>

            <div className="flexrow mt1 mobrow">
                
                <div className=" flexcol primaryborderBottom AL-B mr2">
                    <p className="labelmedium">$300,000</p>
                    <p className="labelsm">My Goal</p>
                </div>
                <div className="flexrow">
                <div className="flexcol primaryborderBottom AL-B mr2">
                        <p className="labelmedium">59%</p>
                        <p className="labelsm">Goal Achived</p>
                    </div>
                    <div className="flexcol primaryborderBottom AL-B mr2">
                        <p className="labelmedium">$300</p>
                        <p className="labelsm">Est, Monthly Income</p>
                    </div>
                </div>
                    
                
                
            </div>
            

            <div className="chartCont">
                <p className="labelsmedium">Contributions Overtime</p>
                
                <div className="flexrow mt1 mobcont">
                    <div className="flexrow mr1 mobrow">
                        <div className="dot"></div>
                        <p className="labelsm mr05 ml05" >Employer:  </p>
                        <p className="labelme">K 73,500</p>
                    </div>

                    <div className="flexrow mr1 mobrow">
                        <div className="dot" style={{backgroundColor:"#4936fb"}}></div>
                        <p className="labelsm mr05 ml05" >Employee:  </p>
                        <p className="labelme">K 73,500</p>
                    </div>

                    <div className="flexrow mr1 mobrow">
                        <div className="dot" style={{backgroundColor:"#84afff"}}></div>
                        <p className="labelsm mr05 ml05" >Total Intrest:  </p>
                        <p className="labelme">K 73,500</p>
                    </div>

                </div>
                <div style={{marginTop:"1rem"}} className="wraper">
                 <Bar data={barChartData} options={barChartOptions} width="500px" height="250px"/>
                </div>
                
            </div>

            <div className="flexcol AL-B">
                <div className="flexcol AL-B">
                    <p className='labelsmedium'>How do i compare to my peers?</p>
                    <p className="labelsm">These numbers represent current goal achivement</p>
                </div>

                <div className="flexrow mobrow">
                    <div className="flexcol AL-B">
                        <div className="flexrow secondaryborderBottom line" style={{padding:"0.5rem"}} >
                            <p className="labelsmb mr05">Age:</p>
                            <p className="labelsm mr05">Under 30</p>
                            <FontAwesomeIcon
                            icon={faCaretDown}
                            color={'rgba(116, 115, 115, 0.5)'}
                            style={{ fontSize: '1rem' }}
                             />
                        </div>
                        <div className="flexrow secondaryborderBottom line" style={{padding:"0.5rem"}} >
                            <p className="labelsmb mr05">Salary:</p>
                            <p className="labelsm mr05">K 20-K 30</p>
                            <FontAwesomeIcon
                            icon={faCaretDown}
                            color={'rgba(116, 115, 115, 0.5)'}
                            style={{ fontSize: '1rem' }}
                             />
                        </div>
                        <div className="flexrow secondaryborderBottom line" style={{padding:"0.5rem"}} >
                            <p className="labelsmb mr05">Gender:</p>
                            <p className="labelsm mr05">Male</p>
                            <FontAwesomeIcon
                            icon={faCaretDown}
                            color={'rgba(116, 115, 115, 0.5)'}
                            style={{ fontSize: '1rem' }}
                             />
                        </div>
                    </div>
                    <div className="flexrow mobcol">
                    <div className="flexcol" >
                        <ChartDonut
                        ariaDesc="Average number of pets"
                        ariaTitle="Donut chart example"
                        constrainToVisibleArea={true}
                        data={[{ x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
                        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                        title="75%"
                        colorScale={['#69ffd9','#a2fae4',
                        ]}
                        height={130}
                        width={130}

                        />
                        <p className="labelsmb ">average</p>
                    </div>

                    <div className="flexcol">
                        <ChartDonut
                        ariaDesc="Average number of pets"
                        ariaTitle="Donut chart example"
                        constrainToVisibleArea={true}
                        data={[{ x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
                        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                        title="56%"
                        colorScale={['#69ffd9','#a2fae4',
                        ]}
                        height={130}
                        width={130}

                        />
                        <p className="labelsmb ">Top</p>
                    </div>

                    <div className="flexcol">
                        <ChartDonut
                        ariaDesc="Average number of pets"
                        ariaTitle="Donut chart example"
                        constrainToVisibleArea={true}
                        data={[{ x: 'Dogs', y: 55 }, { x: 'Birds', y: 50 }]}
                        labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                        title="89%"
                        colorScale={['#69ffd9','#a2fae4',
                        ]}
                        height={130}
                        width={130}

                        />
                        <p className="labelsmb ">Me</p>
                    </div>
                    </div>
                    
                </div>


            </div>
            
        </div>
    )
}
