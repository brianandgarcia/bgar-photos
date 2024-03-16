import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-12 pb-12">
      <p className="text-2xl dark:text-white text-left">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
