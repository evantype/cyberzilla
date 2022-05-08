<template>
    <div>
        <HeaderComponent/>
        <div class="container">
            <br/>
            <router-view/>
        </div>
    </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
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
