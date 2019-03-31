import React from 'react';
import DragTrigger from '../components/DragTrigger';
import DropArea from '../components/DropArea';

export default class DragAndDropCase2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fileDropped: false,
    };
  }

  handleFileDrop = () => {
    this.setState({ fileDropped: true });
  };

  handleDropAreaLabel = isDragActive => {
    if (this.state.fileDropped) {
      return 'File dropped!';
    } else if (isDragActive) {
      return 'Drop here!';
    }
    return 'Drop area!';
  };

  render() {
    return (
      <div className="sl-panel" style={{ margin: '20px' }}>
        <h4 style={{ padding: '0 20px' }}>Drag and Drop Case #2</h4>
        <div 
          style={{
                backgroundColor: 'steelblue',
                color: 'white',
                borderRadius: '20px',
                display: 'inline-block',
                marginLeft: '20px'
              }}
        >
          <p style={{ padding: '0 20px' }}><b>DragTrigger</b> is the grey square.</p>
          <p style={{ padding: '0 20px' }}><b>DropArea</b> is the white square.</p>
        </div>
        <div style={{ padding: '20px' }}>
          <DragTrigger
            style={{
              backgroundColor: 'silver',
              width: '350px',
              height: '350px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px',
            }}
            children={isDragActive => (
              <DropArea
                onFileDrop={this.handleFileDrop}
                style={{
                  width: '150px',
                  height: '150px',
                  backgroundColor: 'white',
                  color: 'steelblue',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  border: '1px steelblue dashed',
                  borderRadius: '15px',
                }}
              >
                {this.handleDropAreaLabel(isDragActive)}
              </DropArea>
            )}
          />
        </div>
      </div>
    );
  }
}
