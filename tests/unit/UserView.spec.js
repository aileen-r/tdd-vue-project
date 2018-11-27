import { shallowMount } from '@vue/test-utils';
import UserView from '@/views/UserView';

describe('UserView', () => {
  // what do we want to test?

  // does the component render
  it('renders the component', () => {
    // arrange
    const wrapper = shallowMount(UserView);
    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  // does the component render the right thing

  // it binds all the correct prop data

  // do events trigger correct behaviour

  // extreme cases: e.g. how does a list behave with 0, 50, or 100 items
});
