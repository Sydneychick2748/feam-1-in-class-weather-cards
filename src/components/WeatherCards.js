

function WeatherCard(props) {

    return (
     <div className='mainContainer'>
     
        <div className="imageContainer">
        <img src={props.image} alt="Weather" />
        <p>{props.name}</p>
        <div className="spanDiv">
        <span className="headingP">{props.heading}</span>
        </div>

        </div>
        
        
       
      
      </div>
    );
  }
  
  export default WeatherCard;
  