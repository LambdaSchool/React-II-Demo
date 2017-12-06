import React from 'react';
import ComponentDidMountExample from './ComponentDidMountExample';
import dummyData from './dummy-data';

const ParentComponent = () => (
    <div className="parent-component">
        {dummyData.map((datum, i) => <ComponentDidMountExample key={i} data={datum} />)}
    </div>
);

export default ParentComponent;