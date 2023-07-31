export const Gallery = () => (
  <>
    <section id="gallery-1152">
      <div className="cs-container">
        <div className="cs-content">
          <span className="cs-topper">Our Portfolio</span>
          <h2 className="cs-title">Our Photo Gallery</h2>
        </div>
        <div className="cs-gallery">
          {/*Picture 1*/}
          <picture className="cs-image">
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char1.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char1.jpg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char1.jpg"
              alt="gallery"
              width={272}
              height={320}
            />
          </picture>
          {/*Picture 2*/}
          <picture className="cs-image">
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char2.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char2.jpg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char2.jpg"
              alt="gallery"
              width={272}
              height={320}
            />
          </picture>
          {/*Picture 3*/}
          <picture className="cs-image">
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char3.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char3.jpg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char3.jpg"
              alt="gallery"
              width={272}
              height={320}
            />
          </picture>
          {/*Picture 4*/}
          <picture className="cs-image">
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char4.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char4.jpg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char4.jpg"
              alt="gallery"
              width={272}
              height={320}
            />
          </picture>
          {/*Picture 5*/}
          <picture className="cs-image">
            <source
              media="(max-width: 600px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char5.jpg"
            />
            <source
              media="(min-width: 601px)"
              srcSet="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char5.jpg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/char5.jpg"
              alt="gallery"
              width={272}
              height={320}
            />
          </picture>
        </div>
      </div>
    </section>
    <style jsx>
      {`
        /* Mobile - 360px */
        @media only screen and (min-width: 0rem) {
          :root {
            /* remove this whole :root and put in your global css file that's shared on all pages, then just remove this section from all other Stitches you add later, only need this once in your global stylesheet */
            --primary: #00715D;
            --primaryLight: #d8673d;
            --secondary: #FDD65B;
            --secondaryLight: #FFBA43;
            --headerColor: #1a1a1a;
            --bodyTextColor: #4E4B66;
            --bodyTextColorWhite: #FAFBFC;
            /* 13px - 16px */
            --topperFontSize: clamp(0.8125rem, 1.6vw, 1rem);
            /* 31px - 49px */
            --headerFontSize: clamp(1.9375rem, 3.9vw, 3.0625rem);
            --bodyFontSize: 1rem;
            /* 60px - 100px top and bottom */
            --sectionPadding: clamp(3.75rem, 7.82vw, 6.25rem) 1rem;
          }
          #gallery-1152 {
            /* remove the font family so the Stitch inherits the fonts from your global stylesheet */
            font-family: 'Roboto', 'Arial', sans-serif;
            padding: var(--sectionPadding);
          }
          #gallery-1152 .cs-container {
            width: 100%;
            /* changes to 1280px at large desktop */
            max-width: 59rem;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            /* 48px - 64px */
            gap: clamp(3rem, 6vw, 4rem);
          }
          #gallery-1152 .cs-content {
            /* set text align to left if content needs to be left aligned */
            text-align: center;
            width: 100%;
            display: flex;
            flex-direction: column;
            /* centers content horizontally, set to flex-start to left align */
            align-items: center;
          }
          #gallery-1152 .cs-topper {
            font-size: var(--topperFontSize);
            line-height: 1.2em;
            text-transform: uppercase;
            text-align: inherit;
            letter-spacing: .1em;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 0.25rem;
            display: block;
          }
          #gallery-1152 .cs-title {
            font-size: var(--headerFontSize);
            font-weight: 900;
            line-height: 1.2em;
            text-align: inherit;
            max-width: 43.75rem;
            margin: 0 0 1rem 0;
            color: var(--headerColor);
            position: relative;
          }
          #gallery-1152 .cs-topper {
            /* Override.  cs-topper cs-title and first cs-text should be removed and put into your global css sheet so it can control every instance of them on your site and is consistent. This selector is a section specific override that stays inside this stitch */
            color: #767676;
          }
          #gallery-1152 .cs-title {
            /* Override.  cs-topper cs-title and first cs-text should be removed and put into your global css sheet so it can control every instance of them on your site and is consistent. This selector is a section specific override that stays inside this stitch */
            margin: 0;
          }
          #gallery-1152 .cs-gallery {
            width: 100%;
            /* changes to 100% at tablet */
            max-width: 31.25rem;
            padding: 0;
            margin: 0;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            /* 16px - 20px */
            gap: clamp(1rem, 1.5vw, 1.25rem);
          }
          #gallery-1152 .cs-image {
            /* 260px - 360px */
            min-height: clamp(16.25rem, 60vw, 20rem);
            border-radius: 1rem;
            /* clips the image corners */
            overflow: hidden;
            display: block;
            grid-column: span 12;
            grid-row: span 1;
            position: relative;
          }
          #gallery-1152 .cs-image img {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            /* makes it act like a background image */
            object-fit: cover;
          }
        }
        /* Tablet - 700px */
        @media only screen and (min-width: 43.75rem) {
          #gallery-1152 .cs-gallery {
            max-width: 100%;
            grid-template-rows: 1fr;
          }
          #gallery-1152 .cs-image {
            grid-column: span 4;
          }
          #gallery-1152 .cs-image:nth-of-type(4),
          #gallery-1152 .cs-image:nth-of-type(5) {
            grid-column: span 6;
          }
        }
        /* Large Desktop - 1300px */
        @media only screen and (min-width: 81.25rem) {
          #gallery-1152 .cs-container {
            max-width: 80rem;
          }
          #gallery-1152 .cs-gallery {
            grid-template-columns: repeat(5, 1fr);
          }
          #gallery-1152 .cs-image {
            grid-column: span 1;
          }
          #gallery-1152 .cs-image:nth-of-type(4),
          #gallery-1152 .cs-image:nth-of-type(5) {
            grid-column: span 1;
          }
        }
                                        
      `}
    </style>
  </>
)