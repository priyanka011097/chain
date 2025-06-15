import formImg from "../assets/contact-form-bgimg.png";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <>
      <style>{`
        .contact-form-wrapper {
          width: 100%;
          max-width: 650px;
          padding: 40px;
          background-image: url(${formImg});
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 16px;
          margin: auto;
          color: white;
          margin-bottom: 260px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: flex;
          gap: 20px;
        }

        .form-control {
          flex: 1;
          padding: 16px 20px;
          border-radius: 10px;
          font-size: 14px;
          color: #fff;
          background: repeating-linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.06) 0px,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px,
              transparent 16px
            ),
            linear-gradient(
              9.22deg,
              rgba(255, 255, 255, 0.08) 18.26%,
              rgba(0, 0, 0, 0.08) 131.8%
            ),
            linear-gradient(0deg, #060709, #060709);
          border: 1.1px solid transparent;
        }

        .form-control::placeholder {
          color: #9ca3af;
        }

        .input-label-container{
        display: flex;
        flex-direction: column;
        }

        .w-100{
         width:100%;
        }

        .submit-btn {
          padding: 10px 30px;
          border: none;
          border-radius: 30px;
          background: linear-gradient(90deg, #ff9500, #ff6200);
          color: white;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          align-self: flex-end;
        }

        .submit-btn:hover {
          opacity: 0.95;
        }

        label {
          font-size: 14px;
          margin-bottom: 10px;
          color: #d1d5db;
        }
      `}</style>

      <form className="contact-form-wrapper">
        <div className="form-group">
          <div className="form-row">
            <div className="input-label-container w-100">
              <label>First Name</label>
              <input
                type="text"
                placeholder="👤 Enter Your First Name"
                className="form-control"
              />
            </div>
            <div className="input-label-container w-100">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="👤 Enter Last Name"
                className="form-control"
              />
            </div>
          </div>

          <div className="input-label-container">
            <label>Email</label>
            <input
              type="email"
              placeholder="📧 Enter Your Email"
              className="form-control"
            />
          </div>

          <div className="input-label-container">
            <label>Message</label>
            <textarea
              rows={5}
              placeholder="💬 Enter Your Message"
              className="form-control"
            />
          </div>

          <button type="submit" className="submit-btn">
            Contact →
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
