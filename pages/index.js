import Hero from "../components/Hero"
import Layout from "../components/Layout"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import WebsiteCard from "../components/Cards/WebsiteCard"
import Education from "../components/Education"
import Achievement from "../components/Achievement"
import Experience from "../components/Experience"



export default function Home() {
  return (
    <div>
      <Layout hideHeader={true}>
        <div className="bg-white">
          <div className="container m-auto">
            <Hero />
          </div>
        </div>
        <div className="bg-white -mt-20">
          <div className='bg-black hero h-20'></div>

        </div>

        <div className="bg-black">
          <div className="container m-auto">
            <About />
          </div>
        </div>
        <div className="bg-white">
          <div className="container m-auto">
            <Skills />
          </div>
        </div>


        <div className="bg-black">
          <div className="container m-auto">
            <WebsiteCard />
          </div>
        </div>

        <div className="bg-white">
          <div className="container m-auto">
            <Experience />
          </div>
        </div>

        <div className="bg-black">
          <div className="container m-auto">
            <Achievement />
          </div>
        </div>


        <div className="bg-white">
          <div className="container m-auto">
            <Education />
          </div>
        </div>

        <div className="bg-black">
          <div className="container m-auto">
            <Contact />
          </div>
        </div>


      </Layout>
    </div>
  )
}
