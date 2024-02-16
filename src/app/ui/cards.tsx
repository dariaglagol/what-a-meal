import Image from 'next/image';
import Link from 'next/link';

export function Card({name, description, imageUrl, tags, id}: {
  name: string;
  description: string;
  imageUrl: string;
  id: string;
  tags: object[]; //@todo define types
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image
          src={imageUrl}
          alt={`${name}'s profile picture`}
          className="w-full"
          width={100}
          height={100}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base truncate ...">
            {description}
          </p>
        </div>
        <Link href={`/recipie/${id}`}>See more</Link>
    </div>
  );
}
