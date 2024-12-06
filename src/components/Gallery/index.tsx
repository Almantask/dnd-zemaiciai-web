import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

type GalleryItem = {
  src: string;
  alt: string;
};

const GalleryItems: GalleryItem[] = [
  { src: "img/group/Vėtra.jpg", alt: "Image 1" },
  { src: "img/group/Vakarė.jpg", alt: "Image 2" },
  { src: "img/group/Vėja.jpg", alt: "Image 3" },
  { src: "img/group/Severija.jpeg", alt: "Image 4" },
  { src: "img/group/Grimantas.jpeg", alt: "Image 5" },
  { src: "img/group/Thorn.jpeg", alt: "Image 6" },
];

type GalleryProps = {
  items?: GalleryItem[];
};

function GallerySlide({ src, alt }: GalleryItem) {
  return (
    <div className={clsx(styles.gallerySlide)}>
      <img src={src} alt={alt} className={styles.galleryImage} />
    </div>
  );
}

export default function Gallery({ items = GalleryItems }: GalleryProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className={styles.galleryContainer}>
      <div
        className={styles.galleryTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <GallerySlide key={index} {...item} />
        ))}
      </div>

      <button
        className={clsx(styles.arrow, styles.arrowLeft)}
        onClick={prevSlide}
        aria-label="Ankstesnis"
      >
        &#8249; {/* Left arrow symbol */}
      </button>
      <button
        className={clsx(styles.arrow, styles.arrowRight)}
        onClick={nextSlide}
        aria-label="Sekantis"
      >
        &#8250; {/* Right arrow symbol */}
      </button>
    </section>
  );
}
