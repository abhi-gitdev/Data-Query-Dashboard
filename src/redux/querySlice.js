import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
  name: "query",
  initialState: {
    queries: [],
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
    submitQuery: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    setResults: (state, action) => {
      state.loading = false;
      state.results = action.payload;
      state.queries.push(action.payload.query);
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitQuery, setResults, setError } = querySlice.actions;
export default querySlice.reducer;
