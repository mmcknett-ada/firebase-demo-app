import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

import app from '../firebase.js';

export default function Things(props) {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), 'things'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  // const FAKE_THING_LIST = [
  //   { name: "Thing 1" },
  //   { name: "Thing 2" }
  // ]

  const things = value && value.docs.map(doc => ({ name: doc.data().name }));

  if (loading) {
    return <article>Loading things...</article>
  }

  if (error) {
    return <article>Failed to load things: {JSON.stringify(error)}</article>
  }

  console.log(value.docs, things);
  return (
    <article>
      <h2>All things:</h2>
      <ol>
        { things.map(thing => <li>{ thing.name }</li>) }
      </ol>
    </article>
  )
}