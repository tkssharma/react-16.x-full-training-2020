import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import calculate from '../logic/calculate';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should have the properties `total`, `next`, and `operation` in state', () => {
    const component = shallow(<App />);
    expect(component.state('total')).toEqual("0");
    expect(component.state('next')).toBeDefined();
    expect(component.state('operation')).toBeDefined(); 
  });

  it('should render a div with class `component-app`', () => {
    const component = shallow(<App />);
    expect(component.find('.component-app')).toHaveLength(1);
  });

  it('should have a `handleClick` method that updates state', () => {
    const component = shallow(<App />);
    component.instance().handleClick("9")
    expect(component.state('next')).toEqual("9");
    expect(component.state('total')).toEqual("0");
    expect(component.state('operation')).toBeNull();
  });
});
