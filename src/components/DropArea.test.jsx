import React from 'react';
import { mount } from 'enzyme';
import DropArea from './DropArea';

describe('<DropArea />', () => {
  const props = {
    className: 'abc',
    onFileDrop: jest.fn(),
  };

  let instance;

  beforeEach(() => {
    instance = mount(<DropArea {...props} />);
  });

  it('renders DropArea component correctly', () => {
    expect(instance).toMatchSnapshot();
  });

  it('calls onFileDrop function when drop event is triggered', () => {
    const event = { dataTransfer: { files: ['test'] } };
    instance.simulate('drop', event);
    expect(props.onFileDrop).toBeCalledWith(event.dataTransfer.files[0]);
  });
});
