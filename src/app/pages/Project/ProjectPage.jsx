import { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import { useParams } from 'react-router-dom'
import { onSnapshot, collection } from 'firebase/firestore'
export default function ProjectPage() {
  const { id } = useParams()
  const [project, setProject] = useState({})
  useEffect(() => {
    onSnapshot(collection(db, 'projects'), (snapshot) => {
      setProject(
        snapshot.docs
          .filter((doc) => doc.id === id)
          .map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
      )
    })
  }, [])

  return <main></main>
}
