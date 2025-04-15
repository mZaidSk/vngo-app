import React from "react";
import { ErrorMessage, Field, FieldArray, useFormikContext } from "formik";
import { FormValues } from "../data/FormValues";

const Step2Education: React.FC = () => {
  const { values, errors, touched, setFieldValue } =
    useFormikContext<FormValues>();
  const graduationYears = Array.from({ length: 50 }, (_, i) => `${2025 - i}`);

  const handleAddEducation = () => {
    const newEducation = {
      qualification: "",
      fieldOfStudy: "",
      institution: "",
      graduationYear: "",
      gpa: "",
    };
    setFieldValue("education", [...values.education, newEducation]);
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-6 text-center md:text-left">
        Education Details
      </h3>

      <FieldArray name="education">
        {({ remove }) => (
          <div className="space-y-8">
            {values.education.map((_, index) => (
              <div
                key={index}
                className="border p-4 rounded-xl shadow-sm space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Qualification */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Highest Qualification
                    </label>
                    <Field
                      as="select"
                      name={`education[${index}].qualification`}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    >
                      <option value="">Select qualification</option>
                      <option value="High School">High School</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Bachelor's">Bachelor's</option>
                      <option value="Master's">Master's</option>
                      <option value="PhD">PhD</option>
                    </Field>
                    <ErrorMessage
                      name={`education[${index}].qualification`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Field of Study */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Field of Study
                    </label>
                    <Field
                      type="text"
                      name={`education[${index}].fieldOfStudy`}
                      placeholder="Enter your field of study"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    />
                    <ErrorMessage
                      name={`education[${index}].fieldOfStudy`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Institution Name */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Institution Name
                    </label>
                    <Field
                      type="text"
                      name={`education[${index}].institution`}
                      placeholder="Enter institution name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    />
                    <ErrorMessage
                      name={`education[${index}].institution`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Year & GPA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block mb-1 font-medium">
                        Graduate Year
                      </label>
                      <Field
                        as="select"
                        name={`education[${index}].graduationYear`}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                      >
                        <option value="">Select year</option>
                        {graduationYears.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name={`education[${index}].graduationYear`}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <label className="block mb-1 font-medium">GPA</label>
                      <Field
                        type="text"
                        name={`education[${index}].gpa`}
                        placeholder="Enter GPA"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                      />
                      <ErrorMessage
                        name={`education[${index}].gpa`}
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Remove Button */}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Remove Education
                  </button>
                )}
              </div>
            ))}

            {/* Add Another Button */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleAddEducation}
                className="text-sm text-blue-600 hover:underline"
              >
                + Add Another Education
              </button>
            </div>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default Step2Education;
