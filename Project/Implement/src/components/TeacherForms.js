import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Personal from "./TeacherPersonalInfo";
import Contact from "./TeacherContactInfo";
import Job from "./TeacherJobExp";
import Skills from "./TeacherSkills";
import Education from "./TeacherEducation";
import License from "./TeacherLicenses";
import TeacherPanel from "./TeacherPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: "30ch",
    },
  },
}));

const TeacherForm = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("Iran");
  const [gender, setGender] = useState("");
  const [birthdy, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");

  const [state, setState] = useState("");

  const [zipCode, setZipCode] = useState("");

  const handleChange = (input) => (e) => {
    //console.log(e.target.value);
    if (input === "country") {
      setCountry(e.target.value);
    }

    if (input === "firstName") {
      setFirstName(e.target.value);
      console.log({ firstName });
    }

    if (input === "lastName") {
      setLastName(e.target.value);
    }

    if (input === "gender") {
      setGender(e.target.value);
    }

    if (input === "birthday") {
      setBirthday(e.target.value);
    }

    if (input === "email") {
      setEmail(e.target.value);
    }

    if (input === "phone") {
      setPhone(e.target.value);
    }

    if (input === "cellphone") {
      console.log(e);
      setCellphone(e);
    }

    // if (input === "city") {
    //   setCity(e.target.value);
    // }

    if (input === "state") {
      setState(e.target.value);
    }

    if (input === "zipCode") {
      setZipCode(e.target.value);
    }
  }; //end of handle change

  return (
    <div className={classes.root}>
      <div>
        <TeacherPanel />
      </div>
      <div id="edit_text">
        <span>Edit Profile</span>
      </div>

      <Personal
        firstName={firstName}
        lastName={lastName}
        gender={gender}
        country={country}
        birthdy={birthdy}
        handleChange={handleChange}
      />

      <Contact
        email={email}
        phone={phone}
        cellphone={cellphone}
        state={state}
        zipCode={zipCode}
        handleChange={handleChange}
      />
      <Job />
      <Skills />
      <Education />
      <License />
      <footer style={{ padding: "60px" }}> </footer>
    </div>
  );
};

export default TeacherForm;
