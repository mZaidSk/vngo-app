import React from "react";
import { Field, FormikProps } from "formik";
import { FormValues } from "./FormValues";

interface Props {
  formik: FormikProps<FormValues>;
  onNext: () => void;
  onBack: () => void;
}

const Step4: React.FC<Props> = ({ formik: _formik, onNext, onBack }) => {
  return (
    // <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
    <div>
      <h2 className="text-2xl font-semibold mb-4">Address</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="col-span-2">
          <label className="block mb-1 font-medium">Street Address</label>
          <Field
            name="address"
            placeholder="Enter your street address"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">City</label>
          <Field
            name="city"
            placeholder="Enter city"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">State/Province</label>
          <Field
            name="state"
            placeholder="Enter state"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Zip/Postal Code</label>
          <Field
            name="zip"
            placeholder="Enter zip code"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Country</label>
          <Field
            as="select"
            name="country"
            className="w-full border rounded-md p-2"
          >
            <option value="">Select country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Other">Other</option>
          </Field>
        </div>

        <div className="col-span-2">
          <label className="block mb-1 font-medium">Address Type</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <Field
                type="radio"
                name="addressType"
                value="home"
                className="mr-1"
              />
              Home
            </label>
            <label className="flex items-center">
              <Field
                type="radio"
                name="addressType"
                value="work"
                className="mr-1"
              />
              Work
            </label>
            <label className="flex items-center">
              <Field
                type="radio"
                name="addressType"
                value="other"
                className="mr-1"
              />
              Other
            </label>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded"
        >
          Next Step
        </button>
      </div> */}
    </div>
  );
};

export default Step4;
