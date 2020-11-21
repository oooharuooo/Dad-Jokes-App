import React from 'react';
import axios from 'axios';
import Joke from './Joke';
import VoteJoke from './VoteJoke';
import "./JokeList.css"

class JokeList extends React.Component {
    static defaultProps = {
        jokesToMake: 10,
    }
    state = {
        jokes: [],
        loading: true,
    }

    async componentDidMount() {
        let jokes = [];
        while (jokes.length < this.props.jokesToMake) {
            const {data} = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: 'application/json'}});
            jokes.push(data);
        }
        
       this.setState({jokes: jokes,loading: false});
       
    }

    resetHandler = async () => {
        let jokes = [];
        while (jokes.length < this.props.jokesToMake) {
            const {data} = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: 'application/json'}});
            jokes.push(data);
        }
        this.setState({
            jokes: jokes,
        })
    }
    render() {
        const joke = this.state.jokes.map( ({id,joke}) => {
            return <div className="joke-container" key={id}>
                    <VoteJoke />
                    <Joke joke={joke}  />
                </div>
        })

        return (
            !this.state.loading ?
            <div className="main-container">
                <div>
                    <h1>Dad Jokes</h1>
                    <p>🤣</p>
                    <button onClick={this.resetHandler}>NewJokes</button>
                </div>
                <div className="joke-list-container">
                {joke}
                </div>
            </div>
            : <div className="load-icon">gffg</div>
        )
    }
}

export default JokeList
