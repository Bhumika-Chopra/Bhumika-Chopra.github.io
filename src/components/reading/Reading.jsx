import React from 'react';
import './Reading.css';

const books = [
  { title: 'The Night Circus', author: 'Erin Morgenstern', motif: '✦', style: 'circus', note: 'A circus after dark, with magic behind every curtain.', url: 'https://www.penguinrandomhouse.com/books/211964/the-night-circus-by-erin-morgenstern/' },
  { title: 'Babel', author: 'R. F. Kuang', motif: '⌘', style: 'babel', note: 'Language, translation, and the weight of power.', url: 'https://www.harperreach.com/products/babel-or-the-necessity-of-violence-an-arcane-history-of-the-oxford-translators-revolution-rf-kuang-9780008501815/' },
  { title: 'Circe', author: 'Madeline Miller', motif: '☾', style: 'circe', note: 'An island, a witch, and a myth told in her own voice.', url: 'https://madelinemiller.com/circe/' },
  { title: 'Piranesi', author: 'Susanna Clarke', motif: '∞', style: 'piranesi', note: 'Endless halls, tides, and a world full of questions.', url: 'https://www.bloomsbury.com/us/piranesi-9781635577808/' },
];

const Reading = () => (
  <section className="reading container section" id="reading" aria-labelledby="reading-title">
    <h2 className="section__title" id="reading-title">One more chapter</h2>
    <p className="reading__intro">A few books from my shelf. Always room for another recommendation.</p>
    <div className="reading__shelf">
      {books.map(({ title, author, motif, style, note, url }) => (
        <article className="reading__book" key={title}>
          <a className={`reading__cover reading__cover--${style}`} href={url} target="_blank" rel="noreferrer" aria-label={`About ${title} by ${author}`}>
            <span className="reading__motif" aria-hidden="true">{motif}</span>
            <h3>{title}</h3>
            <span className="reading__author">{author}</span>
            <span className="reading__bookmark" aria-hidden="true" />
          </a>
          <p className="reading__note">{note}</p>
        </article>
      ))}
    </div>
    <a className="reading__recommend" href="mailto:bhumika.chicago@gmail.com?subject=A%20book%20for%20your%20shelf">Something belongs on this shelf? I'd love to hear about it ↗</a>
  </section>
);
export default Reading;
