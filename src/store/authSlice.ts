import { StateCreator } from "zustand"
import { Cliente, Proveedor } from "../types"

export type AuthSliceType = {
    user: Cliente
    provider: Proveedor
    setLoginPerson: (person: Cliente | Proveedor) => void
}

export const inicialUser = (): Cliente => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : {}
}

export const inicialProvider = (): Proveedor => {
    const provider = localStorage.getItem('provider')
    return provider ? JSON.parse(provider) : {}
}
export const createAuthSlice: StateCreator<AuthSliceType> = (set) => ({
    user: inicialUser(),
    provider: inicialProvider(),
    setLoginPerson: async (person: Cliente | Proveedor) => {
        if ((person as Cliente).cli_cedula !== undefined) {
            set({ user: person as Cliente, provider: {} as Proveedor })
        } else {
            set({ user: {} as Cliente, provider: person as Proveedor })
        }
    }
})