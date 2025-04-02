import React, { useState, useRef } from 'react';
import './GalleryPage.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const imageModules = import.meta.glob('./gallery_images/**/*.{png,jpg,jpeg,svg}', { eager: true });
const allImages = {};

for (const path in imageModules) {
  const fileName = path.replace('./gallery_images/', '').toLowerCase();
  allImages[fileName] = imageModules[path].default || imageModules[path];
}

const getImagesFromFolder = (folderName) => {
  const lowerFolder = folderName.toLowerCase();
  const images = Object.keys(allImages)
    .filter(key => key.startsWith(`${lowerFolder}/`))
    .map(key => ({
      fileName: key,
      alt: `${folderName} Image`,
    }));
  if (images.length === 0) {
    console.warn(`No images found in folder: ${folderName}`);
  }
  return images;
};

const sectionsData = [
  {
    title: 'January Conference',
    subsections: [
      {
        title: 'Committee Session',
        images: getImagesFromFolder('jan_committee_sessions'),
      },
      {
        title: 'Cultural Night',
        images: getImagesFromFolder('jan_cultural_night'),
      },
    ],
  },
  {
    title: 'Officiating Ceremony',
    images: getImagesFromFolder('officiating_ceremony'),
  },
  {
    title: 'Constitution Ceremony',
    images: getImagesFromFolder('constitution_ceremony'),
  },
];


const GalleryGrid = ({ images }) => {
  const [visibleCount, setVisibleCount] = useState(6); 
  const [isExpanded, setIsExpanded] = useState(false);
  const gridRef = useRef(null); 
  const scrollPosition = useRef(0);

  const handleShowMore = () => {
    scrollPosition.current = window.scrollY; 
    setVisibleCount(images.length);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    setIsExpanded(false);
    setTimeout(() => {
      window.scrollTo({ top: scrollPosition.current, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div ref={gridRef}>
      <div className="gallery-grid ">
        {images.slice(0, visibleCount).map((image, index) => (
          <div key={index} className="gallery-card">
            <img
              src={allImages[image.fileName]}
              alt={image.alt}
              className="gallery-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
      <div className="show-more-container">
        {!isExpanded && visibleCount < images.length && (
          <button className="show-more-button" onClick={handleShowMore}>
            Show More
          </button>
        )}
        {isExpanded && (
          <button className="show-less-button" onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};


const GallerySection = ({ title, images, subsections }) => (
  <section className="gallery-section">
    <h2 className="gallery-section-title">{title}</h2>
    {subsections ? (
      subsections.map((sub, index) => (
        <div key={index}>
          <h3 className="gallery-subsection-title">{sub.title}</h3>
          <GalleryGrid images={sub.images} />
        </div>
      ))
    ) : (
      <GalleryGrid images={images} />
    )}
  </section>
);

const GalleryPage = () => {
  return (
    <>
      <Navbar classname="text-white bg-black"/>
      <div className="gallery-page  ">
        {sectionsData.map((section, index) => (
          <GallerySection
            key={index}
            title={section.title}
            images={section.images}
            subsections={section.subsections}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
