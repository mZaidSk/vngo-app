import React from "react";
import { Field, FormikProps } from "formik";
import { FormValues } from "../data/FormValues";

interface Props {
  formik: FormikProps<FormValues>;
  onNext: () => void;
  onBack: () => void;
}

const Step4: React.FC<Props> = ({ formik: _formik, onNext, onBack }) => {
  const { errors, touched } = _formik;

  return (
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
          {touched.address && errors.address && (
            <div className="text-red-500 text-sm mt-1">{errors.address}</div>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">City</label>
          <Field
            name="city"
            placeholder="Enter city"
            className="w-full border rounded-md p-2"
          />
          {touched.city && errors.city && (
            <div className="text-red-500 text-sm mt-1">{errors.city}</div>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">State/Province</label>
          <Field
            name="state"
            placeholder="Enter state"
            className="w-full border rounded-md p-2"
          />
          {touched.state && errors.state && (
            <div className="text-red-500 text-sm mt-1">{errors.state}</div>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Zip/Postal Code</label>
          <Field
            name="zip"
            placeholder="Enter zip code"
            className="w-full border rounded-md p-2"
          />
          {touched.zip && errors.zip && (
            <div className="text-red-500 text-sm mt-1">{errors.zip}</div>
          )}
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
          {touched.country && errors.country && (
            <div className="text-red-500 text-sm mt-1">{errors.country}</div>
          )}
        </div>

        <div className="col-span-2">
          <label className="block mb-1 font-medium">Address Type</label>
          <div className="flex items-center gap-4">
            {["home", "work", "other"].map((type) => (
              <label key={type} className="flex items-center">
                <Field
                  type="radio"
                  name="addressType"
                  value={type}
                  className="mr-1"
                />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>
          {touched.addressType && errors.addressType && (
            <div className="text-red-500 text-sm mt-1">
              {errors.addressType}
            </div>
          )}
        </div>
      </div>

      {/* Optional: Add navigation buttons here if needed */}
    </div>
  );
};

export default Step4;
