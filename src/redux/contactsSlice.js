import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const InitialState = {
  list: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: InitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.list.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.list.findIndex(task => task.id === action.payload.id);
      state.list.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    // [toggleCompleted.pending]: handlePending,
    // [toggleCompleted.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = null;
    //   const index = state.items.findIndex(
    //     task => task.id === action.payload.id
    //   );
    //   state.items.splice(index, 1, action.payload);
    // },
    // [toggleCompleted.rejected]: handleRejected,
  },
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: InitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.list.push(action.payload);
//       },
//       prepare({ name, number }) {
//         return {
//           payload: {
//             id: Date.now(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.list.findIndex(
//         contact => contact.id === action.payload
//       );
//       state.list.splice(index, 1);
//     },
//   },
// });

export const contactsReducer = contactsSlice.reducer;

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
