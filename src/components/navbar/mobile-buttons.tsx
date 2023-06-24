import React from 'react';
import Link from 'next/link';

function MobileButtons() {
  return (
      <div>
        <Link href={{pathname: '/login'}}>Login</Link>
        <button>Burger button</button>
      </div>
  );
}

export default MobileButtons;
