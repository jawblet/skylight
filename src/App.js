//import Input from './lib/components/input/Input';
import Menu from './lib/components/Menu/Menu.js';
import MenuItem from './lib/components/Menu/MenuItem.js';
import Toggle from './lib/components/Toggle/Toggle';
import { Loader, Button, IconButton, Textarea, Input, Banner, Modal, Checkbox } from './lib/index.js';
import './lib/skylight.css';
import Flex from './lib/components/layout/Flex';
import { VscUnmute } from 'react-icons/vsc';
import Tabs from './lib/components/Tabs/Tabs';
import Tab from './lib/components/Tabs/Tab';
import { useState } from 'react';

function App() {
  const [tab, setTab] = useState(0);

  const tabs = ["acne", "axel", "apc"];

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
    <Button label="yehaw" CTA/>
    <Button label="yehaw" kind="neutral" CTA/>
    <Button label="yehaw" kind="highlight" CTA/>
    <Button label="yehaw" kind="lowlight" CTA/>
    <Button label="yehaw" kind="bright" CTA/>
    <Button label="yehaw" kind="warning" CTA/>
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
  <Banner text="HEY!!!!!" type="info" in={true}/>
  <Checkbox label="fuck"/>

 </div>
  );
}

export default App;