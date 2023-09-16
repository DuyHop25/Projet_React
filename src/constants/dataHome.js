import feature_icon1 from "../assets/img/icon//feature-icon-1-1.svg"
import feature_icon2 from "../assets/img/icon/feature-icon-1-2.svg"
import feature_icon3 from "../assets/img/icon/feature-icon-1-3.svg"



const course = [
  {
    img: feature_icon1,
    title: "IT SOFTWARE & ENGINEERING",
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
    title: "LEARN COURSES ONLINE",
    context:
      "Lorem ipsum dolor sit amet nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.",
  },
];



const product = [
    {
        img:"../../assets/img/course/course-1-1.png",
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
        img:"../../assets/img/course/course-1-2.png",
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
        img: "../../assets/img/course/course-1-3.png",
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
  img: "https://cms.kmin.edu.vn/uploads/GV_Ho_Minh_Quan_1ab1645853.png",
  name: "Hồ Minh Quân",
  subject: "SB - Lập trình Scratch cơ bản ",
},
{
  img: "https://cms.kmin.edu.vn/uploads/GV_Nguyen_Thanh_An_70c5bfdc11.png",
  name: "Nguyễn Thành An",
  subject: "Nhập môn Khoa học Máy tính",
},
{
  img: "https://cms.kmin.edu.vn/uploads/CV_Do_Thanh_Nhon_a90e63f999.png",
  name: "Đỗ Thành Nhơn",
  subject: "FR - Lập trình Front-end với ReactJS",
},
{
  img: "https://cms.kmin.edu.vn/uploads/CV_Ngo_Ngoc_Dang_Khoa_acb57325ff.png",
  name: "Ngô Ngọc Đăng Khoa",
  subject: "FR - Lập trình Front-end với ReactJS",
},
]


const Event = [
  {
    day: "15",
    MonthYear: "Mar, 2023",
    nameEvent: "Thuật toán và hành trình chinh phục",
    hour: "8:00 AM - 5:00 PM",
    form: "Online",
    Speaker: "20 Speaker",
    img: "https://cms.kmin.edu.vn/uploads/4_2_94d6f69aa3.png",
    description:"Cùng tham gia “Chuyện trò kể” tại nhà Kmin để lắng nghe những chia sẻ về trải nghiệm và kinh nghiệm học thuật toán"
  },
  {
    day: "26",
    MonthYear: "Jan, 2023",
    nameEvent: "Kỹ năng làm việc trong nhóm Scrum",
    hour: "7:00 PM - 12:00 AM",
    form: "Online",
    Speaker: "10 Speaker",
    img:"https://cms.kmin.edu.vn/uploads/event_scrum_min_min_d4a3d8ac30.png",
    description:"Làm việc nhóm hay còn gọi là Teamwork là một trong những kỹ năng không thể thiếu trong học tập, làm việc hiện nay"
  },
  {
    day: "30",
    MonthYear: "DEC, 2023",
    nameEvent: "Workshop - Hello, Front-end!",
    hour: "9:00 AM - 4:00 PM",
    form: "Online",
    Speaker: "14 Speaker",
    img:"https://cms.kmin.edu.vn/uploads/Hello_Front_end_c2a2140636.jpeg",
    description:"Hiểu về nghề Front-end để thêm yêu, thêm động lực học tập. Host chính trong chương trình là 1 Senior Front-end Engineer"
  }
];






