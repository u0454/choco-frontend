import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../app/store";

interface MouseDragState {
  isDown: boolean;
  isDragged: boolean;
  startX: number;
  clickX: number;
}

const initialState: MouseDragState = {
  isDown: false,
  isDragged: false,
  startX: 0,
  clickX: 0,
};

const scrollSectionSlice = createSlice({
  name: "mouseDrag",
  initialState,
  reducers: {
    mouseDown(state, action) {
      state.isDown = true;
      state.clickX = action.payload.clickX;
    },
    mouseLeave(state) {
      state.isDown = false;
    },
    mouseUp(state) {
      state.isDown = false;
      state.isDragged = false;
    },
    mouseMove(state, action) {
      state.isDragged = true;
      state.startX = action.payload.startX;
    },
  },
});

export const { mouseDown, mouseLeave, mouseUp, mouseMove } =
  scrollSectionSlice.actions;

export default scrollSectionSlice.reducer;