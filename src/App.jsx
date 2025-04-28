import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";


export default function App() {
  const entries = data

  return (
    <>
      <Header />
      {entries.map((entry) => (
        <Entry 
          key={entry.id}
          entry={entry}
        />
      ))}
    </>
  )
}