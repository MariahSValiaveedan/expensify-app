import React from 'react';
import {shallow} from 'enzyme';
import Expenselist from '../../components/Expenselist';
import expenses from '../fixtures/expenses';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({
    adapter : new Adapter()
});

test('should render expenselist with expense',() => {
    const wrapper = shallow(<Expenselist expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});