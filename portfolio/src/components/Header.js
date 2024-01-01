import React from 'react'
import ParticleEffect from './Particles'
function Header() {
    return (
        <>
            <ParticleEffect></ParticleEffect>
            <div className='home'>

                <div className="info">
                    <h1>Hi There,<br />I'm <strong>Rutval Thonge</strong></h1>
                    <h3>Web Developer | Android Developer</h3>
                    <button className='btn'>About  Me <img src="downArrow.png" alt="" style={{ width: "15px", height: "15px" }} /></button>
                    <div className="links">
                        <a><img src="Links/git.png" alt="Git Image" /></a>


                        <a><img src="Links/insta.png" alt="Instagram Image" /></a>
                        <a><img src="Links/link.png" alt="Linked In Image" /></a>
                    </div>
                </div>
                <div className="imageSec">
                    <img src="RutvalImage.jpg" alt="Rutval's Image" />
                </div>
            </div>
        </>
    )
}

export default Header