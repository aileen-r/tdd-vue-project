import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';

// import Router from 'vue-router';

import Navbar from '@/components/Navbar';

const localVue = createLocalVue();
localVue.use(BootstrapVue);
// localVue.use(Router);

describe('Navbar', () => {
  let route;
  let routes;
  let router;
  let links;

  // build function suggested over beforeEach() method
  const build = () => {
    const wrapper = mount(Navbar, {
      localVue,
      mocks: {
        $router: router
      }
      // localVue,
      // router
      // propsData: props
    });

    return {
      wrapper,
      brand: () => wrapper.find('#brand'),
      toggle: () => wrapper.find('.mobile-nav-toggle'),
      navItems: () => wrapper.findAll('.nav-items')
    };
  };

  beforeEach(() => {
    route = {
      path: '/page',
      name: 'Page'
    };
    routes = [route];
    router = {
      options: {
        routes
      }
    };
    links = [
      {
        key: route.path.replace('/', ''),
        text: route.name,
        url: route.path
      }
    ]
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
  it('populates nav list with links to all router views', () => {
    const { wrapper, navItems } = build();
    expect(wrapper.vm.links).toEqual(links);
    // expect(navItems().
    // TODO - stub router-link to remove error
    // figure out how to find how WrapperArray contains items
  });

  // are active router links highlighted?
  // it('highlights the active route', () => {
  //   const { wrapper, navItems } = build();
  //   console.log(navItems()[0]);
  //   // expect(navItems().contains(route.name)).toBe(true);
  //   expect(wrapper.vm.links).toEqual(links);
  // });

  // does the brand link to homepage?

  // does click even init route change?

  // does nav toggle render only on tablet/mobile
    // how do we test media queries?

  // does nav toggle click toggle nav-items display

});
