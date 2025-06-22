import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonials = () => {
  React.useEffect(()=>{
    AOS.init({once:false})
  },[])
  return (
    <>
      <section className="text-gray-600 bg-gray-100 body-font">
        <h1 className="pt-12 text-center text-5xl font-medium text-black" data-aos='fade-up'>Testimonials</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos='zoom-in'>
              <div className="h-full text-center">
                <img src='https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=' alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos='zoom-in'>
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s" />
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4" data-aos='zoom-in'>
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ZehGOS1kvC53C3aoIgoGW9O15F0nOVoIKg&s" />
                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Testimonials