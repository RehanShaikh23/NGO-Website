import {
  GridBody,
  DraggableContainer,
  GridItem,
} from "@/components/ui/infinite-drag-scroll";

// Local images from public/images/
const images = [
  {
    id: 1,
    alt: "Vision4Youth community event photo 1",
    src: "/images/WhatsApp Image 2026-06-29 at 6.17.42 PM.jpeg",
  },
  {
    id: 2,
    alt: "Vision4Youth community event photo 2",
    src: "/images/WhatsApp Image 2026-06-29 at 6.17.42 PM (1).jpeg",
  },
  {
    id: 3,
    alt: "Vision4Youth community event photo 3",
    src: "/images/WhatsApp Image 2026-06-29 at 6.17.42 PM (2).jpeg",
  },
  {
    id: 4,
    alt: "Vision4Youth community event photo 4",
    src: "/images/WhatsApp Image 2026-06-29 at 6.17.43 PM.jpeg",
  },
  {
    id: 5,
    alt: "Vision4Youth community event photo 5",
    src: "/images/WhatsApp Image 2026-06-29 at 6.17.43 PM (1).jpeg",
  },
  {
    id: 6,
    alt: "Vision4Youth community event photo 6",
    src: "/images/WhatsApp Image 2026-06-29 at 6.17.44 PM.jpeg",
  },
  {
    id: 7,
    alt: "Vision4Youth community event photo 7",
    src: "/images/WhatsApp Image 2026-06-29 at 6.46.09 PM.jpeg",
  },
  {
    id: 8,
    alt: "Vision4Youth community event photo 8",
    src: "/images/WhatsApp Image 2026-06-29 at 6.46.09 PM (1).jpeg",
  },
  {
    id: 9,
    alt: "Vision4Youth community event photo 9",
    src: "/images/WhatsApp Image 2026-06-29 at 6.46.10 PM.jpeg",
  },
  {
    id: 10,
    alt: "Vision4Youth community event photo 10",
    src: "/images/WhatsApp Image 2026-06-29 at 6.47.10 PM.jpeg",
  },
  {
    id: 11,
    alt: "Vision4Youth community event photo 11",
    src: "/images/WhatsApp Image 2026-06-29 at 7.06.29 PM.jpeg",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative">
      {/* Section Header — visible above the drag canvas */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 w-full px-6 pt-8 md:px-14">

      </div>

      {/* Draggable Grid */}
      <DraggableContainer variant="masonry">
        <GridBody>
          {images.map((image) => (
            <GridItem
              key={image.id}
              className="relative h-54 w-36 md:h-96 md:w-64"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="pointer-events-none absolute h-full w-full object-cover"
              />
            </GridItem>
          ))}
        </GridBody>
      </DraggableContainer>
    </section>
  );
};

export default Gallery;
