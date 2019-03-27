import { shallowMount } from '@vue/test-utils';

import ExtendedComponent from '@/components/ExtendedComponent';

describe('ExtendedComponent', () => {
  let props;

  // build function suggested over beforeEach() method
  const build = () => {
    const wrapper = shallowMount(ExtendedComponent, {
      propsData: props
    });

  return {
      wrapper,
      githubButton: () => wrapper.find('.github-button')
    };
  };

  beforeEach(() => {
    props = { linkUrl: 'https://url.com/hello' };
  });

  // does the component render
  it('renders the component', () => {
    // arrange
    const { wrapper } = build();
    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  // does the component render the right thing
  it('renders main child elements', () => {
    // arrange
    const { githubButton } = build();
    // assert
    expect(githubButton().exists()).toBe(true);
  });

  it('splits url prop correctly', () => {
    const { githubButton } = build();
    expect(githubButton().html()).toContain('hello');
    // there should be a better way to do this
  });


  

  // // it binds all the correct prop data
  // it('passes a user prop to user profile component', () => {
  //   // arrange
  //   state.user = userFixture;
  //   const { userProfile } = build();
  //   // assert
  //   expect(userProfile().vm.user).toBe(state.user);
  // });
});