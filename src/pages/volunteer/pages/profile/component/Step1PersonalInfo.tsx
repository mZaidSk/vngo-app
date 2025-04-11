import { Field, FormikProps } from "formik";
import { FormValues } from "./FormValues";

interface Props {
  formik: FormikProps<FormValues>;
  onNext: () => void;
  onBack: () => void;
}

const Step1: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Name */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          First Name
        </label>
        <Field
          name="firstName"
          placeholder="Enter first name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Last Name
        </label>
        <Field
          name="lastName"
          placeholder="Enter last name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Date of Birth{" "}
          <span className="text-sm text-gray-400">(dd-mm-yyyy)</span>
        </label>
        <Field
          name="dob"
          type="date"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Gender */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">Gender</label>
        <Field
          as="select"
          name="gender"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Field>
      </div>

      {/* Phone Number */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">
          Phone Number
        </label>
        <Field
          name="phone"
          placeholder="Enter phone number"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-semibold text-gray-700">Email</label>
        <Field
          name="email"
          type="email"
          placeholder="Enter email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>
    </div>
  );
};

export default Step1;
