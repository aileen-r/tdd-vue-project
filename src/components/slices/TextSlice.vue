<template>
  <div class="entry text-slice">
    <prismic-rich-text :field="text" />
  </div>
</template>

<script>
export default {
  props: ['text'],
  name: 'text-slice'
};
</script>
