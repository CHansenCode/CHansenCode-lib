import React, { useState } from 'react';
import { Button } from 'chansencode-lib';

export function Foldable() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${css.foldable} ${isOpen && css.open}`}
      style={{ height: isOpen ? '20rem' : '10rem' }}
    >
      <Button children="cow" onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
}
