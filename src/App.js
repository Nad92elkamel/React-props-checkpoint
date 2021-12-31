import Profile from "./profile/profile_component/profile";
import myImage from "./cv.png";
function App() {
    //Start Styling variables
    const cardContainer = {
      backgroundColor: "#231e39",
      borderRadius: "5px",
      boxShadow: "0px 10px 20px -10px rgba(0, 0, 0, 0.75)",
      color: "#b3b8cd",
      paddingTop: "30px",
      position: "relative",
      width: "350px",
      maxWidth: "100%",
      textAlign: "center",
    };
  
    const round = {
      border: "1px solid #03bfcb",
      borderRadius: "50%",
      padding: "7px",
      height:"120px",
      width:"120px"
    };
  
    const App = {
      backgroundColor: "#28223f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",  
      minHeight: "100vh",
      margin: "0",
    };
  
    // End styling variables
  
    // start function used 
       let handleName=()=>{
         alert('Nadhem Elkamel');
       };
    //End function used
    return (
      <div style={App}>
        <div style={cardContainer}>
          <Profile name="Nadhem Elkamel" data={handleName} pro="Fullstack developer"  bio="Beginner Full Stack developer with small experience in HTML, CSS, Javascript and React.">
            <img
              src={myImage}
              alt="profile picture"
              style={round}
            /></Profile>
        </div>
      </div>
    );
  }

export default App;
