import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProduct {
  id: string;
  title: string;
  img: string;
  price: number;
  quantity: number;
}

const initialState: IProduct = {
  id: "",
  title: "",
  img: "",
  price: 0,
  quantity: 0,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      //   state.id = action.payload.id;
      //   state.title = action.payload.title;
      //   state.img = action.payload.img;
      //   state.price = action.payload.price;
      //   state.quantity = action.payload.quantity;
      return action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
