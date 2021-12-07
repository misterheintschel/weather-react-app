import React, { Component } from 'react';
import logo from '../weather-icon.png';
import phone from '../resources/weather-icons/phone.gif';
import alert from '../resources/weather-icons/alert.gif';

class Alerts extends Component {
  constructor(props){
    super(props)
  }

    timeCalc = (time) => {

      time = time.split(':'); // convert to array

      // fetch
      var hours = Number(time[0]);
      var minutes = Number(time[1]);
      var seconds = Number(time[2]);

      // calculate
      var timeValue;

      if (hours > 0 && hours <= 12) {
        timeValue= "" + hours;
      } else if (hours > 12) {
        timeValue= "" + (hours - 12);
      } else if (hours == 0) {
        timeValue= "12";
      }

      timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
      timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

      return timeValue;
    }


  displayAlerts = (alerts) => {



    if(alerts != undefined){
      return (
        alerts.map((element,index) => (
          <div className="Alert" key={index}>
            <div className="alert-element">
              <div className="alert-values">
                <img id="phone" src={phone}></img>
                <img id="phone2" src={phone}></img>
                <img id="alertgif" src={alert}></img>
                <h2 id="event"><span>{element.event}</span></h2>
                <p id="sender">Sender: <span>{element.sender_name}</span></p>
                <p id="descriptiona">Description: {element.description}</p>
              </div>
              <div className="alert-times">
                <p id="starts">Starts: <br/>{new Date(element.start * 1000).toString().substr(0,16)}<br/><span>{this.timeCalc((new Date(element.start * 1000).toString().substr(16,9)))}</span></p>
                <p id="ends">Ends: <br/>{new Date(element.end * 1000).toString().substr(0,16)}<br/><span>{this.timeCalc((new Date(element.end * 1000).toString().substr(16,9)))}</span></p>
              </div>
            </div>
          </div>
        ))
      )
    }
    else return (
      <div className="no-Alert">
        <h4>THERE ARE CURRENTLY NO WEATHER ALERTS FOR THIS LOCATION</h4>
      </div>
    )



  }

  render(){
    return (
      <>
        {this.displayAlerts(this.props.alerts)}
      </>
    )
  }
}

export default Alerts;
