<template>
    <div class="container">
        <h1 class="h1">Home page</h1>
        <router-link v-if="isLoggedIn" to="/users" type="button" class="btn btn-primary">Перейти к списку пользователей</router-link>
        <div v-else>Please do log in</div>
    </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";

export default {
    name: "App",
    components: {
        HeaderComponent
    },
    data() {
        return {
            isLoggedIn: false,
        }
    },
    created() {
        if (window.Laravel.isLoggedin) {
            this.isLoggedIn = true
        }
    },
}
</script>
