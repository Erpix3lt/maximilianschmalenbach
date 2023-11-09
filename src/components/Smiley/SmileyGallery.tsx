// components/SmileyGallery.tsx
interface SmileyGalleryProps {
  gallery: string[];
}

const SmileyGallery = ({ gallery }: SmileyGalleryProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Smiley Gallery</h2>
      <div className="flex flex-wrap">
        {gallery.map((smiley, index) => (
          <div key={index} className="m-2 text-3xl">
            {smiley}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmileyGallery;
