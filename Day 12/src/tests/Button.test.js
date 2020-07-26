import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders with className `component-button` when not passed any props', () => {
    const component = shallow(<Button />);
    expect(component.find('.component-button')).toHaveLength(1);
  });

  it('renders with className `component-button wide` when passed the `wide` prop', () => {
    const component = shallow(<Button wide/>);
    expect(component.find('.component-button')).toHaveLength(1);
    expect(component.find('.wide')).toHaveLength(1);
  });

  it('renders with className `component-button orange` when passed the `orange` prop', () => {
    const component = shallow(<Button orange/>);
    expect(component.find('.component-button')).toHaveLength(1);
    expect(component.find('.orange')).toHaveLength(1);
  });

  it("calls the passed-in prop function with the button's name when clicked", () => {
    const func = sinon.spy();
    const component = shallow(<Button name="boo" clickHandler={func} />);
    component.find('button').simulate('click');
    expect(func.calledOnce).toEqual(true);
    expect(func.calledWith('boo')).toEqual(true);
  });
});