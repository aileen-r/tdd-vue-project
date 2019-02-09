<template>
    <div class="user-profile">
        <img class="user-avatar" :src="user.avatar_url" />
        <div class="user-name">
            {{ user.name }}
        </div>
        <div class="user-bio">
            {{ user.bio }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserProfile',
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
</script>

<style>
</style>
