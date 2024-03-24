import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-2 pb-2 bg-[#000000ba] mb-10">
      <div className="container">
        <p className="text-2xl text-white text-left font-bold">
          <Link href="/">
            <a>&copy;{name}</a>
          </Link>
        </p>
      </div>
    </header>
  );
}
