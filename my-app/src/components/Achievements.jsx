import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Achievements = () => {
  const achievements = [
    { number: "1000+", title: "Students Enrolled" },
    { number: "50+", title: "Expert Teachers" },
    { number: "100%", title: "Success Rate" },
    { number: "20+", title: "Awards Won" }
  ];

  return (
    <section className="achievements py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Achievements</h2>
        <div className="row">
          {achievements.map((item, index) => (
            <div key={index} className="col-md-3 col-sm-6 mb-4">
              <div className="achievement-box text-center p-4 bg-white rounded shadow-sm hover-card">
                <h3 className="display-4 text-primary">{item.number}</h3>
                <p className="mb-0">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;