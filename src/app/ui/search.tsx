'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import {debounce} from '@/app/lib/debounce'
// import { useDebouncedCallback } from 'use-debounce'; @todo: add this

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = debounce((e) => {
    const term = e.target.value
    const params = new URLSearchParams(searchParams);
    params.set('q', '1');
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 1000)

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={handleSearch}
        defaultValue={searchParams.get('q')?.toString()}
      />
    </div>
  );
}
