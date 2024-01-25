import { configureStore } from '@reduxjs/toolkit'
import  CounterReducer from './counter/counterSlice'
import  PokemonsReducer from './pokemons/pokemons'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { localStorageMiddleware } from './middlewares/localStorage-middleware'

export const store = configureStore({
  reducer: { 
    counter: CounterReducer,
    pokemons: PokemonsReducer,
   },
  //  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: {         extraArgument: localStorageMiddleware, }, serializableCheck: false,}).concat(localStorageMiddleware as any),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector