import { create } from "zustand";
import { AuthSliceType, createAuthSlice } from "./authSlice";
import { CartSliceType, createCartSlice } from "./cartSlice";

export const useAppStore = create<AuthSliceType & CartSliceType>((...a) => ({
    ...createAuthSlice(...a),
    ...createCartSlice(...a),    
}))