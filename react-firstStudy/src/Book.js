import React from 'react'

const Book = (props) =>{
    const clickHandler = () => {
      return alert('Hello world')
    }
    const complexExample = (author) => {
      console.log(author)
    }
  const {img,title,author} = props.book
  return <article className='book'>
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type='button' onClick={clickHandler}>reference example</button>
    <button type='button' onMouseOver={()=>complexExample(author)}>More complex example</button>
  </article>
}

export default Book