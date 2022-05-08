//Import and Export - 2 types
//1. Namd - preferred
//2. Default 

//named export
function ColorBox({color}){
    const styles = {
      backgroundColor: color,
      height: "35px",
      width: "300px",
      marginTop: '10px',
    }
    return(
      <div style={styles}></div>
    );
}

const double = (n)=>n*2;

export {ColorBox, double};