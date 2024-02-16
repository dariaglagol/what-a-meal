import Image from 'next/image'
import Link from 'next/link'

export function Card({name, description, imageUrl, tags, id}: {
  name: string;
  description: string;
  imageUrl: string;
  id: string;
  tags: object[]; //@todo define types
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
        <Image
          src={imageUrl}
          alt={`${name}'s profile picture`}
          className="w-full object-cover h-1/2"
          width={100}
          height={100}
        />
        <div className="px-6 py-4 flex flex-col">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base line-clamp-2">
            {description}
          </p>
          <Link href={`/recipe/${id}`} className={'bg-green-500 hover:bg-green-700 text-white py-2 px-4 mt-8 rounded-full self-start'}>See more</Link>
        </div>
    </div>
  );
}
