import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_281SAo0mnL4HpQEwk75XR";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID, 
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  };
  
  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          setSuccessMessage("Form sent successfully! I'll reach back to you as soon as possible.")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>Please feel free to reach out to me.</p>
        <span className="success-message">{successMessage}</span>
        <div className="container">
          <form ref={form} onSubmit={handleSubmit(onSubmit)} >
            <div className="row">
              <div className="col-md-6 col-xs-12">
                {/* Name Input */}
                <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register(
                    "name",
                    {
                      required: "Please enter your name",
                      maxLength: {
                        value: 20,
                        message: "Please enter a name with fewer than 20 characters"
                      }
                    })
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.name && errors.name.message}
                </span>
                {/* Phone Input */}
                <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  name="phone"
                  {...register(
                    "phone",
                    {
                      required: "Please add your phone number"
                    })
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.phone && errors.phone.message}
                </span>
                {/* Email Input */}
                <div className="text-center">
                  <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register(
                    "email",
                    {
                      required: "Please provide you email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"
                      } 
                    }
                  )}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>
                {/* Subject Input */}
                <div className="text-center">
                  <input
                  type="text" 
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register(
                    "subject",
                    {
                      required: "OOPS, you forget to add the subject"
                    }
                  )}
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.subject && errors.subject.message}
                </span>
              </div>
              <div className="col-md-6 col-xs-12">
                {/* Description Input */}
                <div className="text-center">
                  <textarea 
                  type="text"
                  className="form-control"
                  placeholder="Content"
                  name="email"
                  {...register(
                    "description",
                    {
                      required: "Please leave a message"
                    }
                  )}
                  ></textarea>
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.description && errors.description.message}
                </span>
                <button className="btn-main-offer contacts-btn" type="submit">contact me</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contacts;
