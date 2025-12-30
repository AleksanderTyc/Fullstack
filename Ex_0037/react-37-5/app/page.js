
async function getCatFact() {
  const res = await fetch('https://catfact.ninja/fact');
  const data = res.json();
  return data;
}

async function getCatFactStatic() {
  // export const dynamic = 'force-dynamic';

  return (
    { fact: 'Cats step both left legs, then both right legs, when they walk.' }
  );
}

export default async function Home() {
  const catFact = await getCatFact();
  return (
    <div className="page">
      <main className="main">
        <h1>Cat Facts</h1>
        <div className="fact-card">
          <p className="fact-text">{catFact.fact}</p>
        </div>
      </main>
    </div>
  );
}
