export interface NGO {
  id: string;
  name: string;
  category: string;
  location: string;
  website: string;
  tags: string[];
  stats: {
    totalVolunteers: string;
    activitiesCompleted: number;
    peopleImpacted: string;
    rating: number;
    reviews: number;
  };
  currentActivities: {
    id: string;
    title: string;
    status: string;
    time: string;
    spotsLeft: string;
  }[];
  impactGallery: string[]; // or a custom type if it's an array of objects
  testimonials: {
    id: string;
    name: string;
    rating: number;
    feedback: string;
  }[];
  team: {
    id: string;
    name: string;
    role: string;
  }[];
}
