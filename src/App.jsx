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
          img={entry.img.src}
          location={entry.img.alt}
          title={entry.title}
          dates={entry.dates}
          text={entry.text}
          googleMapsLink={entry.googleMapsLink}
        />
      ))}
    </>
  )
}