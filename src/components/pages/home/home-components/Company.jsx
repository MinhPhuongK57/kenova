import React from "react";
const Company = () => {
  const listCompanies = [
    {
      id: 1,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fartbeat.png&w=256&q=100",
      status: true,
    },
    {
      id: 2,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fpulse.png&w=256&q=100",
      status: true,
    },
    {
      id: 3,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Foperation-viettel.png&w=256&q=100",
      status: true,
    },
    {
      id: 4,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fcare.png&w=256&q=100",
      status: true,
    },
    {
      id: 5,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fqualee.png&w=256&q=100",
      status: true,
    },
    {
      id: 6,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Free.png&w=256&q=100",
      status: true,
    },
    {
      id: 7,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Fqode.png&w=256&q=100",
      status: true,
    },
    {
      id: 8,
      image:
        "https://fabatechnology.com/_next/image?url=%2Fhome-page%2Flogo-companies%2Foperation-artwall.png&w=256&q=100",
      status: true,
    },
  ];
  let elements = listCompanies.map((listCompany, index) => {
    let result = "";
    if (listCompany.status) {
      result = (
        <img
          key={index}
          src={listCompany.image}
          alt={listCompany.image}
          className="company-content  wow animate__fadeInUp"
          data-wow-duration="0.8s"
          data-wow-delay="0.3s"
        ></img>
      );
    }
    return result;
  });
  return (
    <section className="home__company container__padding">
      <div className="home__company--grid">{elements}</div>
    </section>
  );
};

export default Company;
