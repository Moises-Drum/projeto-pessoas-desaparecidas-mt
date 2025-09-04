import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePersonDataStore = defineStore('personData', () => {
    const id = ref(null)

    const setId = newId => {
        id.value = newId
    }

    return { id, setId }
})
