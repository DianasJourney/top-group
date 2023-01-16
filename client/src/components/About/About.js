import './About.css';
import 'animate.css';
import aboutImg from '../../assets/aboutimg.jpeg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function About() {
  return (
    <section className='bg-light'>
      <div className='container'>
        <div className='row' id='about-row'>
          <div className='col-lg-4 col-md-12 col-12'>
            <div>
              <AnimationOnScroll animateIn='animate__fadeIn'>
                <img src={aboutImg} alt='' className='img-fluid' />
              </AnimationOnScroll>
            </div>
          </div>
          <div className='col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5'>
            <div>
              <AnimationOnScroll animateIn='animate__fadeIn'>
                <h2 id='header-text'>About Section</h2>
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi non pariatur numquam animi nam Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Commodi non pariatur
                  numquam animi nam Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Commodi non pariatur numquam animi nam Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Commodi
                  non pariatur numquam animi nam
                </p>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
