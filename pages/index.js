import Hero from "../components/Hero"
import Layout from "../components/Layout"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact" 


export default function Home() {
  return (
    <div>
      <Layout hideHeader={true}>
         <div className="bg-white">
          <div className="container m-auto">
            <Hero />
          </div>
        </div>
        <div className="bg-black">
          <div className="container m-auto">
            <About/>
          </div>
        </div>
        <div className="bg-white">
          <div className="container m-auto">
            <Skills/>
          </div>
        </div>
        <div className="bg-black">
          <div className="container m-auto">
            <Contact/>
          </div>
        </div>
      
      </Layout>
    </div>
  )
}
