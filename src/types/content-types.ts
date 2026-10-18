export type ContentSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO: YYYY-MM-DD
  readingTime: string;
  author: { name: string; role: string };
  relatedService: string;
  sections: ContentSection[];
};

export type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  type: "Announcement" | "Event" | "Regulatory update" | "Company";
  date: string; // ISO: YYYY-MM-DD
  sections: ContentSection[];
};

export type JobOpening = {
  slug: string;
  title: string;
  department: string;
  employmentType: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};