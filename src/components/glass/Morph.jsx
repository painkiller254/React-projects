import React from 'react'
// import "./morph.scss"

const Morph = () => {
  return (
    <div>
        <form>
        <h1>LOGIN</h1>
        <input type="text" placeholder="USERNAME" /><br/>
        <input type="password" placeholder="PASSWORD" /><br/>
        <button>SUBMIT</button>
        <div>
            <a href='#'>REGISTER</a>
            <a href='#'>FORGOT PASSWORD</a>
        </div>
        </form>
    </div>
  )
}

export default Morph