import Axios from 'axios'

const api = Axios.create({
    baseURL: 'https://abitus-api.geia.vip',
})

export default api
