import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from '../components/head';

const Home = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.json();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <div>
      <Head title="Home" />

      <div className="hero">
        <h1 className="title">Welcome to Next!</h1>
        <p className="description">
          To get started, edit the <code>pages/index.js</code> or{' '}
          <code>pages/api/date.js</code> files, then save to reload.
        </p>
        <p className="row date">
          The date is:&nbsp;{' '}
          {date ? (
            <span>
              <b>{date.date}</b>
            </span>
          ) : (
            <span className="loading" />
          )}
        </p>
        <Link href="/test">Go to Test...</Link>
      </div>

      <style jsx>{``}</style>
    </div>
  );
};

export default Home;
