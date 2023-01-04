import './HeroImage.css';
import kitchenIsland from '../../assets/kitchenIsland.jpg';

function HeroImage() {
  return (
    <div className='overlay'>
      <img src={kitchenIsland} />
      <div className='d-flex justify-content-center align-items-center'>
        <h4 className='mb-3 hero-image-title'>
          <span className='hero-image-corners'>
            WE MAKE YOUR HOUSE
            <hr className='hero-image-divider'></hr>
            FEEL MORE LIKE HOME
          </span>
        </h4>
      </div>
    </div>
  );
}

export default HeroImage;
