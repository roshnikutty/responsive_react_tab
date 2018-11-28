import React from 'react';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import dummyData from './dummy_data';
import './App.css';

const someText = [{ name: 'Features', desc: dummyData[0] }, 
                    { name: 'Description', desc: dummyData[1]},
                    {name: 'Specifications', desc: dummyData[0]} ];
 
function getTabs() {
  return someText.map((tabData, index) => ({
    title: tabData.name,
    getContent: () => tabData.desc,
    /* Optional parameters */
    // key: index,
    tabClassName: 'tab',
    panelClassName: 'panel',
    // transform: true
    // transformWidth: 767
    showInkBar: true
  }));
}
 
const App = () => <Tabs items={getTabs()} />;

export default App;
