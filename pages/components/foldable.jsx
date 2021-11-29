import { useState } from 'react';

import { Foldable } from 'dist';

export default function StoryFoldable() {
  const [open, setOpen] = useState(true);
  const [string, setString] = useState('');
  return (
    <div className="storyView">
      <Foldable />
    </div>
  );
}
