import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

import { NextPageWithLayout } from './_app';

const CustomLayoutPage: NextPageWithLayout = () => (
  <div>
    <Head>
      <title>Custom layout | Nextjs boilerplate</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="mt-8 text-center text-2xl font-bold text-rose-800">
      Nextjs boilerplate - Custom layout
    </h1>
  </div>
);

const links = [
  { slug: '/', label: 'Home' },
  { slug: '/custom-layout', label: 'Custom layout' }
];

CustomLayoutPage.getLayout = (page: ReactNode) => (
  <div>
    <header className="bg-rose-800 p-4">
      <ul className="flex items-center gap-10 text-gray-50">
        {links.map(({ slug, label }) => (
          <li key={slug}>
            <Link href={slug} className="inline-block p-2 transition-colors hover:text-orange-100">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
    <main className="bg-[#FCFCFC]">{page}</main>
  </div>
);

export default CustomLayoutPage;
