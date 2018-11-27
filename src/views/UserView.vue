<template>
    <div>
        <UserSearchForm />
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
    components: {
        UserSearchForm,
        UserProfile
    }
}
</script>

<style>

</style>
