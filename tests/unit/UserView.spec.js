import { shallowMount } from '@vue/test-utils';

import UserView from '@/views/UserView';
import UserSearchForm from '@/components/UserSearchForm';
import UserProfile from '@/components/UserProfile';

describe('UserView', () => {
  // build function suggested over beforeEach() method
  const build = () => {
    const wrapper = shallowMount(UserView, {
      data: () => ({
        user: {}
      })
    });

    return {
      wrapper,
      userSearchForm: () => wrapper.find(UserSearchForm),
      userProfile: () => wrapper.find(UserProfile)
    };
  };

  // what do we want to test?

  // does the component render
  it('renders the component', () => {
    // arrange
    const { wrapper } = build();
    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  // does the component render the right thing
  it('renders main child components', () => {
    // arrange
    const { userSearchForm, userProfile } = build();
    // assert
    expect(userSearchForm().exists()).toBe(true);
    expect(userProfile().exists()).toBe(true);
  });

  // it binds all the correct prop data
  it('passes a user prop to user profile component', () => {
    // arrange
    const { wrapper, userProfile } = build();
    wrapper.setData({
      user: {
        name: 'Aileen'
      }
    });
    // assert
    expect(userProfile().vm.user).toBe(wrapper.vm.user);
  });

  // do events trigger correct behaviour

  // extreme cases: e.g. how does a list behave with 0, 50, or 100 items
});
