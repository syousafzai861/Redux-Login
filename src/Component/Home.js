import React from 'react'
import { useSelector } from 'react-redux'
const Home = () => {
const home = useSelector(state => state.loginglobal);
console.log(home);
  return (
    <div>
      {/* COUNT: {home.count} */}
      <h1>HOME Page</h1>
    </div>
  )
}

export default Home
