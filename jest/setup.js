import 'regenerator-runtime/runtime';
import { configure } from 'enzyme';
/*
 * we are publishing for react 15, but storybook uses react 16. we could possibly
 * install and import from "react15", but that feels even hackier than this
 */
import Adapter from 'enzyme-adapter-react-16';
import toMutate from './extensions/to-mutate';

configure({ adapter: new Adapter() });

Element.prototype.scrollIntoView = jest.fn();

afterEach(() => {
  Element.prototype.scrollIntoView.mockClear();
});

expect.extend({
  toMutate
});
