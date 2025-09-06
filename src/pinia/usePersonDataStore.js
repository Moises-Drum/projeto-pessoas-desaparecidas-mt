import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePersonDataStore = defineStore(
    'personData',
    () => {
        const id = ref(null)

        const setId = newId => {
            id.value = newId
        }

        const clearId = () => {
            id.value = null

            localStorage.clear()
        }

        return { id, setId, clearId }
    },
    { persist: true }
)
