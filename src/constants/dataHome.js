import feature_icon1 from "../assets/img/icon//feature-icon-1-1.svg"
import feature_icon2 from "../assets/img/icon/feature-icon-1-2.svg"
import feature_icon3 from "../assets/img/icon/feature-icon-1-3.svg"
import course1 from "../assets/img/course/course-1-1.png"
import course2 from "../assets/img/course/course-1-2.png"
import course3 from "../assets/img/course/course-1-3.png"


const course = [
  {
    img: feature_icon1,
    title: "BEST INDUSTRY LEADERS",
    context:
      "Lorem ipsum dolor sit amet nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.",
  },
  {
    img: feature_icon2,
    title: "BEST INDUSTRY LEADERS",
    context:
      "Lorem ipsum dolor sit amet nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.",
  },
  {
    img: feature_icon3,
    title: "BEST INDUSTRY LEADERS",
    context:
      "Lorem ipsum dolor sit amet nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.",
  },
];



const product = [
    {
        img:course1,
        majors: "Technology",
        video: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
        reviews: "(5.0)",
        price: "$500",
        CourseName : "Advance Begineer's Goal & Managing Course",
        Teacher: "By Rose Marry",
        numOfStud: "111 Students",
        hour: "5h 11m", 
        date : "10 Augest 2023"
    },{
        img:course2,
        majors: "Technology",
        video: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
        reviews: "(5.0)",
        price: "$500",
        CourseName : "Advance Begineer's Goal & Managing Course",
        Teacher: "By Rose Marry",
        numOfStud: "111 Students",
        hour: "5h 11m", 
        date : "10 Augest 2023"
    },{
        img: course3,
        majors: "Technology",
        video: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
        reviews: "(5.0)",
        price: "$500",
        CourseName : "Advance Begineer's Goal & Managing Course",
        Teacher: "By Rose Marry",
        numOfStud: "111 Students",
        hour: "5h 11m", 
        date : "10 Augest 2023"
    }
]

const QualifiedTeachers = [
  {
  img: "../img/team/team-1-1.jpg",
  name: "Thomas Walimes",
  subject: "Science Tutor",
},
{
  img: "../img/team/team-1-2.jpg",
  name: "Nohima Homminu",
  subject: "English Tutor",
},
{
  img: "../img/team/team-1-3.jpg",
  name: "Kaylin Moore",
  subject: "Math Tutor",
},
]


const Event = [
  {
    day: "15",
    MonthYear: "Mar, 2023",
    nameEvent: "Certified Institute Meetup",
    hour: "8:00 AM - 5:00 PM",
    form: "Online",
    Speaker: "20 Speaker"
  },
  {
    day: "26",
    MonthYear: "Jan, 2023",
    nameEvent: "Fast Track Course Opening",
    hour: "7:00 PM - 12:00 AM",
    form: "Online",
    Speaker: "10 Speaker"
  },
  {
    day: "30",
    MonthYear: "DEC, 2023",
    nameEvent: "Students Gaining Knowledge",
    hour: "9:00 AM - 4:00 PM",
    form: "Online",
    Speaker: "14 Speaker"
  }
]

export { course , product ,QualifiedTeachers , Event};
