import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatDate = date => {
    if (!date) return date

    try {
        return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR })
    } catch (error) {
        console.error(error)

        return date
    }
}

export const formatTime = date => {
    if (!date) return date

    try {
        return format(new Date(date), 'HH:mm')
    } catch (error) {
        console.error(error)

        return date
    }
}

export const capitalize = str => {
    if (!str || typeof str !== 'string') return str

    try {
        str = str.toLowerCase()

        const array = str.split(' ')
        const captalize = array.map(item => {
            return item.charAt(0).toUpperCase() + item.slice(1)
        })

        return captalize.join(' ')
    } catch (error) {
        console.error(error)

        return str
    }
}

export const ellipsis = str => {
    try {
        if (!str || typeof str !== 'string') return str

        return str.length > 29 ? str.slice(0, 30) + ' ...' : str
    } catch (error) {
        console.error(error)

        return str
    }
}
