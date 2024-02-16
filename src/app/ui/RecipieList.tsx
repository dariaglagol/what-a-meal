import {getRecipies} from '@/app/lib/data'
import Search from '@/app/ui/search'
import {Card} from '@/app/ui/cards'

export default async function RecipieList({query}: {query: string;}) {
  const {results} = await getRecipies(query);

  return (
    <div className={'container mx-auto px-4'}>
      <Search placeholder={'Find me if you can'} />

      <div className={'grid grid-cols-4 gap-4'}>
        {results.map((recipe) => {
          const {description, sections, tags, thumbnail_url, name, id} = recipe

          return (
            <Card key={id} description={description} tags={tags} imageUrl={thumbnail_url} name={name} id={id}/>
          )
        })
        }
      </div>
    </div>
  )
}