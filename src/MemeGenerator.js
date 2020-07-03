import React, { Component } from 'react'

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }
    
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    generate = (event) => {
        event.preventDefault()
        let randomNum = Math.floor(Math.random()*this.state.allMemeImgs.length)+1
        let allMemes = this.state.allMemeImgs
        console.log(allMemes[randomNum])

        this.setState({
            randomImg: allMemes[randomNum].url
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.generate}>

                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator


/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */