import { Card } from "@/components/ui/card"

interface RegionCardProps {
  name: string
  image: string
  description: string
  onClick: () => void
}

const RegionCard = ({ name, image, description, onClick }: RegionCardProps) => {
  return (
    <Card 
      className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  )
}

export default RegionCard