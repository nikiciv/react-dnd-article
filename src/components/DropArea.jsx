/* @flow */
import React from 'react';

// * onFileDrop: a callback function that will receive an array of files as first argument
// * style: offers possibility to add styles
// * className: offers possibility to style the component according to the context
type Props = {
  onFileDrop: ({}) => void,
  style: object,
  className: string,
};

// This component will handle the file drop
class DropArea extends React.PureComponent<Props> {
  componentDidMount = () => {
    window.addEventListener('dragover', this.preventDefaultDragOver, false);
    window.addEventListener('drop', this.preventDefaultDrop, false);
  };

  componentWillUnmount = () => {
    window.removeEventListener('dragover', this.preventDefaultDragOver, false);
    window.removeEventListener('drop', this.preventDefaultDrop, false);
  };

  preventDefaultDrop = e => {
    e.preventDefault();
  };

  preventDefaultDragOver = e => {
    e.preventDefault();
  };

  handleDragOver = e => {
    const { dataTransfer } = e;
    e.stopPropagation();
    // Prevent default behavior(Prevent file from being opened)
    e.preventDefault();
    dataTransfer.dropEffect = 'copy';
  };

  handleFileDrop = e => {
    e.stopPropagation();
    e.preventDefault();
    if (this.props.onFileDrop) {
      this.props.onFileDrop(e.dataTransfer.files[0]);
    }
  };

  render() {
    return (
      <div
        style={this.props.style}
        onDragOver={this.handleDragOver}
        onDrop={this.handleFileDrop}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DropArea;
