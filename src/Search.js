import logo from './logo.svg';
import './Search.css';

function Search(props) {
  return (
    <form onSubmit={props.ServerSearch}>
        <strong>Server Search</strong>
        <div>
            <input type='text' id='ServerURL' placeholder='Type a Server URL like "2b2t.org"'/>
            <button type='submit'>Submit</button>
        </div>
        <div className='bedrockSearch'>
          <strong>Bedrock Server?</strong>
          <input type='checkbox' id='bedrockToggle'></input>
        </div>
    </form>
  );
}

export default Search;
