import React from 'react';
import Link from 'next/link';
import Logo from '@/components/logo/logo';

export type BrandProps = {
  className?: string;
};

function Brand({className}: BrandProps) {
  return (
      <div className={className}>
        <Link href="/">
          <Logo/>
        </Link>
      </div>
  );
}

export default Brand;
