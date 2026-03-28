 'use cache'

import { cacheLife } from "next/cache";

export default async function RandomPage() {

      cacheLife({
          stale: 10,
          revalidate:60
        });
  const uuid = crypto.randomUUID()
  const random = Math.random();
  const now = Date.now();
  const date = new Date();
  const bytes = crypto.getRandomValues(new Uint8Array(16));

   return (
    <div>
        <p>{random}</p>
        <p>{now}</p>
        <p>{date.getTime()}</p>
        <p>{uuid}</p>
        <p>{bytes}</p>

    </div>
  )

}
 