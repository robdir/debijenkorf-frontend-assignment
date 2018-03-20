import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './searchBox';
import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

    Enzyme.configure({ adapter: new Adapter() })

    describe('<SearchBox>', () => {
        const box = mount(<SearchBox/>)

        it ('renders!', () => {
            expect(box).toExist
        })
    })