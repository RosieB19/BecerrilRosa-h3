const displayText400 = () => {
  const courses = document.getElementsByClassName("400level");
  console.log("Courses Found:", courses.length);
  for (let course of courses) {
    console.log(course.textContent);
  }
};
displayText400();