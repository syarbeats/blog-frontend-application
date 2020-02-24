import React from 'react';
import Todo from "./Todo";
import InProgress from "./InProgress";
import Done from "./Done";
import queryString from "query-string";
import ProxyServices from "../../Service/ProxyServices";

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

import SockJsClient from 'react-stomp';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class BlogApproval extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            id : 0,
            todo: [],
            inprogress: [],
            done: [],
            latestMessage: '',
            message: ''
        }

        this.getAllApprovalData = this.getAllApprovalData.bind(this);
        this.showNotification = this.showNotification.bind(this);
        this.errorOnSocket = this.errorOnSocket.bind(this);
    }

    showNotification = function(message){
        console.log("Message from stomp:", message);
        this.setState({message: message});
        NotificationManager.info(message);
    }

    errorOnSocket(message){
        console.log("Message from stomp:", message);
    }

    componentDidMount() {

        let params = queryString.parse(this.props.location.search);
       /* console.log("PARAMS:",params.id);
        console.log("PARAMS:",params.status);
        console.log("PARAMS:",params.progress);
        console.log("Update STATUS...", params.id, params.status,params.progress)*/

       console.log("ComponentDidAmount...[BlogApproval] - ID:", params.id);

        if(params.id){
            ProxyServices.updateProgressStatus(params.id, params.status, params.progress)
                .then(response => response.data)
                .then((json) => {
                    //console.log("Response:", JSON.stringify(json));
                    this.setState({blogs: json});
                    this.getAllApprovalData('To Do');
                    this.getAllApprovalData('In Progress');
                    this.getAllApprovalData('Done');
                    //ProxyServices.sendNotification("Test");
                    //console.log("BLOGS:", (this.state.blogs));
                }).catch(() => {
            })
        }else {
            this.getAllApprovalData('To Do');
            this.getAllApprovalData('In Progress');
            this.getAllApprovalData('Done');
        }

        /*var sock = new SockJS('http://localhost:8087/stomp');
        let stompClient = Stomp.over(sock);

        sock.onopen = function() {
            console.log('open');
        }

        stompClient.connect({headers: headers}, function(frame){
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/message', function (greeting) {
                console.log(greeting);
                test = greeting;
            });
        });*/

    }

    getAllApprovalData(progress){
        ProxyServices.getAllApprovalData(progress)
            .then(response => response.data)
            .then((json) => {
                console.log("Response:", JSON.stringify(json));
                if(progress == 'To Do'){
                    this.setState({todo: json});
                }else if(progress == 'In Progress')
                {
                    this.setState({inprogress: json});
                }
                else {
                    this.setState({done: json});
                }

            }).catch(() => {
        })
    }

    render() {

        return(
            <div>
                <div className="row justify-content-md-center" style={{marginTop:'20px', marginLeft: '10px', marginRight: '15px'}}>
                    <b>BLOG APPROVAL PROCESS [{this.state.message}]</b>
                    <NotificationContainer/>

                </div>
                <div className="row" style={{marginTop:'20px', marginLeft: '10px', marginRight: '15px'}}>
                    <div className="col-md-4  btn-primary">
                        <div className="card-header"><center><b>TO DO</b></center></div>
                    </div>
                    <div className="col-md-4 btn-secondary">
                        <div className="card-header"><center><b>IN PROGRESS</b></center></div>
                    </div>
                    <div className="col-md-4 btn-info">
                        <div className="card-header"><center><b>DONE</b></center></div>
                    </div>
                </div>
                <div className="row" style={{marginTop:'20px', marginLeft: '10px', marginRight: '10px'}}>
                    <div className="col-md-4">
                        <Todo todo={this.state.todo}/>
                    </div>
                    <div className="col-md-4">
                        <InProgress inprogress={this.state.inprogress}/>
                    </div>
                    <div className="col-md-4">
                        <Done done={this.state.done}/>
                    </div>
                </div>
                <div>
                    <SockJsClient url='http://localhost:8087/stomp' topics={['/topic/message']}
                                  onMessage={(msg) => {
                                      console.log("Message from websocket:",msg);
                                      this.showNotification(msg);

                                  }}/>
                </div>
                <div>

                </div>
            </div>


        );
    }
}

export default BlogApproval;

