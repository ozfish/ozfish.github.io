import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import "./PortalPage.css";

const PortalPage = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div>
        <TopNavigation username="Test user" />
        <div className="center-message">
          <div className="flex column justify-center">
            <img
              src="./phone-cloud-icon.png"
              alt="phone"
              className="phone-logo m-auto"
            />
            <h2 className="text-center">Thank you</h2>
            <h4 className="text-center">
              You've just started your 30-day trial.
            </h4>
            <span>
              voluptatem accusantium doloremque laudantium, totam rem aperiam
              eaque ipsa, quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,
              quia voluptas sit, aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos, qui ratione voluptatem sequi
              nesciunt, neque porro quisquam est
            </span>
            <Link to="/">
              <button className="btn green">Manage Subscription</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalPage;
