export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
  programme: string | null;
  dob: Date | null;
  phone: string | null;
  address: string | null;
  registered: boolean;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface Profile {
  message: string;
  data: User;
}

export interface GetAllUsers {
  message: string;
  data: User[];
}

export interface UpdateBio {
  programme: string | null;
  dob: Date | null;
  phone: string | null;
  address: string | null;
}
