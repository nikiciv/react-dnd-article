import React from 'react';
import DragAndDropCase1 from './examples/DragAndDropCase1';
import DragAndDropCase2 from './examples/DragAndDropCase2';
import DragAndDropCase3 from './examples/DragAndDropCase3';

export default class DragAndDrop extends React.PureComponent { 
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <DragAndDropCase1 />
        <DragAndDropCase2 />
        <DragAndDropCase3 />
      </div>
    );
  }
}
