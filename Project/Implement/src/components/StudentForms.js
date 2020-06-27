import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Personal from "./StudentPersonalInfos";
import Contact from "./StudentContactInfos";
import Educational from "./StudentEducationalInfos";
import StudentPanel from "./StudentPanel";

// import Userdetails from "./Userdetails";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(3),
      width: "30ch"
    }
  }
}));

const StudentForm = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("Iran");
  const [gender, setGender] = useState("");
  const [birthdy, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [major, setMajor] = useState("");
  const [grade, setGrade] = useState("");
  const [gpa, setGpa] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [school, setSchool] = useState("");

  const handleChange = input => e => {
    console.log(e.target.value);
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
      setCellphone(e.target.value);
    }

    if (input === "city") {
      setCity(e.target.value);
    }

    if (input === "school") {
      setSchool(e.target.value);
    }
    if (input === "state") {
      setState(e.target.value);
    }
    if (input === "major") {
      setMajor(e.target.value);
    }
    if (input === "grade") {
      setGrade(e.target.value);
    }
    if (input === "gpa") {
      setGpa(e.target.value);
    }
    if (input === "zipCode") {
      setZipCode(e.target.value);
    }

    if (input === "school") {
      setZipCode(e.target.value);
    }
  }; //end of handle change

  return (
    <div className={classes.root}>
      <div>
        <StudentPanel />
      </div>
      <div id="edit_text">
        <span>Edit Profile</span>
      </div>
      <div>
        <Personal
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          country={country}
          birthdy={birthdy}
          handleChange={handleChange}
        />
      </div>

      <Contact
        email={email}
        phone={phone}
        cellphone={cellphone}
        state={state}
        zipCode={zipCode}
        handleChange={handleChange}
      />

      <Educational
        grade={grade}
        major={major}
        school={school}
        gpa={gpa}
        handleChange={handleChange}
      />
    </div>
  );
};

export default StudentForm;
