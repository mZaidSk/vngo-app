import React from "react";
import { Field, FieldArray, FormikProps } from "formik";
import { FormValues } from "./FormValues";

interface Props {
  formik: FormikProps<FormValues>;
  onNext: () => void;
  onBack: () => void;
}

const Step2Education: React.FC<Props> = ({
  formik: _formik,
  onNext: _onNext,
  onBack: _onBack,
}) => {
  const graduationYears = Array.from({ length: 50 }, (_, i) => `${2025 - i}`);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Education Details</h3>

      <FieldArray name="education">
        {() => (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Qualification */}
              <div>
                <label className="block mb-1 font-medium">
                  Highest Qualification
                </label>
                <Field
                  as="select"
                  name="qualification"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                >
                  <option value="">Select qualification</option>
                  <option value="High School">High School</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </Field>
              </div>

              {/* Field of Study */}
              <div>
                <label className="block mb-1 font-medium">Field of Study</label>
                <Field
                  type="text"
                  name="fieldOfStudy"
                  placeholder="Enter your field of study"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Institution Name */}
              <div>
                <label className="block mb-1 font-medium">
                  Institution Name
                </label>
                <Field
                  type="text"
                  name="institution"
                  placeholder="Enter institution name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Year of Graduation & GPA */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block mb-1 font-medium">
                    Year of Graduation
                  </label>
                  <Field
                    as="select"
                    name="graduationYear"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  >
                    <option value="">Select year</option>
                    {graduationYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Field>
                </div>

                <div>
                  <label className="block mb-1 font-medium">
                    GPA (Optional)
                  </label>
                  <Field
                    type="text"
                    name="gpa"
                    placeholder="Enter GPA"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
              </div>
            </div>

            {/* Option to Add More Education Later (if implemented) */}
            <div>
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
                onClick={() =>
                  alert(
                    "Functionality to add more education not implemented yet"
                  )
                }
              >
                + Add Another Education
              </button>
            </div>
          </div>
        )}
      </FieldArray>

      {/* Navigation Buttons */}
      {/* <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded"
        >
          Next Step
        </button>
      </div> */}
    </div>
  );
};

export default Step2Education;
