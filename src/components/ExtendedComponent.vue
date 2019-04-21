<template>
  <b-jumbotron header="Extending VueJs Components" :lead="$options.leadInText">
    <p>{{ paragraph }}</p>
    <b-button class="github-button" variant="primary" :href="linkUrl">{{
      linkText
    }}</b-button>
  </b-jumbotron>
</template>

<script>
import BaseComponent from './BaseComponent';

export default {
  name: 'ExtendedComponent',

  extends: BaseComponent,

  computed: {
    linkText() {
      return this.linkUrl.split('/').slice(-1)[0];
    }
  }
};
</script>
