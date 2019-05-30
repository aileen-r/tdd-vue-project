<template>
  <article class="entry">
    <h1>{{ fields.title }}</h1>
    <prismic-rich-text :field="fields.content" />
  </article>
</template>

<script>
export default {
  data() {
    return {
      fields: {
        title: null,
        content: null,
        richContent: null
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getByID('XKuYuRAAAHcDMGyx').then(document => {
        console.log(document);
        this.fields.title = document.data.title[0].text;
        this.fields.content = document.data.content;
      });
    }
  },
  created() {
    this.getContent();
  }
};
</script>

<style lang="scss">
.entry {
  margin-top: 40px;

  img {
    max-width: 100%;
    max-height: 60vh;
  }
}
</style>
