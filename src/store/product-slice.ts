import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: string,
    title: string,
    description: string,
    category: string,
    quantity: number,
    price: number,
    image: string,
    total: number,
    createdAt: string
}

interface ProductState {
    products: Product[];
    isLoading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: null
}

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const result = await fetch("https://fakestoreapi.com/products");
    return result.json();
})

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // addProduct: (state, action: PayloadAction<{
        //     title: string,
        //     description: string,
        //     category: string,
        //     quantity: number,
        //     price: number,
        //     image: string
        // }>) => {
        //     const newProduct: Product = {
        //         id: Date.now().toString(),
        //         title: action.payload.title,
        //         description: action.payload.description,
        //         category: action.payload.category,
        //         quantity: action.payload.quantity,
        //         price: action.payload.price,
        //         image: action.payload.image,
        //         total: Math.round(action.payload.quantity * action.payload.price),
        //         createdAt: new Date().toISOString(),
        //     };
        //     state.products.push(newProduct);
        // },
        // removeProduct: (state, action: PayloadAction<{ id: string }>) => {
        //     state.products = state.products.filter((product) => product.id !== action.payload.id);
        // },
        // increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
        //     state.products = state.products.map((product) => {
        //         if (product.id === action.payload.id) {
        //             product.quantity += 1
        //             product.total = product.quantity * product.price
        //         }
        //         return product
        //     });
        // },
        // decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
        //     state.products = state.products.map((product) => {
        //         if (product.id === action.payload.id) {
        //             product.quantity != 0 ? product.quantity -= 1 : 0
        //             product.total = product.quantity * product.price
        //         }
        //         return product
        //     });
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "Failed to fetch habits";
            });

    }
})

// export const { /addProduct, removeProduct, increaseQuantity, decreaseQuantity } = productSlice.actions
export default productSlice.reducer