
/* import vector from '../../../public/vector2.jpg' */

interface Style {
    [key: string] : string | number
}

const hero = <Style> {
    position:"relative",
    border: "solid black 1px rgb",
   height: "600px",
    minWidth: "100%",
    background: "url('https://plus.unsplash.com/premium_photo-1664378617259-6bd0f244b1fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=800') no-repeat center center /cover",
}
const therapy = <Style> { display:"grid", justifyContent:'center' ,alignItems:'center',padding:"60px 10px",minWidth:"100%",gap:"10px", minHeight:"700px"}
const background = {
    background:'url("") no-repeat center center`',  
    opacity: ".5",
}
const its = <Style> {display:"flex", gap:"20px",alignItems:"center",margin:"40px auto", height: "400px"}

const discover = <Style> {display:"flex", flexDirection: "row-reverse",justifyContent:"center",alignItems:"center",margin:"30px auto", height: "400px", minWidth:"80%"}

const join = <Style> {display:"flex", alignItems:"center",margin:"30px auto", height: "400px", minWidth:"80%"}
const appointments = <Style> {alignItems:'center',padding:"20px", width:"70%",  border:"1px solid rgba(0, 0, 0, .1)", margin: '100px auto 30px auto', borderRadius:'10px'}
export {hero, therapy, background, its, discover, join, appointments}