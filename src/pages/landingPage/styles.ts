
interface Style {
    [key: string] : string | number
}

const hero = <Style> {
    position:"relative",
    height: "600px",
    minWidth: "100%",
    background: "url('https://plus.unsplash.com/premium_photo-1664378617259-6bd0f244b1fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=800') no-repeat center 0px /cover",
    borderBottom: "10px solid rgb(255, 208, 77)",
}
const therapy = <Style> { 
    display:"grid",
    justifyContent:'center',
    alignItems:'center',
    padding:"60px 10px",
    maxWidth:"100%",
    gap:"10px", 
    minHeight:"700px"
}
const appointments = <Style> {
    gap: "10px",
    width:"70%",
    alignItems:"center",
    margin: '100px auto ',
    // boxShadow: "1px 0 10px 0 rgba(0,0, 0, .1)"

}
const logo = <Style> {textAlign:"center",width:"500px",position:"absolute",top:"270px", right: "50px"}
const logoH = <Style> {fontWeight:"bolder",fontSize:"80px",width:"450px", background:"rgb(250, 183, 38)"}
const logoF = <Style> {fontWeight:"bold",fontSize:"80px",width:"450px",border:"1px solid black",
color:"white",
background:"black"}
const its = <Style> {
    display:"flex",
    gap:"20px",
    alignItems:"center",
    margin:"40px auto", 
    height: "400px",
    width:"90%",
    borderBottom: "1px solid rgb(255, 208, 77)"
}
const therapyP = <Style> {fontSize:"16px",  lineHeight:"20px",textAlign:"left", marginTop:"7x"};

const discover = <Style> {
    position: "relative",
    display:"flex", 
    flexDirection: "row-reverse",justifyContent:"center",
    alignItems:"center",
    margin:"100px auto",
    height: "400px", 
    maxWidth:"100%",
    border: "1px solid rgba(255, 208, 77, .3)"
}

const join = <Style> {
    margin:"200px auto",
    display:"flex",
    alignItems:"center",
    height: "400px",
    maxnWidth:"80%",
    border: "1px solid #003ab828"
    
}
const signJoinHeader = <Style> {
    color:"#003ab8",
fontSize:"40px",
textTransform: "uppercase",
paddingLeft: "10px",
borderLeft: "10px solid rgb(255, 208, 77)"}
const signJoinP = <Style> {fontSize:"23px", textTransform:"uppercase", lineHeight:"30px", marginTop:"10px"}
const cardHeader = {color:"#003ab8",textTransform:"uppercase"}
const therapyImg = <Style>{
    height: "475px",
    width:"330px",
    background: "url(https://images.unsplash.com/photo-1592947945242-69312358628b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80) no-repeat center center /cover",
    borderBottom: "10px solid rgb(255, 208, 77)"
}

export {hero, 
    therapy, 
    therapyP,
    therapyImg, 
    its, 
    discover, 
    join, 
    appointments, 
    logo, cardHeader, 
    signJoinHeader, 
    signJoinP,
    logoH, 
     logoF}