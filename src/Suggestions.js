import logo from './logo.svg';
import './Suggestions.css';

function Suggestions(props) {
  //one of the suggestions, mineplex, is offline. This is to demonstrate the offline capabilities of the site
  return (
    <div className='suggestionMain'>
      <strong>Server Suggestions</strong>
      <p>Click any to instantly search for the server</p>
      <hr></hr>
        <div className='javaServers'>
          <strong>Java:</strong>
            <p className='ServerSuggestion' onClick={props.SuggestedSearchJava}>mc.hypixel.net</p>
            <p className='ServerSuggestion' onClick={props.SuggestedSearchJava}>2b2t.org</p>
            <p className='ServerSuggestion' onClick={props.SuggestedSearchJava}>us.mineplex.com</p>
        </div>
        <div className='bedrockServers'>
          <strong>Bedrock:</strong>
          <p className='ServerSuggestion' onClick={props.SuggestedSearchBedrock}>bmc.mc-complex.com</p>
          <p className='ServerSuggestion' onClick={props.SuggestedSearchBedrock}>best.lemoncloud.net</p>
          <p className='ServerSuggestion' onClick={props.SuggestedSearchBedrock}>join.manacube.com</p>
        </div>
    </div>
  );
}

export default Suggestions;