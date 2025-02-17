import { createSlice } from 'react-redux';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        filterProducts: [],
    },
    reducers: {
      filterProductsByCategory: ( state, action ) => {
        if (state.selectedCategory === 'all') {
            return {...state, filterProducts: state.products };
        } else {
            const _filteredProducts = state.products.filter((products) => products.category === action.payload.selectedCategory);
        }
          
      },
      updateCategory: (state, action ) => {

      }
    }
});

export const { filterProductsByCategory } = productsSlice.actions;

export default productsSlice.reducer;
