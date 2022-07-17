import { useState, useEffect } from 'react'
import Icon from '../components/Icon'
import { Link as LinkS } from 'react-scroll';

function Navbar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [show]);
  return (
    <>
      <nav className="py-12 hidden md:block ">
        <div className='max-w-[85%] relative px-12 mx-auto w-full bg-[#AAC1E9] justify-between flex items-center shadow-lg sticky top-0  rounded-[2rem]'>
          <div className='py-4 w-[40%] justify-self-start flex justify-between'>
            <span className="uppercase font-irish text-base text-blue-500">Home</span>
            <span className="uppercase font-irish text-base text-blue-500">Mint NFT</span>
            <span className="uppercase font-irish text-base text-blue-500">Roadmap</span>
            <span className="uppercase font-irish text-base text-blue-500">Team</span>
            <span className="uppercase font-irish text-base text-blue-500">Faq</span>
          </div>

          <img src="/img/logo.png" className="w-24 absolute left-[50%]" />

          <div className='py-3 w-[23%] justify-self-end  content-end flex justify-between'>
            <Icon icon="/img/iconL.png" />
            <Icon icon="/img/iconsT.png" />
            <Icon icon="/img/icong.png" />
            <Icon icon="/img/iconD.png" />

          </div>
        </div>
      </nav>
      <nav className="md:hidden relative">
        <div
          className={`${show ? "w-full h-screen fixed overflow-hidden bg-[rgba(0,0,0,0.3)] lg:bg-transparent " : "w-full"
            } duration-300`}
        >
          <div className="md:hidden py-4 flex items-center justify-between max-w-[90%] mx-auto ">
            <div className="flex w-14 items-center"><img src="/img/logo.png" alt="logo" className="w-full" /></div>
            <i className={` ${show ? "ri-close-line" : "ri-menu-line"} text-4xl font-semibold text-white`} onClick={() => setShow(!show)}></i>
          </div>
          <div className={`items-start justify-center rounded-xl  px-6 flex-col h-[35%] shadow-xl w-[90%] mx-auto z-[100] flex bg-white ${show ? 'translate-y-0 overflow-hidden' : '-translate-y-[150%] '} duration-300`}>
            <LinkS
              activeClass="active"
              to="home"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase mb-3 py-2 font-irish text-base text-blue-500"
            > <span>Home</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="mint"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase mb-3 py-2 font-irish text-base text-blue-500"
            >
              <span>Mint NFT</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="map"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase mb-3 py-2 font-irish text-base text-blue-500"
            >
              <span>Roadmap</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="team"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              className="uppercase mb-3 py-2 font-irish text-base text-blue-500"
              exact="true"
            >
              <span >Team</span>
            </LinkS>
            <LinkS
              activeClass="active"
              to="faq"
              onClick={() => setShow(false)}
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
              className="uppercase mb-3 py-2 font-irish text-base text-blue-500"
            >
              <span>Faq</span>
            </LinkS>
          </div>
        </div>
      </nav>
    </>

  )
}

export default Navbar;