import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

import UserView from '@/views/UserView';
import UserSearchForm from '@/components/UserSearchForm';
import UserProfile from '@/components/UserProfile';

import initialState from '@/store/state';
import userFixture from './fixtures/user';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserView', () => {
  let state;

  // build function suggested over beforeEach() method
  const build = () => {
    const wrapper = shallowMount(UserView, {
      localVue,
      store: new Vuex.Store({ state })
    });

    return {
      wrapper,
      userSearchForm: () => wrapper.find(UserSearchForm),
      userProfile: () => wrapper.find(UserProfile)
    };
  };

  beforeEach(() => {
    state = { ...initialState }
  });

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
    state.user = userFixture;
    const { userProfile } = build();
    // assert
    expect(userProfile().vm.user).toBe(state.user);
  });

  // do events trigger correct behaviour

  // extreme cases: e.g. how does a list behave with 0, 50, or 100 items
});
