import React from 'react';

import {Tabs, Tab} from 'react-bootstrap';
export default () => (
    <Tabs>
        {/*<Tab eventKey={1} title="Destination configurations"><DestinationsView {...this.props}/></Tab>*/}
        <Tab eventKey={1} title="Destination configurations"></Tab>
        <Tab eventKey={2} title="Debugging and troubleshooting"></Tab>
        <Tab eventKey={3} title="Onboard to common destinations"></Tab>
    </Tabs>
);