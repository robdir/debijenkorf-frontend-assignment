import React from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './searchBox';
import Enzyme from 'enzyme'
import { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import sinon from 'sinon'

    Enzyme.configure({ adapter: new Adapter() })

    describe('<SearchBox>', () => {
        const box = mount(<SearchBox/>)
        const input = box.find('input')

        it ('renders without crashing', () => {
            expect(box).toExist
        })

        it ('focuses on input', () => {
            expect(input).toBe(document.activeElement)
        })
    })