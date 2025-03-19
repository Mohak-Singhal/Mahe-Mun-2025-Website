import React from 'react';
import './GalleryPage.css';

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

const GallerySection = ({ title, images, subsections }) => (
  <section className="gallery-section">
    <h2 className="gallery-section-title">{title}</h2>
    {subsections ? (
      subsections.map((sub, index) => (
        <div key={index}>
          <h3 className="gallery-subsection-title">{sub.title}</h3>
          <div className="gallery-grid">
            {sub.images.map((image, idx) => (
              <div key={idx} className="gallery-card">
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
        </div>
      ))
    ) : (
      <div className="gallery-grid">
        {images.map((image, index) => (
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
    )}
  </section>
);

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      {sectionsData.map((section, index) => (
        <GallerySection
          key={index}
          title={section.title}
          images={section.images}
          subsections={section.subsections}
        />
      ))}
    </div>
  );
};

export default GalleryPage;
