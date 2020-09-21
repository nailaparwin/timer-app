import React, { useState} from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Controls from './../Controls/Controls';
import {mount} from 'enzyme'

let setTime: Function

describe('App Component renders', () => {
    
    let container = mount(<App />);
    let container2 = mount(<Controls setTimeInSeconds={Function}/>)

    it('should render three paragraphs', () => {        
        expect(container.find('p').length).toEqual(3);
    });

    it('should render a timer component', () => {        
        expect(container.containsMatchingElement(<Controls setTimeInSeconds={setTime}/>)).toEqual(true);
    });

    it('Should Start Timer ' ,()=> {
        container.find("#play").simulate('click');
        expect(container.find('#t1').text()).toBe("00");
        
      })

    
    it('Should Reset timer ' ,()=> {
        container2.find("#reset").simulate('click');
        expect(container.find('#t1').text()).toBe("00");
      })

      it('Should Render 2 span Tags' ,()=>{
        expect(container.find('span').length).toEqual(2);

    })

    
    
});