// export const dynamic = 'force-dynamic';


async function getCatFact() {
  // const res = await fetch('https://catfact.ninja/fact', { cache: 'no-store' }); // SSR
  const res = await fetch('https://catfact.ninja/fact'); // dev: SSR, prod: SSG
  // const res = await fetch('https://catfact.ninja/fact', { cache: 'force-cache' }); // SSG when together with export const dynamic
  const data = res.json();
  return data;
}

async function getCatFacts() {
  // const res = await fetch('https://catfact.ninja/facts', { cache: 'no-store' }); // SSR
  const res = await fetch('https://catfact.ninja/facts'); // dev: SSR, prod: SSG
  // const res = await fetch('https://catfact.ninja/facts', { cache: 'force-cache' }); // SSG when together with export const dynamic
  const data = await res.json();
  return data.data;
}

async function getCatFactStatic() {
  return (
    { fact: 'Cats step both left legs, then both right legs, when they walk.' }
  );
}

export default async function Home() {
  // const catFact = await getCatFact();
  const catFacts = await getCatFacts();
  const timeStamp = new Date().toLocaleString();

  function handleFormAction(formData) {
    console.log('* I * handleFormAction', formData);
  }

  const renderedCatFacts = catFacts.map((fact, index) => <div key={index} className="fact-card">
    <p className="fact-text">{fact.fact}</p>
  </div>
  );
  return (
    <div className="page">
      <main className="main">
        <h1>Cat Facts</h1>
        <form>
          <input type="text" name="query" placeholder="Search for..."></input>
        </form>
        <p className="timestamp">Rendered at {timeStamp}</p>
        {renderedCatFacts}
      </main>
    </div>
  );
}
