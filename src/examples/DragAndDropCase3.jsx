import React from 'react';
import DragTrigger from '../components/DragTrigger';
import DropArea from '../components/DropArea';

export default class DragAndDropCase3 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fileDropped: false,
    };
  }

  handleFileDrop = () => {
    this.setState({ fileDropped: true });
  };

  handleDropAreaLabel = () => {
    if (this.state.fileDropped) return 'File dropped!';
    return 'Drop here!';
  };

  render() {
    return (
      <div className="sl-panel" style={{ margin: '20px' }}>
        <h4 style={{ padding: '0 20px' }}>Drag and Drop Case #3</h4>
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
          <p style={{ padding: '0 20px' }}>
            <b>DropArea</b> is the white square and when the file is dragged over the grey area the <b>DropArea</b> becomes
            the entire grey area.
          </p>
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
            children={isDragActive =>
              isDragActive ? (
                <DropArea
                  onFileDrop={this.handleFileDrop}
                  style={{
                    width: '348px',
                    height: '348px',
                    backgroundColor: 'white',
                    color: 'steelblue',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    border: '2px dashed dimgrey',
                    borderRadius: '20px',
                  }}
                >
                  {this.handleDropAreaLabel()}
                </DropArea>
              ) : (
                <div
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
                  Drop area!
                </div>
              )
            }
          />
        </div>
      </div>
    );
  }
}
