import './App.css'

import { CardList } from './components/card-list/card-list.component'
import { Component } from 'react'
import { SearchBox } from './components/search-box/search-box.component'

/*
Tenets of being a great React developer

1. Decide on Components
2. Decide on the State and where it lives
3. What changes when state changes
*/

class App extends Component {
    constructor() {
        super()

        this.state = {
            monsters: [],
            searchField: '',
        }

        //this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }))
    }

    // set 'this.handleChange = this.handleChange.bind(this) in the constructor
    // ES6, arrow function automatically binds 'this' to App component underneath the hood
    handleChange = (e) => {
        this.setState({ searchField: e.target.value })
    }

    render() {
        const { monsters, searchField } = this.state
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="Search monsters"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default App
