import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const grades = [
  {
    value: "1.st Garde"
  },
  {
    value: "2.nd Garde"
  },
  {
    value: "3.rd Garde"
  },
  {
    value: "4.th Garde"
  },
  {
    value: "5.th Garde"
  },
  {
    value: "6.th Garde"
  },
  {
    value: "7.th Garde"
  },
  {
    value: "8.th Garde"
  },
  {
    value: "9.th Garde"
  },
  {
    value: "10.th Garde"
  },
  {
    value: "11.th Garde"
  },
  {
    value: "12.th Garde"
  }
];

const majors = [
  {
    value: "Mathematics"
  },
  {
    value: "Experimental Science"
  },
  {
    value: "literature"
  },
  {
    value: "None (I have not choosen a major yet)"
  }
];
const Educational = props => {
  return (
    <div className="personal-forms">
      <form>
        <div className="forms-names">
          <span>Educational Information</span>
        </div>
        <div>
          <TextField
            required
            select
            id="stu-grade"
            variant="outlined"
            label="Grade"
            onChange={props.handleChange("grade")}
            helperText="Required"
            value={props.grade}
          >
            {grades.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            select
            id="stu-major"
            variant="outlined"
            label="Major"
            onChange={props.handleChange("major")}
            helperText="Required"
            value={props.major}
          >
            {majors.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            id="stu-school"
            variant="outlined"
            label="School"
            onChange={props.handleChange("school")}
            helperText="Required"
            value={props.school}
          />

          <TextField
            required
            id="stu-gpa"
            variant="outlined"
            label="Current GPA"
            onChange={props.handleChange("gpa")}
            helperText="Required"
            value={props.gpa}
          />

          <Button className="forms-buttons" variant="contained">
            SUBMIT EDUCATIONAL INFRMAION
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Educational;
