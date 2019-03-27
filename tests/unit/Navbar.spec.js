import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';

import Navbar from '@/components/Navbar';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Navbar', () => {
  let route;
  // let props;
  let router;

  // build function suggested over beforeEach() method
  const build = () => {
    const wrapper = shallowMount(Navbar, {
      localVue,
      router
      // propsData: props
    });

    return {
      wrapper,
      brand: () => wrapper.find('#brand'),
      toggle: () => wrapper.find('.mobile-nav-toggle'),
      navItems: () => wrapper.find('.nav-items')
    };
  };

  beforeEach(() => {
    route = {
      path: '/page',
      name: 'Page'
    };
    router = new VueRouter([route]);
    // props = { linkUrl: 'https://url.com/hello' };
  });

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
  it('highlights the active route', () => {
    const { navItems } = build();
    expect(navItems().html()).toContain(route.name);
  });

  // does the brand link to homepage?

  // does click even init route change?

  // does nav toggle render only on tablet/mobile
    // how do we test media queries?

  // does nav toggle click toggle nav-items display

});
