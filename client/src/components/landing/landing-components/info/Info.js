import React, { useEffect, useState } from "react";
import "./info.css";
import Student from "../../landing-assets/student.jpg";
import Teaching from "../../landing-assets/teaching.jpg";
import { addSubjects, getSubjects } from "../../api/api";
import { useSelector } from "react-redux";

const Info = () => {
  // const subjects = ["DSA", "DBMS", "DAA", "OS"];
  const [subjects, setSubjects] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [studySub, setStudySub] = useState([]);
  const [teachSub, setTeachSub] = useState([]);
  useEffect(() => {
    const fetchSubjects = async () => {
      const response = await getSubjects(localStorage.getItem("user_info"));
      setSubjects(response?.data?.subjects);
      console.log(response);
    };
    fetchSubjects();
  }, []);
  const handleStudyCardClick = (subject) => {
    if (studySub.includes(subject)) {
      // If subject is already in the array, remove it
      setStudySub(studySub.filter((sub) => sub !== subject));
    } else {
      // If subject is not in the array, add it
      setStudySub([...studySub, subject]);
    }
  };

  const handleTeachCardClick = (subject) => {
    if (teachSub.includes(subject)) {
      // If subject is already in the array, remove it
      setTeachSub(teachSub.filter((sub) => sub !== subject));
    } else {
      // If subject is not in the array, add it
      setTeachSub([...teachSub, subject]);
    }
  };

  const handleNext = async () => {
    try {
      const token = localStorage.getItem("user_info");
      await addSubjects({ studySub: studySub, teachSub: teachSub }, token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mainPage">
      <div className="mainCard" style={{ background: "#96dea1" }}>
        <img src={Student} className="image" alt="student-img" />
        <div className="choice">
          <div className="heading">Which subjects do you want to study?</div>
          <div className="cards">
            {subjects?.map((subject, index) => (
              <div
                className={`card${
                  studySub.includes(subject) ? "Selected" : ""
                }`}
                key={index}
                onClick={() => handleStudyCardClick(subject)}
              >
                {subject.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mainCard" style={{ background: "#e5a067" }}>
        <img src={Teaching} className="image" alt="teaching-img" />
        <div className="choice">
          <div className="heading">Which subjects do you want to teach?</div>
          <div className="cards">
            {subjects?.map((subject, index) => (
              <div
                className={`card${
                  teachSub.includes(subject) ? "Selected" : ""
                }`}
                key={index}
                onClick={() => handleTeachCardClick(subject)}
              >
                {subject.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="buttonContainer" onClick={() => handleNext()}>
        <div className="nextButton">Next</div>
      </div>
    </div>
  );
};

export default Info;
