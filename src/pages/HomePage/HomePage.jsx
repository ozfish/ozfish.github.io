import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import { plans } from "../../data/api-mock";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="content-center">
        <div>
          <div className="flex justify-center">
            <h4 className="header">Feature-rich plans with upfront pricing</h4>
          </div>
          <div className="flex justify-center">
            <h6 className="secondary-text">
              Choose the best option for your company
            </h6>
          </div>
          <div>
            <div className="plans">
              {plans.map((item, index) => (
                <Card key={item.id}>
                  <div className="flex column text-center">
                    <div className="flex justify-center plan-logo">
                      <img src={`/Plan-${item.id}.png`} alt="plan" />
                    </div>
                    <h4 className="card-title">{item.title}</h4>
                    <h2 className="card-price">{item.price}</h2>
                    <span className="price-description">USD/MONTH</span>
                    <Link to={`/register?planId=${item.id}`}>
                      <button
                        className={`btn ${
                          index % 2 === 0 ? "blue" : "green"
                        } try-btn`}
                      >
                        Try it now
                      </button>
                    </Link>
                    <div className="plan-description flex column justify-center m-auto">
                      {item.description.map((desc) => (
                        <div key={desc} className="flex description">
                          <img
                            src="/Check-icon.png"
                            className="check"
                            alt="check"
                          />
                          <span className="text-left">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="home-background"></div>
    </div>
  );
};

export default HomePage;
