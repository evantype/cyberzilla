<template>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse">
                    <div class="navbar-nav" v-if="isLoggedIn">
                        <router-link to="/" class="nav-item nav-link">Home</router-link>
                        <router-link to="/users" class="nav-item nav-link">Список пользователей</router-link>
                        <a href="#" @click="logout" class="nav-item nav-link">Log out</a>
                    </div>
                    <div class="navbar-nav" v-else>
                        <router-link to="/" class="nav-item nav-link">Home</router-link>
                        <router-link to="/login" class="nav-item nav-link">Login</router-link>
                        <router-link to="/register" class="nav-item nav-link">Register
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </nav>
</template>

<script>
export default {
    name: "HeaderComponent",
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
    methods: {
        logout(e) {
            console.log('ss')
            e.preventDefault()
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.post('/api/logout')
                    .then(response => {
                        if (response.data.success) {
                            window.location.href = "/"
                        } else {
                            console.log(response)
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        }
    },
}
</script>

<style scoped>
</style>
