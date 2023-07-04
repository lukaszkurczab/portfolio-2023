import * as React from "react"
import { useSwipeable } from "react-swipeable"
import Contact from "./contact"
import LandingPage from "./lanadingPage"
import Projects from "./projects"
import Tech from "./tech"
import Layout from "../components/Layout"
import "../styles/themes/default/themes.scss"

const isBrowser = typeof window !== "undefined"

const IndexPage = () => {
  const [view, setView] = React.useState(0)

  const { ref } = useSwipeable({
    onSwipedRight: () => view > 0 ? setView(view - 1) : null,
    onSwipedLeft: () => view < 3 ? setView(view + 1) : null,
  }) as { ref: React.RefCallback<Document> };
  
  React.useEffect(() => {
    ref(document);
  });

  enum Pages{
    landingPage,
    tech,
    projects,
    contact
  }

  if(isBrowser){
    window.onwheel = (e) =>{
      e.preventDefault
      if(e.deltaY > 0){
        view < 3 ? setView(view + 1) : null
      } else {
        view > 0 ? setView(view - 1) : null
      }
    }
  }

  return (
    <Layout view={view} setView={setView} page={Pages[view]} >
      <>
        <LandingPage displayPage={Pages[view] === 'landingPage' ? true : false}/>
        <Tech displayPage={Pages[view] === 'tech' ? true : false}/>
        <Projects displayPage={Pages[view] === 'projects' ? true : false}/>
        <Contact displayPage={Pages[view] === 'contact' ? true : false}/>
      </>
   </Layout>
  )
}

export default IndexPage
