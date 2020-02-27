import React, {Component} from 'react';
import Report from 'bv-react-data-report';
import ProxyServices from "../../Service/ProxyServices";
import CanvasJSReact from '../../library/canvasjs.react';
import SockJsClient from 'react-stomp';
import {NotificationManager} from "react-notifications";

export class Reporting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            statistic: [],
            approvalstatistic: [],
            blognumberpercategory: [],
            rownum: 0
        }

        this.setReport = this.setReport.bind(this);
    }

    setReport = function(message){
        console.log("Message from stomp:", message);
        this.setState({approvalstatistic: message});
    }


    componentDidMount() {
        ProxyServices.getStatistic()
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                this.setState({statistic: json})
            }).catch(() => {
        })

        ProxyServices.getBlogNumberPerCategory()
            .then(response => response.data)
            .then((json) => {
                this.setState({blognumberpercategory: json})
            }).catch(() =>{

            });

        ProxyServices.getApprovalStatistic()
            .then(response => response.data)
            .then((json) => {
                this.setState({approvalstatistic: json})
            }).catch(() =>{

        });
    }

    render() {
        return (
            <div>
                <div className="row">

                    <div className="col-md-12" style={{marginTop:'20px', marginLeft: '10px', marginRight: '15px'}}>
                        <div className="card" style={{marginTop:'20px', marginLeft: '10px', marginRight: '30px'}}>
                            <div className="card-header"><center><b>BLOG DASHBOARD</b></center></div>
                            <div className="card-body">
                                <div className="row align-content-center">
                                    <div className="col-md-6 align-content-center"><BlogCategories data={this.state.blognumberpercategory}/></div>
                                    <div className="col-md-6 align-content-center"><ApprovalMonitoring data={this.state.approvalstatistic} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row" style={{marginTop:'20px', marginLeft: '10px', marginRight: '15px'}}>
                    <div className="col-md-2"></div>
                    <div className="col-md-6" style={{marginTop:'20px', marginLeft: '0px', marginRight: '15px'}}>
                        <Report data={this.state.statistic} opening={(<h1>This is an opening content.</h1>)} closing={(<h1>This is a closing content.</h1>)}/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div>
                    <SockJsClient url='http://localhost:8087/stomp' topics={['/topic/statistic']}
                                  onMessage={(msg) => {
                                      console.log("Message from websocket:",msg);
                                      this.setReport(msg);

                                  }}/>
                </div>
            </div>
        );
    }
}

class BlogCategories extends React.Component{
    render() {

        let approved = 25;
        let inprogress = 12;
        let rejected = 5;

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark2",
            title:{
                text: "Blog Number Per Category"
            },
            data: [{
                type: "bar",
                indexLabel: "{y}%",
                startAngle: -90,
                dataPoints: this.props.data
            }]
        }

        return (
            <div>
                <CanvasJSReact.CanvasJSChart options = {options}/>
            </div>
        );
    }
}

class ApprovalMonitoring extends React.Component{
    render() {

        let microservices = 125;
        let webapplication = 15;
        let backend = 55;

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark2",
            title:{
                text: "Approval Statistic"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,
                dataPoints: this.props.data
            }]
        }

        return (
            <div>
                <CanvasJSReact.CanvasJSChart options = {options}/>
            </div>
        );
    }
}

export default Reporting;

