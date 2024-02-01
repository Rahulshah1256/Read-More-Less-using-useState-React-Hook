// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Title,
  SubTitle,
  Image,
  Description,
  Button,
} from './styledComponents'

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
    <MainContainer>
      <Title> React Hooks</Title>
      <SubTitle>Hooks are a new addition to React</SubTitle>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{text}</Description>
      <Button onClick={onChangeRead}>{readMoreHandle}</Button>
    </MainContainer>
  )
}

export default ReadMore
