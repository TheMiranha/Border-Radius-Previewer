import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        }
    }

    getCss = () => {
        var {borderTopLeftRadius,borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius } = this.state;
        return 'border-radius: '+borderTopLeftRadius+'px '+borderTopRightRadius+'px '+borderBottomRightRadius+'px '+borderBottomLeftRadius+'px';
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="title">Border-radius Previewer</div>
                    <div className="box" style={this.state}></div>
                    <div className="variáveis">
                        T: Topo; B: Baixo; D: Direta; E: Esquerda
                    </div>
                    <div className="inputs">
                        <div>TD: <input className="slot" placeholder="TD" type="number"
                        value={this.state.borderTopRightRadius} onChange={a => { this.setState({borderTopRightRadius: parseInt(a.target.value)});console.log(this.state.borderTopRightRadius)}}/></div>
                        <div>
                        TE: <input className="slot" placeholder="TE" type="number"
                        value={this.state.borderTopLeftRadius} onChange={a => this.setState({borderTopLeftRadius: parseInt(a.target.value)})}/>
                        </div>
                       <div>
                       BD: <input className="slot" placeholder="BD" type="number"
                        value={this.state.borderBottomRightRadius} onChange={a => this.setState({borderBottomRightRadius: parseInt(a.target.value)})}/>
                       </div>
                        <div>BE: <input className="slotp" placeholder="BE" type="number"
                        value={this.state.borderBottomLeftRadius} onChange={a => this.setState({borderBottomLeftRadius: parseInt(a.target.value)})}/>
                        </div>
                    </div>
                    <div className="result">
                        <input value={this.getCss()}/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));