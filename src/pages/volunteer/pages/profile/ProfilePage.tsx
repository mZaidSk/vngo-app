import React, { useState } from "react";
import { Formik, Form } from "formik";
import Step1 from "./component/Step1PersonalInfo";
import Step2 from "./component/Step2Education";
import Step3 from "./component/Step3Skills";
import Step4 from "./component/Step4Address";
import { FormValues } from "./component/FormValues";
import Step2Education from "./component/Step2Education";

const steps = ["Personal Info", "Education", "Skills", "Address"];

const ProfilePage = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    qualification: "",
    fieldOfStudy: "",
    institution: "",
    graduationYear: "",
    gpa: "",
    skills: [],
    customSkill: "",
    interest: "",
    experience: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    addressType: "",
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Create Your Profile
      </h2>

      {/* Step Indicator */}
      <div className="flex mb-15 space-x-4">
        {steps.map((label, index) => (
          <div key={index} className="flex items-center w-full ">
            <div className="flex items-center relative ">
              <div
                className={`rounded-full w-9 h-9 flex items-center justify-center text-sm font-bold z-10 ${
                  step === index
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`absolute top-12 text-sm ${
                  step === index ? "text-black font-semibold" : "text-gray-500"
                }`}
              >
                {label}
              </span>
            </div>
            {index !== steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-300 mx-2" />
            )}
          </div>
        ))}
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          if (step === steps.length - 1) {
            console.log("Final submit:", values);
          } else {
            handleNext();
          }
        }}
      >
        {(formik) => (
          <Form>
            <div className="bg-white p-10 m-5 rounded-2xl shadow-md">
              {step === 0 && (
                <Step1
                  formik={formik}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}
              {step === 1 && (
                <Step2Education
                  formik={formik}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}
              {step === 2 && (
                <Step3
                  formik={formik}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}
              {step === 3 && (
                <Step4
                  formik={formik}
                  onNext={handleNext}
                  onBack={handleBack}
                />
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded"
                >
                  {step === steps.length - 1 ? "Submit" : "Next Step"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProfilePage;
