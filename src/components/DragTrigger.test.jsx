import React from 'react';
import { mount } from 'enzyme';
import DragTrigger from './DragTrigger';

describe('<DragTrigger />', () => {
  let props;
  let instance;

  props = {
    isBodyTrigger: true,
    children: jest.fn(),
  };

  beforeEach(() => {
    instance = mount(<DragTrigger {...props} />);
  });

  it('renders DragTrigger component correctly', () => {
    expect(instance).toMatchSnapshot();
  });

  it('sets isDragActive to false when an element is dragged out of the browser', () => {
    expect(instance.state().isDragActive).toBe(false);
    const dragEnterEvent = new Event('dragenter');
    document.dispatchEvent(dragEnterEvent);
    expect(instance.state().isDragActive).toBe(true);
    const dragLeaveEvent = new Event('dragleave');
    document.dispatchEvent(dragLeaveEvent);
    expect(instance.state().isDragActive).toBe(false);
  });

  it('triggers isDragActive when an element is dragged in the drag area', () => {
    props = {
      isBodyTrigger: false,
      children: jest.fn(),
    };
    instance = mount(<DragTrigger {...props} />);
    const dragEnterEvent = new Event('dragenter');
    document.dispatchEvent(dragEnterEvent);
    expect(instance.state().isDragActive).toBe(false);
    instance.simulate('dragenter');
    expect(instance.state().isDragActive).toBe(true);
  });

  it('sets isDragActive to false when an element is dragged out of the drag area', () => {
    instance.setProps({
      isBodyTrigger: false,
    });
    expect(instance.props().isBodyTrigger).toBe(false);
    instance.simulate('dragenter');
    expect(instance.state().isDragActive).toBe(true);
    instance.simulate('dragleave');
    expect(instance.state().isDragActive).toBe(false);
  });
});
