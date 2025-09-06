import api from '@/services/api.js'

export const ocorrenciaResourceService = {
    getOcurrences: (config = {}) => api.get('/v1/ocorrencias/informacoes-desaparecido', config),
    sendNewOcurrence: (obj, config = {}) =>
        api.post(`/v1/ocorrencias/informacoes-desaparecido`, obj, config),
}
