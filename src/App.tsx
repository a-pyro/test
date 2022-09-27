import { useAppDispatch, useAppSelector } from 'store/hooks'
import { incrementAsync, selectCount } from 'features/counter/counterSlice'
import './App.css'

function App() {
  const asd = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>BookShelf</h1>
      <button
        onClick={() => {
          dispatch(incrementAsync(1))
          console.log(asd)
        }}
      >
        {asd}
      </button>
      <button>Register</button>
    </div>
  )
}

export default App
