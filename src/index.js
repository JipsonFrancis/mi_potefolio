import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'



function App()
{
    return (
        <div className="row">
            <Project name={'GradeAssessment'} styling={{backgroundColor: 'rgba(165, 96, 247, 0.43)', color: 'rgb(85, 27, 177)'}} tech={['Analytics', 'php']}/>
            <Project name={'Potefolio'} styling={{backgroundColor: 'rgba(165, 96, 247, 0.43)', color: 'rgb(85, 27, 177)'}} tech={['Analytics', 'Web3', 'React']}/>
        </div>
    )
}

function Project(props)
{
    return (
        <article className="article-wrapper">
            <div className="rounded-lg container-project"></div>
            <div className="project-info">
                <div className="flex-pr">
                    <div className="project-title text-nowrap">{props.name}</div>
                    <div className="project-hover">
                      <svg style={{color: "black"}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                </div>
                <div className="types">

                    {
                        props.tech.map((x,i) => {
                            if (i % 2 === 0)
                            {
                                return <Badge name={x} stying={{}}/>
                            }
                            else
                            {
                                return <Badge name={x} stying={props.styling}/>
                            }
                        })
                    }
                </div>
            </div>
        </article>
    )
}

function Badge (props)
{
    return <span className="project-type" style={props.stying}>• {props.name}</span>
}




const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)