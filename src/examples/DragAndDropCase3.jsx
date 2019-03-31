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
        <h5 style={{ padding: '0 20px' }}>DragTrigger is the grey square.</h5>
        <h5 style={{ padding: '0 20px' }}>
          DropArea is the white square and when the file is dragged over the grey area the DropArea
          becomes the entire grey area.
        </h5>

        <div style={{ padding: '20px' }}>
          <DragTrigger
            style={{
              backgroundColor: 'silver',
              width: '350px',
              height: '350px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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
