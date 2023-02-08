export interface StudentType {
  id: number;
  name: string;
  classesEnrolled: number[];
  marksPerClass: { [keys: string]: number };
}

export interface SchoolClass {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
}
