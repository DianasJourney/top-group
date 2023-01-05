import './About.css';

function About() {
  return (
    <section className='bg-light'>
      <div className='container'>
        <div className='row' id='about-row'>
          <div className='col-lg-4 col-md-12 col-12'>
            <div className='about-img'>
              <img
                src='https://www.hummusapien.com/wp-content/uploads/2017/11/AlexisJeff-Interiors-8.jpg'
                alt=''
                className='img-fluid'
              />
            </div>
          </div>
          <div className='col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5'>
            <div className='about-text'>
              <h2>We're fresh and new on the market</h2>
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi non pariatur numquam animi nam Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Commodi non pariatur numquam
                animi nam Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Commodi non pariatur numquam animi nam Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Commodi non pariatur
                numquam animi nam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
