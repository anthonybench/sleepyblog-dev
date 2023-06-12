import Image from 'next/image'
import Link from 'next/link';

export default function Page({ params }: { params: { id: number } }) {
  return (
    <main>
      <h2>Blog {params.id}</h2>

      <div>
        {params.id}
      </div>
    </main>
  );
}
