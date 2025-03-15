import React from 'react';
import './GalleryPage.css';

const imageModules = import.meta.glob('./gallery_images/*.{png,jpg,jpeg,svg}', { eager: true });
const allImages = {};
for (const path in imageModules) {
  const fileName = path.replace('./gallery_images/', '');
  allImages[fileName] = imageModules[path].default || imageModules[path];
}

//Different sections
const sectionsData = [
  {
    title: 'Committee Sessions',
    images: [
      { fileName: '1.jpg', alt: 'Committee Session 1' },
      { fileName: '2.jpg', alt: 'Committee Session 2' },
      { fileName: '6.jpeg', alt: 'Committee Session 2' },
      { fileName: '7.jpeg', alt: 'Committee Session 2' },
      { fileName: '8.jpeg', alt: 'Committee Session 2' },
    ],
  },
  {
    title: 'General Assembly',
    images: [
      { fileName: '3.jpg', alt: 'General Assembly 1' },
      { fileName: '4.jpg', alt: 'General Assembly 2' },
      { fileName: '9.jpeg', alt: 'Committee Session 2' },
      { fileName: '10.jpeg', alt: 'Committee Session 2' },
      { fileName: '8.jpeg', alt: 'Committee Session 2' },
    ],
  },
  {
    title: 'Social Events',
    images: [
      { fileName: '5.jpg', alt: 'Social Event' },
      { fileName: '11.jpeg', alt: 'Committee Session 2' },
      { fileName: '8.jpeg', alt: 'Committee Session 2' },
    ],
  },
];

const GallerySection = ({ title, images }) => (
  <section className="gallery-section">
    <h2 className="gallery-section-title">{title}</h2>
    <div className="gallery-grid">
      {images.map((image, index) => (
        <div key={index} className="gallery-card">
          <img
            src={allImages[image.fileName]}
            alt={image.alt}
            className="gallery-image"
            loading="lazy"
          />
          <div className="card-content">
            {/* caption if needed */}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      {sectionsData.map((section, index) => (
        <GallerySection key={index} title={section.title} images={section.images} />
      ))}
    </div>
  );
};

export default GalleryPage;
