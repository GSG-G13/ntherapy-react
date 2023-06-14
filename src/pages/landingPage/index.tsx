import { Link } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import {
  hero,
  therapyP,
  its,
  discover,
  join,
  appointments,
  therapyImg,
  logo,
  cardHeader,
  signJoinHeader,
  signJoinP,
  logoH,
  logoF,
} from "./styles";

const LandingPage = () => {
  return (
    <>
      <Container sx={hero}>
        <Container sx={logo}>
          <Typography sx={logoH} variant="h2" className="way">
            YOUR WAY TO{" "}
          </Typography>
          <Typography sx={logoF} variant="h2" className="life">
            LIFE
          </Typography>
        </Container>
      </Container>
      <Grid xs={10} container sx={appointments}>
        <Grid xs={3} item>
          <div style={therapyImg}></div>
        </Grid>
        <Grid item xs={4}>
          <div className="therapy-card">
            <Typography sx={cardHeader} variant="h6">
              Why Therapy is important ?
            </Typography>
            <Typography>
              Therapy is an essential part of any successful recovery process,
              helping to reduce stress, improve mental health, and increase
              overall wellbeing. Learn why therapy is so important and how it
              can help you reach your goals.
            </Typography>
          </div>
          <div className="therapy-card">
            <Typography sx={cardHeader} variant="h6">
              Is therapy right for you?
            </Typography>
            <Typography>
              Find out the pros and cons of this type of therapy to help you
              decide if it's the right fit for you
            </Typography>
          </div>
          <div className="therapy-card">
            <Typography sx={cardHeader} variant="h6">
              What Are the Benefits of Therapy?
            </Typography>
            <Typography>
              Therapy can be a powerful tool for improving mental health and
              wellbeing. Discover the many benefits of therapy and how it can
              help you lead a healthier, happier life.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="therapy-card">
            <Typography sx={cardHeader} variant="h6">
              Why Therapy is important ?
            </Typography>
            <Typography>
              Therapy is an essential part of any successful recovery process,
              helping to reduce stress, improve mental health, and increase
              overall wellbeing. Learn why therapy is so important and how it
              can help you reach your goals.
            </Typography>
          </div>
          <div className="therapy-card">
            <Typography sx={cardHeader} variant="h6">
              {" "}
              Therapy impacts on Mental Health
            </Typography>
            <Typography>
              Therapy can have a powerful impact on mental health, providing
              individuals with the tools and support they need to manage their
              mental health and lead a healthier, more fulfilling life.
            </Typography>
          </div>
          <div className="therapy-card">
            <Typography sx={cardHeader} variant="h6">
              When Should Therapy Be Used?
            </Typography>
            <Typography>
              Therapy can be a powerful tool for improving mental health, but
              it's important to understand when it should be used.{" "}
            </Typography>
          </div>
        </Grid>
      </Grid>
      <Container sx={its}>
        <div>
          <img
            className="its-img"
            src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/illustrations/professional.svg?v=0177f73d2461"
          ></img>
          <Typography sx={{ fontWeight: "600" }}>it's Professional</Typography>
          <Typography sx={therapyP}>
            All therapists are licensed, accredited professionals. BetterHelp
            allows you to connect with them in a safe and convenient online
            environment.
          </Typography>
        </div>
        <div>
          <img
            className="its-img"
            src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/illustrations/affordable.svg?v=0177f73d2461"
          ></img>

          <Typography sx={{ fontWeight: "600" }}>it's Affordable.</Typography>
          <Typography sx={therapyP}>
            Pay a low flat fee for unlimited therapy with your therapist.
            Therapy doesn't have to be expensive
          </Typography>
        </div>
        <div>
          <img
            className="its-img"
            src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/illustrations/convenient.svg?v=0177f73d2461"
          ></img>
          <Typography sx={{ fontWeight: "600" }}>it's Convenient</Typography>
          <Typography sx={therapyP}>
            ADo it at your own time and at your own pace. Communicate with your
            therapist as often as you want and whenever you feel it's needed.
          </Typography>
        </div>
        <div>
          <img
            className="its-img"
            src="https://dy7glz37jgl0b.cloudfront.net/betterhelp_two/illustrations/effective.svg?v=0177f73d2461"
          ></img>
          <Typography sx={{ fontWeight: "600" }}>it's Effective.</Typography>
          <Typography sx={therapyP}>
            Thousands of people have benefitted from therapy (just check out
            their reviews!) With BetterHelp, you can switch therapists at any
            point if you don't feel you are getting enough benefit.
          </Typography>
        </div>
      </Container>
      <Container sx={discover}>
        <img
          className="sign-img"
          src="https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80) no-repeat center center/cover"
        ></img>
        <div>
          <Typography sx={signJoinHeader}>Discover your self</Typography>
          <Typography sx={signJoinP}>
            Join us to get provided with the tools and support you need to
            manage your mental health and lead a healthier, more fulfilling
            life.
          </Typography>
          <Link className="join" to="/singup">
            Sign UP
          </Link>
        </div>
      </Container>
      <Container sx={join}>
        <img
          className="join-img"
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        ></img>
        <div>
          <Typography sx={signJoinHeader}>Be one of the team</Typography>
          <Typography sx={signJoinP}>
            Join us to get provided with the tools and support you need to
            manage your mental health and lead a healthier, more fulfilling
            life.
          </Typography>
          <Link className="join" to="/">
            Join us
          </Link>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
