import React, {useState} from 'react';
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
// import classes from "./tabs.module.css";
import "./tabs.css";


const TabsWrapper = props => {
    const {items, initialIndex = 0} = props;
    const [index, setIndex] = useState(initialIndex);

    const normalized = items.map((item, index) =>
        typeof item === "string"
            ? { id: index + 1, label: item, content: null }
            : { id: item.id ?? index + 1, label: item.name ?? item.label, content: item.content ?? null }
    );

    return (
        <Tabs selectedIndex={index} onSelect={setIndex}>
            <TabList>
                {normalized.map(({ id, label }) => (
                    <Tab key={id}>{label}</Tab>
                ))}
            </TabList>

            {normalized.map(({ id, content, label }) => (
                <TabPanel key={id}>
                    {content ?? <div style={{ padding: 12 }}>{label}</div>}
                </TabPanel>
            ))}
        </Tabs>
    )
};

export default TabsWrapper;
