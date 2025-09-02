import api from '@/services/api.js'

export const pessoaResourceService = {
    searchFilter: (config = {}) => api.get('/v1/pessoas/aberto/filtro', config),
    byId: (id, config = {}) => api.get(`/v1/pessoas/${id}`, config),
}
