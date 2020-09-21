import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';

describe ('Controls component', () => {


//beforeEach(() => {
   let container = shallow(<Controls setTimeInSeconds={Function}/>)
//})
it ("should render buttons", () => {
    expect(container.find("button").length).toBeGreaterThanOrEqual(3)
});


it('Should Start timer ' ,()=> {
    container.find("#play").first().simulate('click');
    expect(container.find('handlePlayButton'));
  })

  
  
});