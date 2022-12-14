import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Tabs from './components/Tabs';

function App() {

  let tabs = [
    {label: "Tab 1", content: "This is the content for tab 1"},
    {label: "Tab 2", content: "This is the content for tab 2"},
    {label: "Tab 3", content: "This is the content for tab 3"},
  ]

  const [allTabs, setAllTabs] = useState(tabs);
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="App">
      <Tabs allTabs={allTabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      <Content allTabs={allTabs} currentTab={currentTab} />
    </div>
  );
}

export default App;
