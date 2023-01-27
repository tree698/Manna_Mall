import React from 'react';

export default function Banner() {
  return (
    <section className="h-96 relative">
      <div className="w-full h-full bg-cover bg-banner opacity-90" />
      <p className="absolute bottom-6 right-6 text-5xl opacity-70">
        🍇 🥥 🍈 🥝 🍉
      </p>
    </section>
  );
}
