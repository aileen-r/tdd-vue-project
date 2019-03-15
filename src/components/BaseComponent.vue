<script>
export default {
  name: 'BaseComponent',

  props: ['linkUrl'],

  leadInText: 'This lead-in text is an $option from the base component',

  computed: {
    paragraph() {
      return 'This paragraph text is a computed prop from the base component. The GitHub URL below is passed as a prop to the base component. The link text is a computed prop on the extended. This "linkText" computed prop accesses a prop on the base component via the "this" keyword.';
    }
  }
};
</script>
