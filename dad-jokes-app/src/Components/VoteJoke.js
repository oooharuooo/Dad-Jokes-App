import React from 'react';
import "./VoteJoke.css"

class VoteJoke extends React.Component {
    state = {
        voteNumber:0,
    }
    voteUpHandler = () => {
        this.setState({voteNumber: this.state.voteNumber + 1})
    }

    voteDownHandler = () => {
        this.setState({voteNumber: this.state.voteNumber - 1})
    }

    
    render() {
        const {voteNumber} = this.state;
        const emoji = () => {
            if (voteNumber >= 0 && voteNumber < 5) return "😶"
            else if (voteNumber >= 5 && voteNumber < 10) return "😄"
            else if (voteNumber >= 10) return "🤣"
            else if (voteNumber < 0 && voteNumber > -5) return "😑"
            else return "😠"
        }

        return (
            <div className= {`vote-joke-container vote${voteNumber}`}>
                <button onClick={this.voteUpHandler}>↑</button>
                <p>{voteNumber}</p>
                <button onClick={this.voteDownHandler}>↓</button>
                <p>{emoji()}</p>
            </div>
        )
    }
}

export default VoteJoke


// 😂😶😄😓😠
