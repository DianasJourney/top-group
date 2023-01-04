import {Collapse} from 'bootstrap';
import './Navbar.css'
import logo from "../../assets/logo.png"
import instalogo from "../../assets/instalogo.png"
import youtubelogo from "../../assets/youtubelogo.png"

function Navbar () {
  return (
    <nav class='navbar navbar-expand-md bg-light navbar-light shadow-sm p-3 mb-5 bg-body rounded'>
      <a href='#' class='navbar-brand'>
        <img src={logo} alt='logo' id='logoimg' />
      </a>

      {/* toggles navbar once it gets to a certain size, switching it to a hamburger icon */}
      <button
        class='text-center navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#coll'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      {/* navbar links for each section */}
      <div class='collapse navbar-collapse justify-content-start' id='coll'>
        <ul class='navbar-nav text-center' id='custom-links'>
          <li class='nav-item'>
            <a href='#' class='nav-link'>
              About
            </a>
          </li>

          <li class='nav-item'>
            <a href='#' class='nav-link' >
              Service
            </a>
          </li>

          <li class='nav-item'>
            <a href='#' class='nav-link'>
              Gallery
            </a>
          </li>

          <li class='nav-item'>
            <a href='#' class='nav-link'>
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* social media logo brands */}
      <a
        href='https://www.instagram.com/tgc.topgroupconstruction/'
        class='navbar-brand' id='ins-soc'
      >
        <img src={instalogo} alt='instalogo' id='instagram-logo' />
      </a>
      <a href='https://www.youtube.com/@poldosreno2014' class='navbar-brand' id='yt-soc'>
        <img src={youtubelogo} alt='ytlogo' id='youtube-logo' />
      </a>
    </nav>
  );
}


export default Navbar;