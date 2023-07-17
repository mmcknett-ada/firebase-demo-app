export default function Things(props) {
  const FAKE_THING_LIST = [
    { name: "Thing 1" },
    { name: "Thing 2" }
  ]

  const things = FAKE_THING_LIST;

  return (
    <article>
      <h2>All things:</h2>
      <ul>
        { things.map(thing => <li>{ thing.name }</li>) }
      </ul>
    </article>
  )
}