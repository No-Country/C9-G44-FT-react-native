import axios from 'axios'
import { API_URI } from '@env'


const URL = API_URI

export const userRequest = {

    signIn: async (email, password) => {

        try {

            const res = await axios.post(`${URL}/signin`, { email, password })

            return res

        }

        catch (error) {

            console.log(error)
        }


    },

    signUp: async (data) => {

        try {

            const res = await axios.post(`${URL}/signup`, data)

            return res

        }

        catch (error) {
            console.log(error)
        }


    },

    getUsers: async (token) => {

        try {

            const res = await axios.get(`${URL}/users`,
                {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })

            return res

        }

        catch (error) {
            console.log(error)
        }


    },

}

