export interface Education {
  qualification: string;
  fieldOfStudy: string;
  institution: string;
  graduationYear: string;
  gpa: string;
}

export interface FormValues {
  profileImage: any;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  education: Education[];
  skills: string[];
  customSkill: string;
  interests: string[]; // ✅ Changed from interest: string to interests: string[]
  experience: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  addressType: string;
}
