import { mount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';

import Navbar from '@/components/Navbar';

const localVue = createLocalVue();
localVue.use(BootstrapVue, Router);
// const router = new Router({
//   routes: [
//     {
//       path: '/page',
//       name: 'Page'
//     }
//   ]
// });

describe('Navbar', () => {
  let route;
  let routes;
  let mockRouter;
  let links;

  // build function suggested over beforeEach() method
  const build = () => {
    const wrapper = mount(Navbar, {
      localVue,
      // router,
      mocks: {
        $router: mockRouter
      },
      stubs: ['router-link']
    });

    return {
      wrapper,
      brand: () => wrapper.find('#brand'),
      toggle: () => wrapper.find('.mobile-nav-toggle'),
      navItems: () => wrapper.findAll('.nav-item')
    };
  };

  beforeEach(() => {
    route = {
      path: '/page',
      name: 'Page'
    };
    routes = [route];
    mockRouter = {
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

  it('renders the component', () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders branding, collapsible nav and toggle', () => {
    // arrange
    const { brand, toggle, navItems } = build();
    // assert
    expect(brand().exists()).toBe(true);
    expect(toggle().exists()).toBe(true);
    expect(navItems().exists()).toBe(true);
  });

  it('populates nav list with all route names', () => {
    const { wrapper, navItems } = build();
    expect(wrapper.vm.links).toEqual(links);
    links.forEach((link, idx) => {
      expect(navItems().at(idx).html()).toContain(link.text);
    });
  });

  it('highlights the active route', () => {
    const { navItems } = build();
    const activeItem = navItems().filter(navItem => navItem.html().includes('Page')).at(0);
    console.log(activeItem.html())
  });

  // does the brand link to homepage?

  // does click even init route change?

  // does nav toggle render only on tablet/mobile
    // how do we test media queries?

  // does nav toggle click toggle nav-items display
});