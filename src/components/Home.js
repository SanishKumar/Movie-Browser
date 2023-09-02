import Hero from "./Hero"

const Home = () => {
    return (
        <>
            <Hero text="Welcome to React 201" />
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                  <p className="lead">
                    This is supposed to be a paragraph.
                  </p>
                </div>
              </div>
            </div>
        </>
    )
}

export default Home
