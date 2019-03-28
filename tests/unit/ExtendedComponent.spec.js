import { shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';

import ExtendedComponent from '@/components/ExtendedComponent';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('ExtendedComponent', () => {
  let props;

  // build function suggested over beforeEach() method
  const build = () => {
    const wrapper = shallowMount(ExtendedComponent, {
      localVue,
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

  it('displays path of button URL as button text', () => {
    const { githubButton } = build();
    expect(githubButton().html()).toContain('hello');
  });
});