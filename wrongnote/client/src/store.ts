import { configureStore, createSlice } from '@reduxjs/toolkit'

const showAnswer = createSlice({
    name: 'showanswer',
    initialState: false,
    reducers:{
        setShowAnwser: (_state, action) =>{
            return action.payload
        }
    }
})
export const { setShowAnwser } = showAnswer.actions

export default configureStore({
  reducer: { 
    showAnswer : showAnswer.reducer
  }
}) 