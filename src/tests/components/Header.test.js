import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';
//import toJSON from'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



Enzyme.configure({
    adapter : new Adapter()
});

test('should render header', () => {
   const wrapper = shallow(<Header />);
   expect((wrapper)).toMatchSnapshot();
   
   
    /* const renderer=new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();*/
    
});
