import React,{useState,Component} from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TabsComponent = props => {
    const [state, setState] = useState(0)



    return(
        <Tabs defaultTab="one" >
        <TabList>
            <Tab tabFor="one">Tab 1</Tab>
            <Tab tabFor="two">Tab 2</Tab>
            <Tab tabFor="three">Tab 3</Tab>
        </TabList>
        <TabPanel tabId="one">
            <p>Tab 1 content showing here</p>
        </TabPanel>
        <TabPanel tabId="two">
            <p>Tab 2 content showing here</p>
        </TabPanel>
        <TabPanel tabId="three">
            <p>Tab 3 content showing here</p>
        </TabPanel>
    </Tabs>

    )
}

export default TabsComponent;