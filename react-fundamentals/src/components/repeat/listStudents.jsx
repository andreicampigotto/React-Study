import React from "react";
import "../../data/students";
import students from "../../data/students";

export default (props) => {
  //   const li1 = (
  //     <li>
  //       {students[0].id} - {students[0].name} - {students[0].value}
  //     </li>
  //   );

  const studentsList = students.map((student) => {
    return (
      <li key={student.id}>
        {student.id} : {student.name} - {student.value}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>{studentsList}</ul>
    </div>
  );
};
