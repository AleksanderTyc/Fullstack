export const dynamic = 'force-dynamic';


async function getCatFact() {
  // const res = await fetch('https://catfact.ninja/fact', { cache: 'no-store' }); // SSR
  // const res = await fetch('https://catfact.ninja/fact'); // dev: SSR, prod: SSG
  const res = await fetch('https://catfact.ninja/fact', { cache: 'force-cache' }); // SSG when together with export const dynamic
  const data = res.json();
  return data;
}

async function getCatFactStatic() {
  return (
    { fact: 'Cats step both left legs, then both right legs, when they walk.' }
  );
}

export default async function Home() {
  const catFact = await getCatFact();
  const timeStamp = new Date().toLocaleString();
  return (
    <div className="page">
      <main className="main">
        <h1>Cat Facts</h1>
        <div className="fact-card">
          <p className="timestamp">Rendered at {timeStamp}</p>
          <p className="fact-text">{catFact.fact}</p>
        </div>
      </main>
    </div>
  );
}
