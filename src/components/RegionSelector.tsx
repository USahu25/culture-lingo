import { motion } from "framer-motion";
import RegionCard from "./RegionCard";

interface RegionSelectorProps {
  onRegionSelect: (region: string) => void;
}

const regions = [
  {
    name: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
    description: "Learn Tamil and explore the rich Dravidian culture",
  },
  {
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    description: "Master Malayalam and discover God's own country",
  },
  {
    name: "Karnataka",
    image: "https://images.unsplash.com/photo-1600100598297-89f0ae6c3b99",
    description: "Study Kannada and experience the Silicon Valley of India",
  },
  {
    name: "Maharashtra",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
    description: "Learn Marathi and explore the land of warriors",
  },
  {
    name: "Telangana",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fthe-charminar--119908408824420647%2F&psig=AOvVaw3q9zye8Z58zWs8LuLFVguP&ust=1738333661632000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDy49rTnYsDFQAAAAAdAAAAABAE",
    description: "Learn Telugu and discover the heart of South India",
  },
  {
    name: "Bengal",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255",
    description: "Study Bengali and explore the cultural capital",
  },
];

const RegionSelector = ({ onRegionSelect }: RegionSelectorProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container max-w-4xl mx-auto"
    >
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Learning Region</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regions.map((region) => (
          <RegionCard key={region.name} {...region} onClick={() => onRegionSelect(region.name)} />
        ))}
      </div>
    </motion.div>
  );
};

export default RegionSelector;