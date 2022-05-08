<template>
    <div>
        <h4 class="text-center">All users</h4><br/>
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>
                    <router-link :to="{name: 'edituser', params: { id: user.id }}">{{ user.name }}</router-link>
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone_number }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import useUsers from '../composables/users';
import {onMounted} from 'vue';

export default {
    setup() {
        const {users, getUsers} = useUsers();
        onMounted(getUsers);
        return {
            users
        }
    },
    created() {
        if (window.Laravel.user) {
            this.name = window.Laravel.user.name
        }
    },
}
</script>

<style scoped>

</style>
