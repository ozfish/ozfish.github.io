import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Divider from "../../components/Divider/Divider";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import "./RegisterPage.css";
import Tabs from "../../components/Tabs/Tabs";
import { countries, states, plans } from "../../data/api-mock";

const getQueryParam = (name) => {
  if (
    (name = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(
      window.location.search
    ))
  )
    return decodeURIComponent(name[1]);
};

const getSelectedPlan = () => {
  const id = getQueryParam("planId");
  if (id && !window.isNaN(id)) {    
    return plans.find(item => item.id === Number(id));
  }
  return plans[0];
}


const RegisterPage = () => {

  const selectedPlan = getSelectedPlan();

  return (
    <div>
      <Navbar />
      <div className="flex justify-between w-full page-content">
        <div className="w-full form-description">
          <div className="text-center">
            <h3 className="header">Start your 30-day free trial</h3>
          </div>
          <div>
            <div className="plan-description flex column m-auto">
              {
                selectedPlan?.description?.map(item => (
                  <div className="flex" key={item}>
                    <img src="/Check-icon.png" className="my-auto" alt="check" />
                    <span>{item}</span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="businesses">
            <h3>Trusted by leading businesses</h3>
            <div className="list flex justify-between w-full">
              <img src="./emburse-logo.png" alt="emburse-logo" />
              <img src="./go-cardless-logo.png" alt="go-cardless-logo" />
              <img src="./jpmc-logo.png" alt="jpmc-logo" />
              <img src="./thunes-logo.png" alt="thunes-logo" />
            </div>
            <div className="secondary-text">
              voluptatem accusantium doloremque laudantium, totam rem aperiam
              eaque ipsa, quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,
              quia voluptas sit, aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos, qui ratione voluptatem sequi
              nesciunt, neque porro quisquam est
            </div>
          </div>
        </div>
        <div className="w-full billing-form">
          <Card>
            <Divider>Billing Contact</Divider>
            <div className="flex justify-between w-full">
              <Input placeholder="First name..." name="firstName" />
              <Input placeholder="Last name..." name="lastName" />
            </div>
            <div className="flex justify-between w-full">
              <Input placeholder="Email..." name="email" />
              <Input placeholder="Username..." name="username" />
            </div>
            <Divider>Billing Address</Divider>
            <div className="flex justify-between w-full">
              <Select
                placeholder="Country..."
                name="country"
                options={countries}
              />
              <Input placeholder="City..." name="city" />
            </div>
            <div className="flex justify-between w-full">
              <Input placeholder="Street..." name="street" />
              <Input placeholder="Apt/Suite..." name="apt" />
            </div>
            <div className="flex justify-between w-full">
              <Select placeholder="State..." name="state" options={states} />
              <Input placeholder="ZIP/Postal..." name="zip" />
              <Input placeholder="GST number (optional)..." name="gst" />
            </div>
            <Divider>Payment Method</Divider>
            <Tabs
              value="CC"
              data={[
                {
                  value: "CC",
                  label: (
                    <div className="flex">
                      <img src={"./CC-icon.png"} alt="CC-icon" />
                      <span>Credit Card</span>
                    </div>
                  ),
                },
                {
                  value: "Paypal",
                  label: (
                    <div className="flex">
                      <img src={"./Paypal-icon.png"} alt="CC-icon" />
                      <span>PayPal</span>
                    </div>
                  ),
                },
              ]}
            />
            <div className="tab-content">
              <div className="flex justify-between w-full">
                <span>Name on credit card</span>
                <Input
                  placeholder="Name on credit card"
                  name="creditCardName"
                />
              </div>
              <div className="flex justify-between w-full">
                <span>Credit Card number</span>
                <Input
                  placeholder="XXXX - XXXX - XXXX - XXXX"
                  name="creditCardNumber"
                />
              </div>
              <div className="flex justify-between w-full">
                <span>Expiration Date</span>
                <div className="flex justify-between w-full inputs-row">
                  <Input placeholder="MM" name="expiryMonth" />
                  <Input placeholder="YYYY" name="expiryYear" />
                  <span>CVV</span>
                  <Input placeholder="XXX" name="cvv" />
                </div>
              </div>
            </div>
            <Link to="/portal">
              <button className="btn green w-full">Register now</button>
            </Link>
          </Card>
        </div>
      </div>
      <div className="register-background"></div>
    </div>
  );
};

export default RegisterPage;
