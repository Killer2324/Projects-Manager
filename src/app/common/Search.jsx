import Common from './Common.module.css'

export default function Search() {
  return (
    <form>
      <input type="search" className={Common.search} placeholder="search" />
    </form>
  )
}
