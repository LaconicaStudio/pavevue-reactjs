import React, {useMemo, useState} from 'react';
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
// import classes from "./tabs.module.css";
import "./tabs.css";


const TabsWrapper =  ({items, initialIndex = 0}) => {
    const [index, setIndex] = useState(initialIndex);

    const normalized = useMemo(
        () =>
            items.map((it, i) => {
                if (typeof it === "string") {
                    const id = i + 1;
                    const label = it;
                    return {
                        id,
                        label,
                        getContent: () => <div style={{ padding: 12 }}>{label}</div>,
                    };
                }

                const id = it.id ?? i + 1;
                const label = it.name ?? it.label ?? `Tab ${i + 1}`;
                const Component = it.component;
                const render = it.render;
                const content = it.content;
                const props = it.props || {};

                const getContent = () => {
                    if (typeof render === "function") return render(it);
                    if (Component) return <Component {...props} />;
                    if (content != null) return content;
                    return <div style={{ padding: 12 }}>{label}</div>;
                };

                return { id, label, getContent };
            }),
        [items]
    );

    return (
        <Tabs selectedIndex={index} onSelect={setIndex}>
            <TabList>
                {normalized.map(({ id, label }) => (
                    <Tab key={id}>{label}</Tab>
                ))}
            </TabList>

            {normalized.map(({ id, getContent }) => (
                <TabPanel key={id}>
                    {getContent()}
                </TabPanel>
            ))}
        </Tabs>
    )
};

export default TabsWrapper;