// const courses = [
//   {
//     image: '../assets/img/course/course-1-1.png',
//     category: 'Technology',
//     categoryLink: 'course.html',
//     videoLink: 'https://www.youtube.com/watch?v=_sI_Ps7JSEk',
//     starRating: 5,
//     rating: '5.0',
//     price: '$778',
//     name: "Advance Begineer's Goal & Managing Course",
//     teacher: 'Ana Watson',
//     teacherLink: 'team-details.html',
//     students: '755 Students',
//     duration: '2h 11m',
//     date: '11 March 2023',
//   },
//   {
//     image: '../assets/img/course/course-1-1.png',
//     category: 'Technology',
//     categoryLink: 'course.html',
//     videoLink: 'https://www.youtube.com/watch?v=_sI_Ps7JSEk',
//     starRating: 5,
//     rating: '5.0',
//     price: '$778',
//     name: "Advance Begineer's Goal & Managing Course",
//     teacher: 'Ana Watson',
//     teacherLink: 'team-details.html',
//     students: '755 Students',
//     duration: '2h 11m',
//     date: '11 March 2023',
//   },
//   {
//     image: '../assets/img/course/course-1-1.png',
//     category: 'Technology',
//     categoryLink: 'course.html',
//     videoLink: 'https://www.youtube.com/watch?v=_sI_Ps7JSEk',
//     starRating: 5,
//     rating: '5.0',
//     price: '$778',
//     name: "Advance Begineer's Goal & Managing Course",
//     teacher: 'Ana Watson',
//     teacherLink: 'team-details.html',
//     students: '755 Students',
//     duration: '2h 11m',
//     date: '11 March 2023',
//   },
//   {
//     image: '../assets/img/course/course-1-1.png',
//     category: 'Technology',
//     categoryLink: 'course.html',
//     videoLink: 'https://www.youtube.com/watch?v=_sI_Ps7JSEk',
//     starRating: 5,
//     rating: '5.0',
//     price: '$778',
//     name: "Advance Begineer's Goal & Managing Course",
//     teacher: 'Ana Watson',
//     teacherLink: 'team-details.html',
//     students: '755 Students',
//     duration: '2h 11m',
//     date: '11 March 2023',
//   },
//   {
//     image: '../assets/img/course/course-1-1.png',
//     category: 'Technology',
//     categoryLink: 'course.html',
//     videoLink: 'https://www.youtube.com/watch?v=_sI_Ps7JSEk',
//     starRating: 5,
//     rating: '5.0',
//     price: '$778',
//     name: "Advance Begineer's Goal & Managing Course",
//     teacher: 'Ana Watson',
//     teacherLink: 'team-details.html',
//     students: '755 Students',
//     duration: '2h 11m',
//     date: '11 March 2023',
//   },
//   {
//     image: '../assets/img/course/course-1-1.png',
//     category: 'Technology',
//     categoryLink: 'course.html',
//     videoLink: 'https://www.youtube.com/watch?v=_sI_Ps7JSEk',
//     starRating: 5,
//     rating: '5.0',
//     price: '$778',
//     name: "Advance Begineer's Goal & Managing Course",
//     teacher: 'Ana Watson',
//     teacherLink: 'team-details.html',
//     students: '755 Students',
//     duration: '2h 11m',
//     date: '11 March 2023',
//   },
//   {
//     image: '../assets/img/course/course-1-1.png',
//     category: 'Technology',
//     categoryLink: 'course.html',
//     videoLink: 'https://www.youtube.com/watch?v=_sI_Ps7JSEk',
//     starRating: 5,
//     rating: '5.0',
//     price: '$778',
//     name: "Advance Begineer's Goal & Managing Course",
//     teacher: 'Ana Watson',
//     teacherLink: 'team-details.html',
//     students: '755 Students',
//     duration: '2h 11m',
//     date: '11 March 2023',
//   },{
//     image: '../assets/img/course/course-1-1.png',
//     category: 'Technology',
//     categoryLink: 'course.html',
//     videoLink: 'https://www.youtube.com/watch?v=_sI_Ps7JSEk',
//     starRating: 5,
//     rating: '5.0',
//     price: '$778',
//     name: "Advance Begineer's Goal & Managing Course",
//     teacher: 'Ana Watson',
//     teacherLink: 'team-details.html',
//     students: '755 Students',
//     duration: '2h 11m',
//     date: '11 March 2023',
//   },{
//     image: '../assets/img/course/course-1-1.png',
//     category: 'Technology',
//     categoryLink: 'course.html',
//     videoLink: 'https://www.youtube.com/watch?v=_sI_Ps7JSEk',
//     starRating: 5,
//     rating: '5.0',
//     price: '$778',
//     name: "Advance Begineer's Goal & Managing Course",
//     teacher: 'Ana Watson',
//     teacherLink: 'team-details.html',
//     students: '755 Students',
//     duration: '2h 11m',
//     date: '11 March 2023',
//   },
//   // Add more course objects here
// ];


export { course , product ,QualifiedTeachers , Event};
