import Image from 'next/image';

import facebook from "../../public/facebook.png"
import bitbucket from "../../public/bitbucket.png"
import linkedin from "../../public/linkedin.png"

export default function Footer() {
  return (
        <footer className="layout__links">
          <a href="https://www.facebook.com/kurczab.lukasz/" className="link">
            <Image src={facebook} alt="" className="link__icon" />
          </a>
          <a href="https://bitbucket.org/lukaszkurczab/" className="link">
            <Image src={bitbucket} alt="" className="link__icon" />
          </a>
          <a href="https://www.linkedin.com/in/lukaszkurczab/" className="link">
            <Image src={linkedin} alt="" className="link__icon" />
          </a>
        </footer>
  )
}