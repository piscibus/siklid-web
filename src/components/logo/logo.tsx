import React from 'react';
import Image from 'next/image';

type Size = 'sm' | 'md' | 'lg';

export type LogoProps = {
  size?: Size;
}

type Dimensions = {
  width: number;
  height: number;
}

function dimensions(size: Size): Dimensions {
  const width = 124;
  const height = 34;
  switch (size) {
    case 'md':
      return {width, height};
    case 'sm':
      return {width: width / 2, height: height / 2};
    case 'lg':
      return {width: width * 2, height: height * 2};
  }
}

function Logo({size = 'md'}: LogoProps) {
  const {width, height} = dimensions(size);
  return (
      <Image src="/vercel.svg" alt="Siklid" width={width} height={height}/>
  );
}

export default Logo;
