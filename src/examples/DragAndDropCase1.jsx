import React from 'react';
import DragTrigger from '../components/DragTrigger';
import DropArea from '../components/DropArea';

export default class DragAndDropCase1 extends React.PureComponent {
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
    return 'Drop area';
  };

  render() {
    return (
      <div className="sl-panel" style={{ margin: '20px' }}>
        <h4 style={{ padding: '0 20px' }}>Drag and Drop Case #1</h4>
        <h5 style={{ padding: '0 20px' }}>DragTrigger is also DropArea (white square)</h5>
        <div style={{ padding: '20px' }}>
          <div
            style={{
              backgroundColor: 'silver',
              width: '350px',
              height: '350px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <DragTrigger
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
                  }}
                >
                  {this.handleDropAreaLabel(isDragActive)}
                </DropArea>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
