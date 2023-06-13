import { Container, Grid } from '@mui/material'
import { hero, its, discover, join, appointments } from './styles'
import { Link } from 'react-router-dom'

const LandingPage = ()=> {
  

  return (
    <>
      <Container sx={hero}> 
      <h1 className='way'>WAY </h1>
      <h1 className='life'>TO LIFE...</h1>
      <Container sx={{position:"absolute",left:0, minWidth:"100%",display:'flex', gap: "30px", bottom:"-40px",  justifyContent:"center"}}>
        <div className='appointment'>Appiontemnt</div>
        <div className='appointment'>Doctors</div>
        <div className='appointment'>Services</div>
      </Container>
      </Container>
      <Grid container sx={appointments}>
     <Grid xs={5} item>
      <img className='therapy-image' src="https://images.unsplash.com/photo-1592947945242-69312358628b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"></img>
      </Grid>
  <Grid  item xs={5} >
  <div className='therapy-card'>
        <h3 className='title'>Why Therapy is important ?</h3>
        <p>Therapy is an essential part of any successful recovery process, helping to reduce stress, improve mental health, and increase overall wellbeing. Learn why therapy is so important and how it can help you reach your goals.</p>
         </div>
        <div className='therapy-card'>
          <h3 className='title'>Is therapy right for you?</h3>
          <p>Find out the pros and cons of this type of therapy to help you decide if it's the right fit for you</p>
          </div>
        <div className='therapy-card'>
          <h3  className='title'>Is therapy right for you?</h3>
          <p>Find out the pros and cons of this type of therapy to help you decide if it's the right fit for you</p>
          </div>
    </Grid>
      </Grid>
      <Container sx={its}>
    <div>
    
    <img className='its-img' src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/illustrations/professional.svg?v=0177f73d2461"></img>
    <h2 className='its'>it's Professional</h2>
      <p >All therapists are licensed, accredited professionals. BetterHelp allows you to connect with them in a safe and convenient online environment.</p>
    </div>
    <div>
    <img className='its-img' src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/illustrations/affordable.svg?v=0177f73d2461"></img>

    <h2 className='its'>it's Affordable.</h2>
      <p >All therapists are licensed, accredited professionals. BetterHelp allows you to connect with them in a safe and convenient online environment.</p>
    </div>
    <div>

    <img className='its-img' src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/illustrations/convenient.svg?v=0177f73d2461"></img>
    <h2 className='its'>it's Convenient</h2>
      <p>All therapists are licensed, accredited professionals. BetterHelp allows you to connect with them in a safe and convenient online environment.</p>
    </div>
    <div>
    
    <img className='its-img' src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/illustrations/effective.svg?v=0177f73d2461"></img>
    <h2 className='its'>it's Effective.</h2>
      <p >All therapists are licensed, accredited professionals. BetterHelp allows you to connect with them in a safe and convenient online environment.</p>
    </div>
      
      </Container>

<Container sx={discover}>
  <img className='join-us' src='https://images.unsplash.com/photo-1520857014576-2c4f4c972b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80) no-repeat center center/cover'></img>
    <div>
    <h1 className='discover'>Discover your self</h1>
      <p className='discover-p'>Join us to get provided with the tools and support you need to manage your mental health and lead a healthier, more fulfilling life.</p>
      <Link className='join' to="/">Sign UP</Link>
    </div>
      </Container >
      <Container sx={join}>
        <img className='join-us' src="https://plus.unsplash.com/premium_photo-1664378802612-64eb63ec982e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"></img>
      <div>
      <h1 className='discover'>Be one of the team</h1>
      <p className='discover-p'>Join us to get provided with the tools and support you need to manage your mental health and lead a healthier, more fulfilling life.</p>
      <Link className='join' to="/">Join us</Link>
      </div>
      </Container>

    </>
  
  )
}

export default LandingPage