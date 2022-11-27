// import Event from "../components/Event"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
// import Service from "../components/Service"
// import Copyright from "../components/Shared/Copyright"


export default function Home() {
  return (
    <div>
      <Layout hideHeader={true}>
         <div className="bg-white">
          <div className="container m-auto">
            <Hero />
          </div>
        </div>
        {/* <div className="h-screen">

        </div>
        <div className="h-screen">

        </div>
        <div className="h-screen">

        </div> */}
        {/*

        <div className="container m-auto">
          <Service />
        </div>

        <div className="bg-red w-full opacity-[80%]">
        <div className="container m-auto" id="Event">
          <Event/>
          </div>
          </div> */}

        {/*
         <div className="container m-auto">
          <About />
          <AboutUs />       
        </div>

        <div className="bg-[url(/img/Homepage1.png)] bg-cover bg-fixed bg-no-repeat h-[54rem] w-full">
          <div className="bg-primary bg-opacity-[4%] h-[54rem]">
            <div data-aos='fade-right' className="container m-auto">
              <section id="roadmap">
              <RoadMap />
              </section>
            </div>
          </div>
        </div>

        <div className="container m-auto">
          <section id="partners">

        <Trust/>
          </section>
        
        <WhyChoose/>
        </div> */}

        {/* <div className="bg-[url(/img/Homepage1.png)] bg-cover bg-fixed bg-no-repeat h-[130rem] lap:h-[60rem] w-full">
          <div className="bg-primary bg-opacity-[4%] h-[130rem] lap:h-[60rem]">
            <div className="container m-auto">
            <Blogs/>
            </div>
          </div>
        </div> */}
        {/* 
    <div className="container m-auto">
    <Testimonial/>
    <GetApp/>
  */}

      </Layout>
    </div>
  )
}
