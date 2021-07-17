//import Input from './lib/components/input/Input';
import Menu from './lib/components/Menu/Menu.js';
import MenuItem from './lib/components/Menu/MenuItem.js';
import Toggle from './lib/components/Toggle/Toggle';
import { Loader, Button, IconButton, Textarea, Input, Banner, Tooltip, Checkbox } from './lib/index.js';
import './lib/skylight.css';
import Flex from './lib/components/layout/Flex';
import { VscUnmute } from 'react-icons/vsc';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <h1>test!!</h1>
      <Menu>
        <MenuItem>
          Hey 
        </MenuItem>
      </Menu>
  <Toggle/> 
  <Loader inline/>  
  <Flex gap={1}>
    <Button label="open" handleClick={() => setOpen(!open)} CTA/>
  </Flex>  
  <Flex gap={1}>
    <Button label="yehaw"/>
    <Button label="yehaw" kind="neutral"/>
    <Button label="yehaw" kind="highlight"/>
    <Button label="yehaw" kind="lowlight"/>
    <Button label="yehaw" kind="bright"/>
    <Button label="yehaw" kind="warning"/>
  </Flex> 
  <Flex gap={1}>
    <IconButton icon={<VscUnmute/>}/>
    <IconButton icon={<VscUnmute/>} kind="neutral"/>
    <IconButton icon={<VscUnmute/>} kind="highlight"/>
    <IconButton icon={<VscUnmute/>} kind="lowlight"/>
    <IconButton icon={<VscUnmute/>} kind="bright"/>
    <IconButton icon={<VscUnmute/>} kind="warning"/>
  </Flex> 
  
  <IconButton icon="e"/>
  <Input/>
  <Textarea/>
  <div style={{position:"relative", width:"5rem", border:"1px solid blue"}}>
    <div onMouseEnter={() => setOpen(!open)}>
      :~)
    </div>
    <Tooltip text="???" open={open}/>
  </div>
 </div>
  );
}

export default App;

/**
 * <DropdownY in={open}>
    <div style={{height:"5rem", width:"5rem"}}>
      :~~)
    </div>
  </DropdownY>
  <SlideX in={open}>
    <div style={{height:"5rem", width:"5rem"}}>
      :~~)
    </div>
  </SlideX>
  <Fade in={open}>
    <div style={{height:"5rem", width:"5rem"}}>
      :~~)
    </div>
  </Fade>
  <Blur in={open}>
    <div style={{height:"5rem", width:"5rem"}}>
      :~~)
    </div>
  </Blur>
 */