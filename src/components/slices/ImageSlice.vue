<template>
  <div>
    <b-img-lazy
      v-bind="mainProps"
      :src="img.url"
      :alt="img.alt"
      :title="img.alt"
    ></b-img-lazy>
    <p class="caption">{{ `${caption} Copyright: ${img.copyright}.` }}</p>
  </div>
</template>

<script>
export default {
  name: 'ImageSlice',

  props: {
    img: Object,
    caption: String
  },

  data() {
    return {
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb'
      }
    };
  }
};
</script>

<style scoped>
.caption {
  font-size: smaller;
  color: gray;
  text-align: center;
  margin: 0.6em;
}
</style>
