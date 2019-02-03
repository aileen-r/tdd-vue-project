<template>
    <div>
        <UserSearchForm @submitted="searchUser"/>
        <UserProfile :user="user"/>
    </div>
</template>

<script>
import UserProfile from '@/components/UserProfile';
import UserSearchForm from '@/components/UserSearchForm';

import { mapState } from 'vuex';

export default {
    name: 'UserView',

    computed: {
        ...mapState({
            user: 'user'
        })
    },

    methods: {
        searchUser(username) {
            this.$store.dispatch('SEARCH_USER', { username })
        }
    },

    components: {
        UserSearchForm,
        UserProfile
    }
}
</script>

<style>

</style>
