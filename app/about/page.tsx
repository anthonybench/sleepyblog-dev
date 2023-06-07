import Link from 'next/link';

export default function Page() {
  return (
    <div>

      <h2>hi</h2>

      <p>
        {/* float this to the right */}
        <em>for career engagement, <Link href="/about/resume">see my resume</Link></em>
      </p>

      <p>
        i'm isaac.<br /><br />
        i love making furniture, pizzas, and software.<br />
        a life long engineer & professional kid.<br />
      </p>

      <p>
        Reach out to me!
      </p>
      <ul>
        {/* center these as cards */}
        <li><a href="https://github.com/anthonybench">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/anthonybench/">LinkedIn</a></li>
        <li><a href="https://www.duolingo.com/profile/TheSleepyBoy">DuoLingo</a></li>
      </ul>

    </div>
    );
}