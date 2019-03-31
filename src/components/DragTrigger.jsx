/* @flow */
import React from 'react';

// * isBodyTrigger: use 'body' as a trigger or if not specified the component itself
// * children: render props function
// * className: offers possibility to style the component according to the context
// * style: offers possibility to add styles
type Props = {
  isBodyTrigger: boolean,
  children: func,
  className: string,
  style: object,
};

type State = {
  isDragActive: boolean,
};

// This component will notify when the user is dragging a file over the trigger element
class DragTrigger extends React.PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isDragActive: false,
    };
    this.counter = 0;
    this.isBodyTrigger = this.props.isBodyTrigger;
  }

  componentDidMount = () => {
    if (this.isBodyTrigger) {
      document.addEventListener('dragenter', this.handleDragEnter);
      document.addEventListener('dragleave', this.handleDragLeave);
      document.addEventListener('drop', this.handleDrop);
    }
  };

  componentWillUnmount = () => {
    document.removeEventListener('dragenter', this.handleDragEnter);
    document.removeEventListener('dragleave', this.handleDragLeave);
    document.removeEventListener('drop', this.handleDrop);
  };

  handleDragEnter = () => {
    this.counter++;
    this.setState({ isDragActive: true });
  };

  handleDragLeave = () => {
    this.counter--;
    if (this.counter === 0) {
      this.setState({ isDragActive: false });
    }
  };

  handleDrop = () => {
    setTimeout(() => {
      this.setState({ isDragActive: false });
    }, 0);
    this.counter = 0;
  };

  render() {
    const internalProps = {};

    if (!this.isBodyTrigger) {
      internalProps.onDragEnter = this.handleDragEnter;
      internalProps.onDragLeave = this.handleDragLeave;
      internalProps.onDrop = this.handleDrop;
    }

    return (
      <div className={this.props.className} style={this.props.style} {...internalProps}>
        {this.props.children(this.state.isDragActive)}
      </div>
    );
  }
}

export default DragTrigger;
