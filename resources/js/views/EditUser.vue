<template>
    <div>
        <h4 class="text-center">Edit User</h4>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="saveUser">
                    <div class="form-group m-2">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group m-2">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="user.email">
                    </div>
                    <div class="form-group m-2">
                        <label>Phone</label>
                        <input type="text" class="form-control" v-model="user.phone_number">
                    </div>
                    <button type="submit" class="btn btn-primary m-2">Update user</button>
                </form>
                <button @click="removeUser(user.id)" class="btn btn-danger m-2">Delete User</button>
            </div>
        </div>
    </div>
</template>

<script>
import useUsers from "../composables/users";
import {onMounted} from "vue";

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const {errors, user, deleteUser, getUser, updateUser} = useUsers();
        onMounted(() => getUser(props.id));

        const removeUser = async (id) => {
            await deleteUser(id);
        }

        const saveUser = async () => {
            await updateUser(props.id)
        }

        return {
            errors,
            user,
            saveUser,
            removeUser
        }
    },
    beforeRouteEnter(to, from, next) {
        if (!window.Laravel.isLoggedin) {
            window.location.href = "/";
        }
        next();
    }
}
</script>
