import { shallowMount } from '@vue/test-utils';

import Navbar from '@/components/Navbar';

describe('ExtendedComponent', () => {
  // let props;

  // build function suggested over beforeEach() method
  const build = () => {
    const wrapper = shallowMount(Navbar, {
      // propsData: props
    });

    return {
      wrapper,
      brand: () => wrapper.find('#brand'),
      toggle: () => wrapper.find('.mobile-nav-toggle'),
      navItems: () => wrapper.find('.nav-items')
    };
  };

  // beforeEach(() => {
  //   props = { linkUrl: 'https://url.com/hello' };
  // });

  // does the component render
  it('renders the component', () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  // does the component render the right thing
  it('renders branding, collapsible nav and toggle', () => {
    // arrange
    const { brand, toggle, navItems } = build();
    // assert
    expect(brand().exists()).toBe(true);
    expect(toggle().exists()).toBe(true);
    expect(navItems().exists()).toBe(true);
  });

  // is the nav list populated with all router views
  // are active router links highlighted?
  // does the brand link to homepage?
  // does click even init route change?
  // does nav toggle render only on tablet/mobile
  // does nav toggle click toggle nav-items display
});
