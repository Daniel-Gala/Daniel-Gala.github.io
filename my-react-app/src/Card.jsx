import profilePic from './assets/IMG_6110.jpeg'
function Card(){

    return(
        <div className="card">
            <img className ="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title"> Daniel Galaviz </h2>
            <p className="card-text"> 
                Hello, this is my LinkTree! 
                I've been attening Hartnell
                majoring in Computer Science.
                In my freetime, I like to play music,
                 videogames, and to bake!    </p>


        </div>
    );
}

export default Card