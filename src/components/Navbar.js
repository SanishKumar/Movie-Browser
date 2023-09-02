import { useHistory, Link } from "react-router-dom"

const Navbar = ({ searchText,setSearchText }) => {
    const history = useHistory()

    const updateSearchText = (e) => {
        history.push('/search')
        setSearchText(e.target.value)
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Movie Browser
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            > 
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">
                            About Us
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link disabled"
                            to="goToSomewhere"
                            tabIndex="-1"
                            aria-disabled="true"
                        >
                            Disabled
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value = {searchText}
                        onChange={updateSearchText}
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar
