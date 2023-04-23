import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import HeaderImage from "../components/HeaderImage";
import ContactPic from "../assets/ContactPic.jpg";
import "../components/styles.css";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import ComponentTitle from "../components/ComponentTitle";

const boxWords = {
  word1: "CONTACT GUNN BROS!",
  word2: "PROUD CUSTOMER SERVICE!",
  word3: "Guareented quick and exceptional service!",
  word4: "Contact Gunn Brothers",
  word5: "What's Guaranteed",
};

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bbool0l",
        "template_utscod7",
        form.current,
        "4_NE7-Wk3G8d8tgmG"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div style={{ paddingBottom: "150px" }}>
      <HeaderImage boxWords={boxWords} src={ContactPic} />
      <ComponentTitle words={boxWords.word4} />
      <Card
        style={{
          maxWidth: "850px",
          marginBottom: "50px",
          marginRight: "auto",
          marginLeft: "auto",
          padding: "20px 5px",
          border: "3px solid #d4c37c",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="paragraph"
          >
            Once you press submit, we will get your information and contact you
            within 24 hours!
          </Typography>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  name="user_firstname"
                  label="First Name"
                  placeholder="Enter First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  name="user_lastname"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  name="user_email"
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  name="user_phone"
                  label="Number"
                  placeholder="Enter Phone Number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  placeholder="Enter information about your issue here"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  value="Send"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
