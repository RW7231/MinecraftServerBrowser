import logo from './logo.svg';
import './ServerInfo.css';

function OfflineServerInfo(props) {
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
            <strong>The server appears to be offline or you typed something in wrong</strong>
        </div>
    </div>
  );
}

export default OfflineServerInfo;