import React from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer'
import UserComponent from './components/userComponent'


class App extends React.Component {

    state = {
        socket: null,
        users: null,
        myStream: null,
        callerStream: null,
        onGoingCall: false,
        callComing :false,
        callAccepted :false,
        callerId:null
    }
    UserVideoRef = React.createRef();
    CallerVideoRef = React.createRef();
    //https://videoaudiochat.herokuapp.com/ server on heroku

    componentDidMount() {
        const socket = io('https://videoaudiochat.herokuapp.com/');
        socket.on('connect', () => {
            console.log("connected at client side");
            this.setState({ socket });
        })

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                this.setState({myStream:stream})
                this.UserVideoRef.current.srcObject = stream;
            }).catch(e => {
                console.log("error state that ", e);
            })

        socket.on('allUsers', (data) => {
            console.log("someone connected or disconnected")
            this.setState({ users: data })
        })

        socket.on('hey',(data)=>{
            this.setState({callComing:true,callerId:data.from,callerStream:data.signal});
        })
    }

    callUser = (userId) => {
        console.log('called usee called to ',userId)
        const peer = new Peer({
            initiator:true,
            trickle:false,
            stream:this.state.myStream
        })

        peer.on('signal',(data)=>{
            this.state.socket.emit('callUser',{callToUser:userId,signal:data,from:this.state.socket.id})
        })

        peer.on('stream',(data)=>{
            this.CallerVideoRef.current.srcObject=data;
        })

        this.state.socket.on('callAccepted',(data)=>{
            peer.signal(data);
            this.setState({callAccepted:true});
        })
    }

    acceptCall=()=>{
      //accept the call here

      const peer = new Peer({
          initiator:false,
          trickle:false,
          stream:this.state.myStream
      })

      this.setState({callComing:false,onGoingCall:true,callAccepted:true})

      peer.on('signal',(data)=>{
        this.state.socket.emit('acceptCall',{  signal:data,from:this.state.socket.id,to:this.state.callerId })
      })

      peer.on('stream',(data)=>{
        this.CallerVideoRef.current.srcObject=data;
      })
      peer.signal(this.state.callerStream);
    }
    render() {
        console.log("component rendered wit state", this.state)
        let usersList=null;
        let CallerVideoComponent=null;
        let callComingComponent=null;

        if(this.state.callComing){
           callComingComponent=(
               <div>
                   <span>{this.state.callerId} is calling you</span>
                   <button onClick={this.acceptCall} >Accept the call</button>
               </div>
           )
        }

        if(this.state.callAccepted){
            CallerVideoComponent= (
                <video style={{ height: 200, width: 200, margin: 5 }} playsInline autoPlay ref={this.CallerVideoRef} ></video>
            )
        }

        if (this.state.users && this.state.socket&&!this.state.onGoingCall) {
            usersList = Object.keys(this.state.users).map((userId) => {
                if (userId === this.state.socket.id) return null;
                return (
                    <UserComponent key={userId} id={userId} onClick={this.callUser} ></UserComponent>
                )
            })
        }
        return (
            <div>
                <span> Video Chat Application </span>
                <video style={{ height: 200, width: 200, margin: 5 }} playsInline muted autoPlay ref={this.UserVideoRef} ></video>
                {CallerVideoComponent}
                {usersList}
                {callComingComponent}
            </div>
        )
    }
}

export default App;