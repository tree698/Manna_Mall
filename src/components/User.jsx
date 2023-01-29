import React from 'react';

export default function User({ user: { displayName, photoURL } }) {
  return (
    <div className="flex items-center shrink-0">
      <img
        className="w-10 h-10 rounded-full mr-2"
        src={photoURL}
        alt={displayName}
      />
      <span className="hidden md:block text-sm">{displayName}</span>
    </div>
  );
}
