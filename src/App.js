//import Input from './lib/components/input/Input';
import Menu from './lib/components/Menu/Menu.js';
import MenuItem from './lib/components/Menu/MenuItem.js';
import Card from './lib/components/Card/Card';
import './App.css';
import Toggle from './lib/components/Toggle/Toggle';
import { Loader, Button, IconButton, Textarea, Input } from './lib/index.js';

function App() {
  return (
    <div className="App">
      <h1>test!!</h1>
      <Menu>
        <MenuItem>
          Hey 
        </MenuItem>
      </Menu>
  <Card> 
    :) 
  </Card> 
  <Toggle/> 
  <Loader inline/>    
  <Button label="yehaw"/>
  <IconButton icon="e"/>
  <Input/>
  <Textarea/>
    </div>
  );
}

export default App;