import logo from './logo.svg';
import './ServerInfo.css';

function OnlineServerInfo(props) {
  return (
    <div className='serverContent'>
        <div id="basicInfo">
            <div>
                <strong>Name: </strong>
                <p>{props.hostname}</p>
            </div>
            <div>
                <strong>Port: </strong>
                <p>{props.port}</p>
            </div>
            <div>
                <strong>IP: </strong>
                <p>{props.ip}</p>
            </div>
        </div>
        <div id="extraInfo">
            <div>
                <strong onClick={props.toggleHidden}>Version: </strong>
                <p className='attribute'>{props.version}</p>
            </div>
            <div>
                <strong onClick={props.toggleHidden}>Players: </strong>
                <p className='attribute'>Player Count: {props.playerCount}</p>
            </div>
            <div>
                <strong onClick={props.toggleHidden}>MOTD: </strong>
                <p className='attribute'>{props.motd}</p>
            </div>
        </div>
    </div>
  );
}

export default OnlineServerInfo;