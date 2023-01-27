import React from 'react'
import { BsFacebook, BsSkype } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { BsSnapchat } from 'react-icons/bs'
import img from './images/img.jpg'
import img1 from './images/img1.jpeg'
import img2 from './images/img2.webp'
// import { img } from './images/img.jpg'

const Carosuel = () => {
    return (
        <div className='positon-relative z-0 tribute'>

            <div className="heading position-absolute z-1  text-white fw-bold" style={{ left: "33%", top: "40%" }} >
                <h1 className='fw-bold text-uppercase' style={{ marginLeft: "20px" }}>Mark Zuckerberg</h1>
                <h4 className='text-uppercase' >The Man Who Founded Facebook</h4>
            </div>
            <div id="carouselExampleControls" className="carousel slide     " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: "100vh" }}>
                        <img src={img} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ height: "100vh" }}>
                        <img src={img1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ height: "100vh" }}>
                        <img src={img2} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container my-5 card p-3 text-white shadow-lg" style={{ background: "#4a424263" }}>
                <h2 className='mx-3 mb-3'>About Mark Zuckerberg</h2>
                <ul className='w-70' style={{ fontSize: "20px" }}>
                    <li>Zuckerberg started Facebook at Harvard in 2004 at the age of 19 for students to match names with photos of classmates.</li>
                    <li>He took Facebook public in May 2012; he now owns about 13% of the company's stock.</li>
                    <li>Facebook changed its name to Meta in November 2021 to shift the company's focus to the metaverse.</li>
                    <li>In June 2021, a judge dismissed antitrust cases brought by states and the federal government, which could have forced Facebook to sell off Instagram and WhatsApp.</li>
                    <li>In December 2015, Zuckerberg and his wife, Priscilla Chan, pledged to give away 99% of their Facebook stake over their lifetimes.</li>
                </ul>
                <h3>Why Did Mark Zuckerberg Invent Facebook?</h3>
                <div style={{ fontSize: "20px" }}>
                    <h5>College Interaction</h5>
                    <div>
                        <p>The original concept for Facebook involved a way to bring the social experience of college to the Internet. Mark Zuckerberg wanted to create an environment that could help college students connect with one another. Harvard organizations such as fraternities and sororities already had a precursor to Facebook for each individual organization. His idea was to take this information and put it into a central location so that all of the students of a college could communicate with one another.</p>
                    </div>
                    <h5>Privacy Concerns</h5>
                    <div>
                        <p>When creating Facebook, Mark Zuckerberg also wanted to create a way for users to maintain their privacy. Instead of simply posting all of this information for the entire world to see as on a blog, for example, users could control who they share this information with. For example, you can restrict sharing personal information with only your friends or to a specific network. This way, you can limit the amount of information that gets out to the general public while still interacting with your friends.</p>
                    </div>
                    <h5>Business</h5>
                    <div>
                        <p>Beyond the social interaction and privacy controls, Mark Zuckerberg also created Facebook because he believed it could be a viable business. He got some start-up capital from his friend Eduardo Saverin because he expected to be able to make money with his idea at some point in the future. At the time, he did not anticipate how massively successful Facebook would be, but it emerged as one of the biggest companies in the world today.</p>
                    </div>
                </div>
            </div>
            <div className="container my-5 card p-3  shadow-lg" style={{ background: "transparent" }}>
                <div className="d-flex justify-content-center">
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"> <BsFacebook style={{ fontSize: "34px", margin: "20px" }} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> <BsInstagram style={{ fontSize: "34px", margin: "20px" }} /></a>
                    <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer"> <BsWhatsapp style={{ fontSize: "34px", margin: "20px" }} />
                    </a>
                    <a href="https://www.snapchat.com/" target="_blank" rel="noreferrer"> <BsSnapchat style={{ fontSize: "34px", margin: "20px" }} />
                    </a>

                    <a href="https://www.skype.com/en/" rel="noreferrer" target="_blank"> <BsSkype style={{ fontSize: "34px", margin: "20px" }} />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Carosuel