// Write your code here
import {useState} from 'react'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [read, setRead] = useState(true)

  const onChangeRead = () => {
    setRead(prevState => !prevState)
  }
  const readMoreHandle = read ? 'Read More' : 'Read Less'

  const text = read
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription.slice(0)

  return (
    <div>
      <h1> React Hooks</h1>
      <p>Hooks are a new addition to React</p>
      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <p>{text}</p>
      <button onClick={onChangeRead}>{readMoreHandle}</button>
    </div>
  )
}

export default ReadMore
