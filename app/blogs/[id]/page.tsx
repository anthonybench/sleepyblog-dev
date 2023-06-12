import Image from 'next/image';
import Link from 'next/link';

export default function Page({ params }: { params: { id: number } }) {
  return (
    <main>
      <div>
        Blog {params.id}
      </div>
    </main>
  );
}
