import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h4>회사정보예요</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
