import Link from 'next/link';

// Rounded pill button. Use `external` for links that leave the site (Etsy, etc.).
export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-transform duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-teal/30';

  const variants = {
    primary: 'bg-brand-teal text-white shadow-sm hover:bg-brand-tealDark',
    secondary:
      'bg-white text-brand-teal ring-2 ring-brand-teal hover:bg-brand-teal hover:text-white',
    plum: 'bg-brand-plum text-white shadow-sm hover:brightness-110',
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
