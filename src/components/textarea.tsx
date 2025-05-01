'use client';

import React, { useLayoutEffect, useRef } from 'react';

type Properties = Readonly<{
  name: string;
  placeholder?: string;
  children?: React.ReactNode;
}>;

export default function Component(properties: Properties) {
  const component = useRef(null);

  const update = () => {
    component.current.style.height = 'inherit';

    component.current.style.height = `${component.current.scrollHeight}px`;
  };

  useLayoutEffect(update, []);

  return (
    <textarea className="relative resize-none rounded-md focus:outline-none border-(--component) border-2 border-solid px-4 py-4 w-full overflow-hidden" ref={component} onChange={update} placeholder={properties?.placeholder} name={properties.name}>
      {properties?.children}
    </textarea>
  );
};
