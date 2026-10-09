import React from 'react';
import './Resume.css';
import { Experience, Education } from './WorkExperience';
const Timeline = ({ title, entries, symbol }) => (
  <section className="resume__column" aria-label={title}>
    <h2 className="resume__heading"><span aria-hidden="true">{symbol}</span> {title}</h2>
    <ol className="resume__timeline">
      {entries.map(({ company, title, note, description, url }) => (
        <li className="resume__entry" key={company}>
          <span className="resume__note">{note}</span>
          <h3>{url ? <a href={url}>{company} ↗</a> : company}</h3>
          <p className="resume__role">{title}</p>
          <p>{description}</p>
        </li>
      ))}
    </ol>
  </section>
);
const Resume = () => (
  <section className="resume container section" id="resume">
    <div className="resume__columns">
      <Timeline title="Experience" entries={Experience} symbol="↗" />
      <Timeline title="Education" entries={Education} symbol="✧" />
    </div>
  </section>
);
export default Resume;
