import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from "vue-router";

export default function useUsers() {
    const user = ref([]);
    const users = ref([]);

    const errors = ref([]);
    const router = useRouter();

    const getUsers = async () => {
        let response = await axios.get('/api/users');
        users.value = response.data.data;
    }

    const getUser = async (id) => {

        let response = await axios.get(`/api/users/${id}`);
        user.value = response.data.data;
    }

    const updateUser = async () => {
        errors.value = '';
        try {
            await axios.post(`/api/users`, user.value);
            await router.push({name: 'users'});
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    const deleteUser = async (id) => {
        await axios.delete(`/api/users/${id}`);
        await router.push({name: 'users'});
    }

    return {
        errors,
        user,
        users,
        getUser,
        getUsers,
        updateUser,
        deleteUser
    };
};
