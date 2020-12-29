import React from "react";
import "./detail.css";

class Detail extends React.Component{

    componentDidMount(){
        const{location, history}=this.props;
        if(location.state===undefined){
            history.push("/");  //홈으로 redirect
        }
    }

    render(){
        const{location}=this.props;
        console.log(location);
        if(location.state){
            return (
                <section>
                    <img className ="detail__background" src={location.state.background} alt="background"/>
                    <div className="detail__container">
                        <img className="detail__poster" src={location.state.poster}/>
                        <h3 className="detail__title">{location.state.title}</h3>
                        <h5 className="detail__year">{location.state.year}</h5>
                        <ul className="detail__genres">
                            {location.state.genres.map((genre, index)=>{
                                return(<li key={index} className="detail__genre">
                                    {genre}
                                </li>);
                            })}
                        </ul>
                    <p className="detail__summary">{location.state.summary}</p>
                    </div>
                </section>
            );
        } else {
            return null;
        }
    }
}

export default Detail;