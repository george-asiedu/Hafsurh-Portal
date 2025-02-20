export interface AddCourse {
  course_name: string;
  course_code: string;
  credit_units: number;
}

export interface UpdateCourse {
  course_name: string;
  course_code: string;
  credit_units: number;
}

export interface CourseResponse {
  message: string;
  data: {
    course_name: string;
    course_code: string;
    credit_units: number;
    id: string;
  }
}

export interface GetAllCourses {
  message: string;
  data: Course[];
}

export interface Course {
  course_name: string;
  course_code: string;
  credit_units: number;
  id: string;
}
