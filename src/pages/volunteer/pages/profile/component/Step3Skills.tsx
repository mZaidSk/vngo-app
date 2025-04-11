import React, { useState } from "react";
import { Field, FormikProps } from "formik";

interface Step3Props {
  formik: FormikProps<any>;
  onNext: () => void;
  onBack: () => void;
}

const Step3: React.FC<Step3Props> = ({ formik, onNext, onBack }) => {
  const [customSkill, setCustomSkill] = useState("");

  const addCustomSkill = () => {
    if (customSkill.trim() && !formik.values.skills.includes(customSkill)) {
      formik.setFieldValue("skills", [...formik.values.skills, customSkill]);
      setCustomSkill("");
    }
  };

  return (
    <div>
      {/* <div className="bg-amber-400 shadow-lg p-8 rounded-xl w-full max-w-2xl mx-auto"> */}
      <h2 className="text-2xl font-bold mb-6 text-black ">Skills</h2>

      <div className="mb-6">
        <label className="block text-lg font-semibold text-black mb-2">
          Technical Skills
        </label>
        <div className="flex flex-wrap gap-4">
          {["JavaScript", "Python", "React", "Node.js", "SQL"].map((skill) => (
            <label key={skill} className="flex items-center space-x-2">
              <Field type="checkbox" name="skills" value={skill} />
              <span className="text-sm text-black">{skill}</span>
            </label>
          ))}
          {/* Display custom skills */}
          {formik.values.skills
            ?.filter(
              (s: string) =>
                !["JavaScript", "Python", "React", "Node.js", "SQL"].includes(s)
            )
            .map((custom: string) => (
              <span
                key={custom}
                className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
              >
                {custom}
              </span>
            ))}
        </div>

        {/* Add custom skill */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={customSkill}
            onChange={(e) => setCustomSkill(e.target.value)}
            placeholder="Add custom skill"
            className="input flex-1 border text-black rounded-md px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={addCustomSkill}
            className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-black text-sm"
          >
            Add
          </button>
        </div>
      </div>

      {/* Dropdowns */}
      <div className="grid gap-4">
        <div>
          <label className="block font-medium text-black mb-1">
            Area of Interest
          </label>
          <Field
            as="select"
            name="proficiency.react"
            className="input w-full border text-black rounded px-3 py-2 text-sm"
          >
            <option value="">Select Interest</option>
            <option>Environment</option>
            <option>Education</option>
            <option>Health</option>
            <option>Animal Welfare</option>
            <option>Disability Support</option>
            <option>Senior Support</option>
          </Field>
        </div>

        {/* <div>
          <label className="block font-medium text-gray-700 mb-1">
            Total Years of Experience
          </label>
          <Field
            name="experience"
            className="input w-full border rounded px-3 py-2 text-sm"
            placeholder="Enter years of experience"
          />
        </div> */}
      </div>

      {/* Navigation buttons */}
      {/* <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2 rounded bg-black text-white hover:bg-gray-900"
        >
          Next Step
        </button>
      </div> */}
    </div>
  );
};

export default Step3;
