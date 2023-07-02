import * as React from "react"

import socialMedia from "../assets/socialMedia.jpg"
import quiz from "../assets/quiz.jpg"
import booking from "../assets/booking.jpg"
import portfolio from "../assets/portfolio.jpg"
import youtube from "../assets/youtube.jpg"
import fylo from "../assets/fylo.jpg"

interface ContactInterace{
  displayPage: boolean
}

const Projects = ({displayPage}:ContactInterace) => {
  return (
    <main className="page-container"
    style={{
      display:`${displayPage ? 'block' : 'none'}`, 
      }}>
      <h2 className="projects__title">Projects</h2>
      <div className="projects__tiles">
        <a href="https://booking-lkurczab.netlify.app/" className="project__tile">
            <img src={booking} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Booking</h3>
              <h2 className="project__tile-desc">Mapping an existing page</h2>
            </div>
        </a>
        <a href="https://quizapp-lkurczab.netlify.app/" className="project__tile">
            <img src={quiz} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Quiz</h3>
              <h2 className="project__tile-desc">Own project</h2>
            </div>
        </a>
        <a href="https://portfolio-lkurczab.netlify.app/" className="project__tile">
            <img src={portfolio} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Portfolio</h3>
              <h2 className="project__tile-desc">Created based on the project</h2>
            </div>
        </a>
        <a href="https://youtube-lkurczab.netlify.app/" className="project__tile">
            <img src={youtube} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">YouTube</h3>
              <h2 className="project__tile-desc">Mapping an existing page</h2>
            </div>
        </a>
        <a href="https://fylo-lkurczab.netlify.app/" className="project__tile">
            <img src={fylo} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Fylo</h3>
              <h2 className="project__tile-desc">Created based on the project</h2>
            </div>
        </a>
        <a href="https://social-media-dashboard-lkurczab.netlify.app/" className="project__tile">
            <img src={socialMedia} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Social Media Description</h3>
              <h2 className="project__tile-desc">Created based on the project</h2>
            </div>
        </a>
      </div>
   </main>
  )
}

export default Projects
