import React, { useState } from 'react';
import { Button } from 'chansencode-lib';

export function Foldable() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ height: isOpen ? '20rem' : '10rem', border: 'thin solid' }}>
      <Button children="cow" onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
}
