import Image from 'next/image';

import socialMedia from "../../public/socialMedia.jpg"
import quiz from "../../public/quiz.jpg"
import booking from "../../public/booking.jpg"
import portfolio from "../../public/portfolio.jpg"
import youtube from "../../public/youtube.jpg"
import fylo from "../../public/fylo.jpg"

import styles from "./styles.module.scss"

const Experience = () => {

  return (
    <main className={styles.landingPage}>
      <h2 className="projects__title">Projects</h2>
      <div className="projects__tiles">
        <a href="https://booking-lkurczab.netlify.app/" className="project__tile">
            <Image src={booking} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Booking</h3>
              <h2 className="project__tile-desc">Mapping an existing page</h2>
            </div>
        </a>
        <a href="https://quizapp-lkurczab.netlify.app/" className="project__tile">
            <Image src={quiz} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Quiz</h3>
              <h2 className="project__tile-desc">Own project</h2>
            </div>
        </a>
        <a href="https://portfolio-lkurczab.netlify.app/" className="project__tile">
            <Image src={portfolio} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Portfolio</h3>
              <h2 className="project__tile-desc">Created based on the project</h2>
            </div>
        </a>
        <a href="https://youtube-lkurczab.netlify.app/" className="project__tile">
            <Image src={youtube} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">YouTube</h3>
              <h2 className="project__tile-desc">Mapping an existing page</h2>
            </div>
        </a>
        <a href="https://fylo-lkurczab.netlify.app/" className="project__tile">
            <Image src={fylo} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Fylo</h3>
              <h2 className="project__tile-desc">Created based on the project</h2>
            </div>
        </a>
        <a href="https://social-media-dashboard-lkurczab.netlify.app/" className="project__tile">
            <Image src={socialMedia} alt="" className="project__tile-image"/>
            <div className="project__tile-textWrapper">
              <h3 className="project__tile-name">Social Media Description</h3>
              <h2 className="project__tile-desc">Created based on the project</h2>
            </div>
        </a>
      </div>
   </main>
  )
}

export default Experience
