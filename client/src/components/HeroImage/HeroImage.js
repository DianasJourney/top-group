import './HeroImage.css';
import kitchenIsland from '../../assets/kitchenIsland.jpg';

function HeroImage() {
  return (
    <div className='overlay'>
      <div className='hero-image-container'>
        <img src={kitchenIsland} className='hero-image' />
        <div className='hero-image-title'>
          <span className='hero-image-corners'>
            WE MAKE YOUR HOUSE
            <hr className='hero-image-divider'></hr>
            FEEL MORE LIKE HOME
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
