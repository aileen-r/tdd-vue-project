<template>
    <div>
        <UserSearchForm />
        <UserProfile :user="user"/>
    </div>
</template>

<script>
import UserProfile from '@/components/UserProfile';
import UserSearchForm from '@/components/UserSearchForm';

export default {
    name: 'UserView',
    data() {
        return {
            user: { name: '' }
        };
    },
    components: {
        UserSearchForm,
        UserProfile
    }
}
</script>

<style>

</style>
