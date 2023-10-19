import GalleryModal from "../components/GalleryModal";
import { images } from "../data/ApplicationData";

function AboutGallery() {
  return (
    <section>
      <GalleryModal images={images} />
    </section>
  );
}

export default AboutGallery;
