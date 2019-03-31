import React from 'react';
import { TextLabel, FileInputStyled } from './styles';
import { func, string } from 'prop-types';

class FileUpload extends React.PureComponent {
  handleFileSelect = e => {
    const file = e.target.files[0];
    const target = e.target;
    this.props.onUploadFile(file);
    // Reset previous file value in order to be able to upload it again,otherwise the
    // onChange event will not be triggered
    target.value = '';
  };

  render() {
    const { onDragOver, onDrop, className, label, type, acceptMimeTypes } = this.props;
    return (
      <TextLabel onDragOver={onDragOver} onDrop={onDrop} className={className}>
        {label}
        <FileInputStyled
          onChange={this.handleFileSelect}
          type={type}
          accept={acceptMimeTypes}
          className="qa-file-input"
        />
      </TextLabel>
    );
  }
}
export default FileUpload;

FileUpload.defaultProps = {
  type: 'file',
  acceptMimeTypes: 'image/svg+xml',
};
FileUpload.propTypes = {
  label: string,
  type: string,
  acceptMimeTypes: string,
  className: string,
  onDragOver: func,
  onDrop: func,
};
