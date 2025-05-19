import logo from './logo.svg';
import './App.css';
import Search from './Search';
import OnlineServerInfo from './OnlineServerInfo';
import OfflineServerInfo from './OfflineServerInfo';
import Suggestions from './Suggestions';
import { useState } from 'react';

function App() {

  //API used: https://api.mcsrvstat.us/
  
  const [OnlineservInfo, setOnlineServInfo] = useState([]);
  const [OfflineservInfo, setOfflineServInfo] = useState([]);

  //possibly update to support bedrock servers as well
  function ServerSearch(e){
    e.preventDefault();

    if(document.getElementById("ServerURL").value.length == 0){
      alert("You left the input blank!");
      return;
    }

    let url = "";

    if(document.getElementById("bedrockToggle").checked){
      url = "https://api.mcsrvstat.us/bedrock/3/" + document.getElementById("ServerURL").value;
    }
    else{
      url = "https://api.mcsrvstat.us/3/" + document.getElementById("ServerURL").value;
    }

    var xhttp = new XMLHttpRequest();

    //info is sent as JSON, save it to servInfo
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //check if server is online or not
        console.log(JSON.parse(this.responseText))
        if(JSON.parse(this.responseText).online){
          setOnlineServInfo([].concat(JSON.parse(this.responseText)));
          setOfflineServInfo([]);
        }
        else{
          setOfflineServInfo([].concat(JSON.parse(this.responseText)));
          setOnlineServInfo([]);
        }
      }
    };
    
    //send a get request
    xhttp.open("GET", url, true);
    xhttp.send();

    document.getElementById("ServerURL").value = "";
  }

  function SuggestedSearchJava(e){
    //here is the URL to get minecraft server info
    let url = "https://api.mcsrvstat.us/3/" + e.target.innerHTML;

    var xhttp = new XMLHttpRequest();

    //info is sent as JSON, save it to servInfo
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //check if server is online or not
        console.log(JSON.parse(this.responseText))
        if(JSON.parse(this.responseText).online){
          setOnlineServInfo([].concat(JSON.parse(this.responseText)));
          setOfflineServInfo([]);
        }
        else{
          setOfflineServInfo([].concat(JSON.parse(this.responseText)));
          setOnlineServInfo([]);
        }
      }
    }
    //send a get request
    xhttp.open("GET", url, true);
    xhttp.send();

  }
    

  function SuggestedSearchBedrock(e){
    //here is the URL to get minecraft server info
    let url = "https://api.mcsrvstat.us/bedrock/3/" + e.target.innerHTML;

    var xhttp = new XMLHttpRequest();

    //info is sent as JSON, save it to servInfo
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        //check if server is online or not
        console.log(JSON.parse(this.responseText))
        if(JSON.parse(this.responseText).online){
          setOnlineServInfo([].concat(JSON.parse(this.responseText)));
          setOfflineServInfo([]);
        }
        else{
          setOfflineServInfo([].concat(JSON.parse(this.responseText)));
          setOnlineServInfo([]);
        }
      }
    }
    //send a get request
    xhttp.open("GET", url, true);
    xhttp.send();
  }

  function toggleHidden(e){
    console.log(e.target);
    if(e.target.nextSibling.getAttribute("hidden") == null){
      e.target.nextSibling.setAttribute("hidden", true);
    } 
    else{
      e.target.nextSibling.removeAttribute("hidden");
    }
  }

  return (
    <div>
      <header>
        <h1>Minecraft Server Browser</h1>
      </header>
      <div className='main'>
        <div className='content'>
          <Search ServerSearch={ServerSearch}/>

            {OnlineservInfo.map(item => (
              <OnlineServerInfo key={item.ip} toggleHidden={toggleHidden} ip={item.ip} port={item.port} hostname={item.hostname} version={item.version} motd={item.motd.clean[0]} playerCount={item.players.online}></OnlineServerInfo>
            ))}

            {OfflineservInfo.map(item => (
              <OfflineServerInfo key={item.ip} ip={item.ip} port={item.port} hostname={item.hostname}></OfflineServerInfo>
            ))}

        </div>
        <div className='suggestions'>
          <Suggestions SuggestedSearchJava={SuggestedSearchJava} SuggestedSearchBedrock={SuggestedSearchBedrock}></Suggestions>
        </div>
      </div>
      <footer>
        <strong>Copyright by no one</strong>
        <strong>This website was created for educational purposes</strong>
      </footer>
    </div>
  );
}

export default App;
