import "./App.css"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import AboutView from "./components/AboutView"
import SearchView from "./components/SearchView"
import MovieView from "./components/MovieView"
import { Switch, Route } from "react-router-dom"

// tmdb key: 754b8896e24c20d754422930672de417
// tmdb api: 'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=754b8896e24c20d754422930672de417'

function App() {
    const [searchResults, setSearchResults] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        if (searchText) {
            fetch(
                `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=754b8896e24c20d754422930672de417`
            )
                .then((response) => response.json())
                .then((data) => {
                    setSearchResults(data.results)
                })
        }
    }, [searchText])

    return (
        <div>
            <Navbar searchText={searchText} setSearchText={setSearchText} />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/about" component={AboutView} />
                <Route path="/search">
                    <SearchView
                        keyword={searchText}
                        searchResults={searchResults}
                    />
                </Route>
                <Route path="/movies/:id" component={MovieView} />
            </Switch>
        </div>
    )
}

export default App
