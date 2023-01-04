import './HeroImage.css';

function HeroImage() {
  return (
    <div className='overlay'>
      <div className='p-5 text-center bg-image rounded-3 hero-image'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>TOP GROUP CONSTURCTION</h1>
              <h4 className='mb-3'>We make your house feel more like home</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
