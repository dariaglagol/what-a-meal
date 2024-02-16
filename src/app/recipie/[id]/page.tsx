import {getRecipie} from '@/app/lib/data'
import Image from 'next/image'

export default async function RecipiePage({params}: {
  params: {
    id: string;
  };
}) {
  const {id} = params;
  const results = await getRecipie(id);
  const {instructions, name, description, sections, tags, thumbnail_url, tips_summary} = results

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{tips_summary?.content}</p>
      <Image
        src={thumbnail_url}
        alt={`${name}'s profile picture`}
        className="mr-4 rounded-full"
        width={100}
        height={100}
      />
    </div>
  )
}