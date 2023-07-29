export const Hero = () => (
  <>
    <section id="hero-1115">
      <div className="iep-container">
        <div className="iep-content">
          <span className="iep-topper">Join The Cause</span>
          <h1 className="iep-title">Lend a Helping Hand to Those in Need</h1>
          <p className="iep-text">
            We help companies develop powerful corporate social responsibility,
            grant making, and employee engagement strategies.
          </p>
          <a href="" className="iep-button-solid">
            Donate Now
          </a>
        </div>
        {/*Hero Image*/}
        {/*We need a wrapper div around the image group so the volunteer box can be relatively positioned on mobile to make stacking the design easier */}
        <div className="iep-image-group-wrapper">
          <div className="iep-image-group" aria-hidden="true">
            {/*We have two images, one with a border radius on the bottom and one without. We place them on top of each other so the top picture can appear to overlap the curved one. We did this so you should be able to add any new image you want to use and it should work with minimal editing */}
            {/*Use https://www.remove.bg/ remove the background of any images and make new PNG images to replace our default ones*/}
            {/*Non Masked Image*/}
            <picture className="iep-picture iep-picture1">
              {/*Mobile Image*/}
              <source
                media="(max-width: 600px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-m.png"
              />
              {/*Tablet and above Image*/}
              <source
                media="(min-width: 601px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people.png"
              />
              <img
                decoding="async"
                fetchpriority="high"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people.png"
                alt="people"
                width={651}
                height={523}
              />
            </picture>
            {/*Masked image with border radius on bottom*/}
            <picture className="iep-picture iep-picture2">
              {/*Mobile Image*/}
              <source
                media="(max-width: 600px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people-m.png"
              />
              {/*Tablet and above Image*/}
              <source
                media="(min-width: 601px)"
                srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people.png"
              />
              <img
                decoding="async"
                fetchpriority="high"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/people.png"
                alt="people"
                width={651}
                height={523}
              />
            </picture>
            {/*Floating Icon*/}
            <picture className="iep-floater" aria-hidden="true">
              <img
                className="iep-floater-icon"
                decoding="async"
                fetchpriority="high"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/charity2.svg"
                alt="icon"
                width={52}
                height={52}
              />
            </picture>
            {/*Donations Box*/}
            <div className="iep-donations">
              <picture className="iep-donations-icon-wrapper">
                <img
                  className="iep-donations-icon"
                  decoding="async"
                  fetchpriority="high"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/hand-heart.svg"
                  alt="icon"
                  width={22}
                  height={22}
                />
              </picture>
              <div className="iep-donations-flex">
                <span className="iep-header">Total Goal</span>
                <div className="iep-bar">
                  {/*change the --progress number to match the percentage in iep-number*/}
                  {/* <div class="iep-progress" aria-hidden="true">
                          <span class="iep-progress-bar"  style="--progress: 65%"></span>
                      </div> */}
                  <span className="iep-percentage">65%</span>
                </div>
              </div>
            </div>
            {/*Ying Yang Graphics*/}
            {/*Top Graphic*/}
            <img
              className="iep-graphic iep-graphic1"
              aria-hidden="true"
              decoding="async"
              fetchpriority="high"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/yellow-graphic.svg"
              alt="icon"
              width={586}
              height={356}
            />
            {/*Bottom Graphic*/}
            <img
              className="iep-graphic iep-graphic2"
              aria-hidden="true"
              decoding="async"
              fetchpriority="high"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/green-graphic.svg"
              alt="icon"
              width={586}
              height={356}
            />
          </div>
          {/*Volunteer Box*/}
          <div className="iep-volunteer" aria-hidden="true">
            <span className="iep-header">Join Our Volunteers</span>
            <div className="iep-volunteer-flex">
              <img
                className="iep-volunteer-img"
                decoding="async"
                fetchpriority="high"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/hero-profile1.png"
                alt="icon"
                width={48}
                height={48}
              />
              <img
                className="iep-volunteer-img"
                decoding="async"
                fetchpriority="high"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/hero-profile2.png"
                alt="icon"
                width={48}
                height={48}
              />
              <img
                className="iep-volunteer-img"
                decoding="async"
                fetchpriority="high"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/hero-profile3.png"
                alt="icon"
                width={48}
                height={48}
              />
              <img
                className="iep-volunteer-img"
                decoding="async"
                fetchpriority="high"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/hero-profile4.png"
                alt="icon"
                width={48}
                height={48}
              />
              <img
                className="iep-volunteer-img"
                decoding="async"
                fetchpriority="high"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/hero-profile5.png"
                alt="icon"
                width={48}
                height={48}
              />
              <span className="iep-volunteer-number">+4k</span>
            </div>
            {/*Squiggly Arrow*/}
            <img
              className="iep-arrow"
              decoding="async"
              fetchpriority="high"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/sqiggly-arrow.svg"
              alt="icon"
              width={48}
              height={48}
            />
          </div>
        </div>
      </div>
    </section>

    <style>
      {`        
        /* Mobile - 360px */
        @media only screen and (min-width: 0rem) {          
          #hero-1115 {
            /* remove the font family so the Stitch inherits the fonts from your global stylesheet */
            font-family: 'Roboto', 'Arial', sans-serif;
            /* 200px - 300px top */
            padding: clamp(12.5rem, 16.82vw, 18.75rem) 1rem 6.25rem;
            background-color: #f7f7f7;
            /* clips the svg wave from overflowing */
            overflow: hidden;
            position: relative;
            z-index: 1;
          }
          #hero-1115:before {
            /* textured pattern */
            content: '';
            position: absolute;
            display: block;
            height: 100%;
            width: 100%;
            /* changes to a desktop image at tablet */
            background: url("https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/splatter-bg-m.png");
            background-size: auto;
            background-position: center;
            background-repeat: repeat;
            opacity: 1;
            top: 0;
            left: 0;
            z-index: -1;
            /* prevents the mouse from interacting with itand also in dev tool mode */
            pointer-events: none;
          }
          #hero-1115 .iep-container {
            width: 100%;
            max-width: 80rem;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3rem;
          }
          #hero-1115 .iep-content {
            max-width: 39.375rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          #hero-1115 .iep-topper {
            font-size: 1rem;
            line-height: 1.2em;
            text-transform: uppercase;
            text-align: inherit;
            letter-spacing: .1em;
            font-weight: 700;
            color: #767676;
            margin-bottom: 0.25rem;
            display: block;
          }
          #hero-1115 .iep-title {
            /* 39px - 61px */
            font-size: clamp(2.4375rem, 5vw, 3.8125rem);
            font-weight: 900;
            line-height: 1.2em;
            text-align: center;
            /* 23 characters including spaces wide */
            max-width: 23ch;
            margin: 0 0 1rem 0;
            color: var(--headerColor);
            position: relative;
          }
          #hero-1115 .iep-text {
            /* 16px - 20px */
            font-size: clamp(1rem, 1.5vw, 1.25rem);
            line-height: 1.5em;
            text-align: center;
            width: 100%;
            max-width: 33.1875rem;
            /* 28px - 40px */
            margin: 0 0 clamp(1.75rem, 3.92vw, 2.5rem) 0;
            color: var(--bodyTextColor);
          }
          #hero-1115 .iep-button-solid {
            font-size: 1rem;
            /* 46px - 56px */
            line-height: clamp(2.875rem, 5.5vw, 3.5rem);
            text-decoration: none;
            font-weight: 700;
            text-align: center;
            margin: 0;
            color: #fff;
            min-width: 9.375rem;
            padding: 0 1.5rem;
            background-color: var(--primary);
            border-radius: 0.25rem;
            display: inline-block;
            position: relative;
            z-index: 1;
            /* prevents padding from adding to the width */
            box-sizing: border-box;
          }
          #hero-1115 .iep-button-solid:before {
            content: '';
            position: absolute;
            height: 100%;
            width: 0%;
            background: #000;
            opacity: 1;
            top: 0;
            left: 0;
            z-index: -1;
            border-radius: 0.25rem;
            transition: width .3s;
          }
          #hero-1115 .iep-button-solid:hover:before {
            width: 100%;
          }
          #hero-1115 .iep-image-group-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
            position: relative;
          }
          #hero-1115 .iep-image-group {
            /* we use ems for everything inside the iep-image-group so they pull their value for em from the iep-image-group container that we set.  This min-max property lets us tie the font size to the view width of the screen and grows proportionally with every pixel wide the screen gets until the value the view width units = .75em, resets at small desktop */
            font-size: min(2.2vw, .75em);
            width: 40.8125em;
            height: 38.625em;
            position: relative;
            z-index: 2;
          }
          #hero-1115 .iep-floater {
            /* 50px - 120px */
            width: clamp(3.125rem, 8vw, 7.5rem);
            height: clamp(3.125rem, 8vw, 7.5rem);
            background-color: var(--primary);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 8.125em;
            /* changes to -74px at large desktop */
            left: -2.1875em;
            transform: rotate(-15deg);
          }
          #hero-1115 .iep-floater-icon {
            width: 3.25em;
            height: auto;
          }
          #hero-1115 .iep-picture {
            width: 40.6875em;
            height: 32.6875em;
            overflow: hidden;
            display: flex;
            align-items: flex-end;
            position: absolute;
            left: 50%;
            top: 5.9375em;
            transform: translateX(-50%);
          }
          #hero-1115 .iep-picture img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
          }
          #hero-1115 .iep-picture1 {
            /* we set a height on the top image to cut off the bottom of it and hide it with overflow:hidden where the curved bottom picture meets it. The top image is what overlaps the "curve" of the bottom image.  */
            height: 69.5%;
            transform: translateX(-50%);
            /* clips the bottom left corner of the top image to match the curve of the bottom one because it was too long */
            border-radius: 0 0 0 25%;
          }
          #hero-1115 .iep-picture2 {
            border-radius: 0 0 55% 55%;
          }
          #hero-1115 .iep-graphic {
            width: 36.625em;
            height: auto;
            position: absolute;
            z-index: -1;
          }
          #hero-1115 .iep-graphic1 {
            top: 0;
            right: 0;
          }
          #hero-1115 .iep-graphic2 {
            bottom: 0;
            left: 0;
          }
          #hero-1115 .iep-donations {
            /* 12px - 20px */
            padding: clamp(0.75rem, 2.5vw, 1.25rem);
            /* prevent padding from affecting height and width */
            box-sizing: border-box;
            background-color: #fff;
            box-shadow: 0px 8px 100px 0px rgba(0, 0, 0, 0.08);
            border-radius: 0.75rem;
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            /* 8px - 12px */
            gap: clamp(0.5rem, 1.5vw, 0.75rem);
            position: absolute;
            top: -0.625em;
            right: 0;
          }
          #hero-1115 .iep-donations-icon {
            /* 12px - 20px */
            width: clamp(0.75rem, 2vw, 1.25rem);
            height: auto;
          }
          #hero-1115 .iep-donations-icon-wrapper {
            /* 32px - 48px */
            width: clamp(2rem, 4vw, 3rem);
            height: clamp(2rem, 4vw, 3rem);
            background-color: var(--primaryLight);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #hero-1115 .iep-donations-flex {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            gap: 0.25rem;
          }
          #hero-1115 .iep-bar {
            display: flex;
            justify-content: center;
            align-items: center;
            /* 4px - 8px */
            gap: clamp(0.25rem, 1vw, 0.5rem);
          }
          #hero-1115 .iep-progress {
            /* 100px - 160px */
            width: clamp(6.25rem, 8vw, 10rem);
            /* 4px - 8px */
            height: clamp(0.25rem, 1vw, 0.5rem);
            border-radius: 0.5rem;
            overflow: hidden;
            background-color: #E8E8E8;
          }
          #hero-1115 .iep-progress-bar {
            width: var(--progress);
            height: 100%;
            background-color: var(--secondary);
            border-radius: 0.5rem;
            display: block;
          }
          #hero-1115 .iep-percentage {
            font-size: 0.75rem;
            line-height: 1.2em;
            font-weight: 700;
            margin: 0;
            color: #4E4B66;
            display: block;
          }
          #hero-1115 .iep-volunteer {
            /* 20px - 24px tpo & bottom */
            /* 16px - 20px left & right */
            padding: clamp(1rem, 2vw, 1.25rem) clamp(1.25rem, 2.5vw, 1.5rem);
            /* prevents padding from affecting height and width */
            box-sizing: border-box;
            background-color: #fff;
            border-radius: 0.75rem;
            box-shadow: 0px 8px 100px 0px rgba(0, 0, 0, 0.08);
            display: inline-flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
            /* 8px - 16px */
            gap: clamp(0.5rem, 2vw, 1rem);
            position: relative;
            z-index: -1;
          }
          #hero-1115 .iep-volunteer-flex {
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
          #hero-1115 .iep-header {
            /* 12px - 20px */
            font-size: clamp(0.75rem, 2vw, 1.25rem);
            line-height: 1.2em;
            font-weight: 700;
            margin: 0;
            color: var(--headerColor);
          }
          #hero-1115 .iep-volunteer-img {
            /* 36px 48px */
            width: clamp(2.25rem, 3vw, 3rem);
            height: auto;
            margin: 0 -1rem 0 0;
            border-radius: 50%;
            border: 2px solid #fff;
            background-color: #fff;
          }
          #hero-1115 .iep-volunteer-number {
            /* 12px - 16px */
            font-size: clamp(0.75rem, 2vw, 1rem);
            font-weight: 700;
            /* 36px 48px */
            width: clamp(2.25rem, 3vw, 3rem);
            height: clamp(2.25rem, 3vw, 3rem);
            background-color: var(--secondary);
            color: var(--headerColor);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          #hero-1115 .iep-arrow {
            /* 60px - 130px */
            width: clamp(3.75rem, 10.5vw, 8.125rem);
            height: auto;
            position: absolute;
            bottom: 110%;
            left: -0.625rem;
            transform: rotate(-66deg);
          }
        }
        /* Tablet - 768px */
        @media only screen and (min-width: 48rem) {
          #hero-1115 .iep-image-group {
            font-size: min(1.13vw, 1em);
            /* pushes down to create the space for the iep-volunteer to drop down 68px, since its positioned relative to the iep-image-group-wrapper div at bottom 0, the marign-bottom on the iep-image-group pushes down on the wrapper div, making the iep-volunteer drop down with it since it is positioned to the bottom of the wrapper div */
            margin-bottom: 4.25rem;
          }
          #hero-1115 .iep-donations {
            left: 50%;
            transform: translateX(-50%);
          }
          #hero-1115 .iep-volunteer {
            position: absolute;
            left: -7.1875rem;
            bottom: 0;
            z-index: 10;
          }
          #hero-1115 .iep-arrow {
            bottom: 95%;
            left: 2.375rem;
            transform: rotate(0);
            z-index: -1;
          }
        }
        /* Small Desktop - 1024px */
        @media only screen and (min-width: 64rem) {
          #hero-1115 {
            text-align: left;
          }
          #hero-1115 .iep-container {
            flex-direction: row;
            justify-content: space-between;
          }
          #hero-1115 .iep-content {
            width: 40vw;
            /* prevents flex-box from squishing it */
            flex: none;
            align-items: flex-start;
          }
          #hero-1115 .iep-title,
          #hero-1115 .iep-text {
            text-align: left;
          }
        }
        /* Large Desktop - 1400px */
        @media only screen and (min-width: 87.5rem) {
          #hero-1115 .iep-image-group-wrapper {
            /* 48px - 160px */
            right: calc(clamp(2rem, 3vw, 10rem)*-1);
          }
          #hero-1115 .iep-image-group {
            margin: 0;
            z-index: 10;
          }
          #hero-1115 .iep-floater {
            left: -4.625rem;
          }
          #hero-1115 .iep-volunteer {
            left: -20.0625rem;
            bottom: 1.25rem;
            z-index: -1;
          }
          #hero-1115 .iep-arrow {
            left: 12.5rem;
          }
        }
                    
      `}
    </style>
  </>
)