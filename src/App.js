import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import User from './components/user'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/loginForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser ] = useState(null)

  useEffect(() => {
    blogService.getAll()
      .then(initialBlogs =>{
        setBlogs(initialBlogs)
      })
  }, [])

  const handleLogin = async (e) =>{
    e.preventDefault()

    try{
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'loggedBlogUser', JSON.stringify(user)
      )
      setUser(user)
      setUsername('')
      setPassword('')

    }
    catch(exception){

    }
  }

  

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const inputHandler = (e) => {
    let name = e.target.name
    if(name === 'Password'){
      setPassword(e.target.value)
    }
    else if(name === 'Username'){
      setUsername(e.target.value)
    }

  }



  const loginProps = {
    username,
    password,
    inputHandler,
    handleLogin
  }

  if(user === null){
    return <LoginForm {...loginProps}/>
  }

  return (
    <div>
      <h1>Blogs</h1>
      <User name = {user.name} />
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App