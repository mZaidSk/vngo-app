import React from "react";
import { useFormikContext } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormValues } from "../data/FormValues";
import { ImageUp } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const profileImgDemo = [
  {
    alt: "img 1",
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsiRJRJVZsNbhMQvW5_jHqApzmQwPrGBvOqCg6CLWtvmvDYJUcpkzGeoXXs8Lmv-NMs4&usqp=CAU",
  },
  { alt: "img 2", link: "/profile-img/p2.jpg" },
  { alt: "img 3", link: "/profile-img/p3.jpg" },
  { alt: "img 4", link: "/profile-img/p4.jpg" },
  { alt: "img 5", link: "/profile-img/p5.jpg" },
  { alt: "img 6", link: "/profile-img/p6.jpg" },
];

const ProfileImgButton: React.FC<{ onSelect: (imgLink: string) => void }> = ({
  onSelect,
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <button
        type="button"
        onClick={(e) => e.stopPropagation()}
        className="p-2 bg-gray-100 rounded-full hover:bg-gray-300 shadow-md transition-all focus:ring-2 focus:ring-blue-500"
      >
        <ImageUp className="text-gray-600 w-5 h-5" />
      </button>
    </PopoverTrigger>
    <PopoverContent className="w-80 max-h-72 overflow-y-auto p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="grid grid-cols-3 gap-4">
        {profileImgDemo.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => onSelect(img.link)}
          >
            <img
              src={img.link}
              alt={img.alt}
              className="w-24 h-24 object-cover rounded-md border border-gray-200 hover:border-blue-400"
            />
          </div>
        ))}
      </div>
    </PopoverContent>
  </Popover>
);

const Step1: React.FC = () => {
  const { values, errors, touched, handleChange, setFieldValue } =
    useFormikContext<FormValues>();

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        {/* Section Title + Profile Image */}
        <Label className="text-xl font-semibold ">Personal Information</Label>

        <div className="col-span-1 md:col-span-2 flex flex-col items-center space-y-3">
          <div className="relative w-fit py-4 mx-auto">
            {values.profileImage ? (
              <img
                src={values.profileImage}
                alt="Selected"
                className="w-20 h-20 rounded-full border object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-200" />
            )}
            <div className="absolute -bottom-1 -right-1">
              <ProfileImgButton
                onSelect={(link) => setFieldValue("profileImage", link)}
              />
            </div>
          </div>
        </div>

        {/* First Name */}
        <div className="space-y-1">
          <Label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            placeholder="Enter first name"
            value={values.firstName}
            onChange={handleChange}
            className="text-sm px-4 py-2"
          />
          {touched.firstName && errors.firstName && (
            <div className="text-red-500 text-xs">{errors.firstName}</div>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <Label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Enter last name"
            value={values.lastName}
            onChange={handleChange}
            className="text-sm px-4 py-2"
          />
          {touched.lastName && errors.lastName && (
            <div className="text-red-500 text-xs">{errors.lastName}</div>
          )}
        </div>

        {/* Date of Birth */}
        <div className="space-y-1">
          <Label htmlFor="dob" className="text-sm font-medium">
            Date of Birth
          </Label>
          <Input
            id="dob"
            name="dob"
            type="date"
            value={values.dob}
            onChange={handleChange}
            className="text-sm px-4 py-2"
          />
          {touched.dob && errors.dob && (
            <div className="text-red-500 text-xs">{errors.dob}</div>
          )}
        </div>

        {/* Gender */}
        <div className="space-y-1">
          <Label htmlFor="gender" className="text-sm font-medium">
            Gender
          </Label>
          <select
            id="gender"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            className="w-full border border-input rounded-md px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {touched.gender && errors.gender && (
            <div className="text-red-500 text-xs">{errors.gender}</div>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            value={values.phone}
            onChange={handleChange}
            className="text-sm px-4 py-2"
          />
          {touched.phone && errors.phone && (
            <div className="text-red-500 text-xs">{errors.phone}</div>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email" className="text-sm font-medium">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            className="text-sm px-4 py-2"
          />
          {touched.email && errors.email && (
            <div className="text-red-500 text-xs">{errors.email}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step1;
