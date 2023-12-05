import Image from 'next/image';

import socialMedia from "../../public/socialMedia.jpg"
import quiz from "../../public/quiz.jpg"
import booking from "../../public/booking.jpg"
import portfolio from "../../public/portfolio.jpg"
import youtube from "../../public/youtube.jpg"
import fylo from "../../public/fylo.jpg"
import capgemini from "../../public/capgemini.jpg"
import workon from "../../public/workon.jpg"

import styles from "./styles.module.scss"

const Experience = () => {

  return (
    <main className={styles.landingPage}>
      <h2 className={styles.experience__title}>Experience</h2>
      <div className={styles.projects__group}>
        <h3 className={styles.tilesGroup__title}>Commercial experience</h3>
        <div className={styles.projectsTiles}>
          <a href="https://www.capgemini.com/" className={styles.project__tile}>
            <Image src={capgemini} alt="" className={styles.project__tileImage}/>
            <div className={styles.project__tileTextWrapper}>
              <h3 className={styles.project__tileName}>Capgemini</h3>
              <h2 className={styles.project__tileDesc}>Frontend developer</h2>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.projects__group}>
        <h3 className={styles.tilesGroup__title}>Own projects</h3>
        <div className={styles.projectsTiles}>
          <a href="https://quizapp-lkurczab.netlify.app/" className={styles.project__tile}>
            <Image src={quiz} alt="" className={styles.project__tileImage}/>
            <div className={styles.project__tileTextWrapper}>
              <h3 className={styles.project__tileName}>Quiz</h3>
              <h2 className={styles.project__tileDesc}>Own project</h2>
            </div>
          </a>
          <a href="" className={styles.project__tile}>
            <Image src={workon} alt="" className={styles.project__tileImage}/>
            <div className={styles.project__tileTextWrapper}>
              <h3 className={styles.project__tileName}>WorkOn</h3>
              <h2 className={styles.project__tileDesc}>Own mobile aplication - in development</h2>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.projects__group}>
        <h3 className={styles.tilesGroup__title}>Learning</h3>
        <div className={styles.projectsTiles}>
          <a href="https://booking-lkurczab.netlify.app/" className={styles.project__tile}>
            <Image src={booking} alt="" className={styles.project__tileImage}/>
            <div className={styles.project__tileTextWrapper}>
              <h3 className={styles.project__tileName}>Booking</h3>
              <h2 className={styles.project__tileDesc}>Mapping an existing page</h2>
            </div>
          </a>
          <a href="https://portfolio-lkurczab.netlify.app/" className={styles.project__tile}>
              <Image src={portfolio} alt="" className={styles.project__tileImage}/>
              <div className={styles.project__tileTextWrapper}>
                <h3 className={styles.project__tileName}>Portfolio</h3>
                <h2 className={styles.project__tileDesc}>Created based on the project</h2>
              </div>
          </a>
          <a href="https://youtube-lkurczab.netlify.app/" className={styles.project__tile}>
              <Image src={youtube} alt="" className={styles.project__tileImage} />
              <div className={styles.project__tileTextWrapper}>
                <h3 className={styles.project__tileName}>YouTube</h3>
                <h2 className={styles.project__tileDesc}>Mapping an existing page</h2>
              </div>
          </a>
          <a href="https://fylo-lkurczab.netlify.app/" className={styles.project__tile}>
              <Image src={fylo} alt="" className={styles.project__tileImage}/>
              <div className={styles.project__tileTextWrapper}>
                <h3 className={styles.project__tileName}>Fylo</h3>
                <h2 className={styles.project__tileDesc}>Created based on the project</h2>
              </div>
          </a>
          <a href="https://social-media-dashboard-lkurczab.netlify.app/" className={styles.project__tile}>
              <Image src={socialMedia} alt="" className={styles.project__tileImage}/>
              <div className={styles.project__tileTextWrapper}>
                <h3 className={styles.project__tileName}>Social Media Description</h3>
                <h2 className={styles.project__tileDesc}>Created based on the project</h2>
              </div>
          </a>
        </div>
        
      </div>
   </main>
  )
}

export default Experience
