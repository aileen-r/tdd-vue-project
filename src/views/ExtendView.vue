<template>
  <extended-component :linkUrl="$options.githubUrl"/>
</template>

<script>
import ExtendedComponent from '@/components/ExtendedComponent';

export default {
  name: 'ExtendView',
  components: { ExtendedComponent },
  githubUrl: 'https://github.com/aileen-r'
};
</script>

<style>
</style>
