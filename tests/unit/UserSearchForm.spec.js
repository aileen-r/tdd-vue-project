import { shallowMount } from '@vue/test-utils';
import UserSearchForm from '@/components/UserSearchForm';

describe('UserSearchForm', () => {
  const build = () => {
    const wrapper = shallowMount(UserSearchForm);

    return {
      wrapper,
      input: () => wrapper.find('input'),
      button: () => wrapper.find('button')
    };
  };

  it('renders the component', () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders main elements', () => {
    const { input, button } = build();
    expect(input().exists()).toBe(true);
    expect(button().exists()).toBe(true);
  });

  ///*

  it('emits "submitted" event when submitting form', () => {
    const expectedUser = 'aileen-r';
    const { wrapper, button, input } = build();
    input().element.value = expectedUser;

    input().trigger('input');
    button().trigger('click');
    button().trigger('submit');

    expect(wrapper.emitted().submitted[0]).toEqual([expectedUser]);
  });

  //*/
});

// emits "submitted" event on form submission
