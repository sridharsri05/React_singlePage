import React from 'react'

const About = () => {
    return (
        <div className='child-container' id='About' style={{ backgroundColor: 'green', color: 'white', fontSize: '20px' }}>
            <div style={{ top: '270px', position: 'relative' }}>
                <h1 className='text-center'> Welcome About Page</h1>
                <p className='text-center'>“We now support 14 popular coding languages. At our core, LeetCode is about developers. <br />Our powerful development tools such as Playground help you test, debug and even write your own projects online.”</p>
            </div>
        </div>)
}

export default About