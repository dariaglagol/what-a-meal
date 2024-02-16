import Image from 'next/image';
import Link from 'next/link';

export function Card({name, description, imageUrl, tags, id}: {
  name: string;
  description: string;
  imageUrl: string;
  id: string;
  tags: object[]; //@todo define types
}) {
  console.log({tags})
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
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        <Link href={`/recipie/${id}`}>See more</Link>
    </div>
  );
}
