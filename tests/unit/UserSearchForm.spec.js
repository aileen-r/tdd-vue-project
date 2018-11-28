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
});

// emits "submitted" event on form submission
