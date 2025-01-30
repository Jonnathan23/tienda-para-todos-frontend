import { StateCreator } from "zustand"
import { CartItem, Producto } from "../types"

export type CartSliceType = {
    cart: CartItem[]
    minIntems: number
    addToCart: (producto: Producto) => void
    removeFromCart: (producto: Producto['prod_id']) => void
    decreseQuantity: (producto: Producto['prod_id']) => void
    increseQuantity: (producto: Producto['prod_id']) => void
    clearCart: () => void
}

export const inicialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
}


export const createCartSlice: StateCreator<CartSliceType> = (set, get) => ({
    cart: inicialCart(),
    minIntems: 1,
    addToCart: (producto) => {
        const itemExist = get().cart.find(item => item.prod_id === producto.prod_id)
        let updateCart: CartItem[] = []

        if (itemExist) {
            updateCart = get().cart.map(item => item.prod_id === producto.prod_id ? { ...item, cantidad: item.cantidad + 1 } : item)
        } else {
            const newItem = { ...producto, cantidad: 1 }
            updateCart = [...get().cart, newItem]
        }
    },
    removeFromCart: (id) => {
        const cart = get().cart.filter(item => item.prod_id !== id)
        set({ cart })
    },
    decreseQuantity: (id) => {
        const cart = get().cart.map(item => item.prod_id === id && item.cantidad > get().minIntems ? { ...item, cantidad: item.cantidad - 1 } : item)
        set({ cart })
    },
    increseQuantity: (id) => {
        const cart = get().cart.map(item => item.prod_id === id ? { ...item, cantidad: item.cantidad + 1 } : item)
        set({ cart })
    },
    clearCart: () => set({ cart: [] }),
})