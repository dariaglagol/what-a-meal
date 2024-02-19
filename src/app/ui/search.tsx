'use client';

import React, { ChangeEvent } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import debounce from '@/app/lib/debounce';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const meal = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (meal) {
      params.set('q', meal);
    } else {
      params.delete('q');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 my-5"
        placeholder={placeholder}
        onChange={handleSearch}
        defaultValue={searchParams.get('q')?.toString()}
      />
    </div>
  );
}
