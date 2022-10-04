import Books from '../Components/Books'
import Navigation from '../Components/Navigation'

const AllBooksPage = () => {
  return (
    <div id="allBooksPage">

      <aside>
        <Navigation />
      </aside>
      <section>
        <Books />
      </section>

    </div>
  )
}

export default AllBooksPage
