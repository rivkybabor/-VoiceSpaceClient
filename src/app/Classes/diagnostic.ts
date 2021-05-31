import { student } from "./student";

export class diagnostic {
  constructor(
    public IdUser?: number,
    public Tz?: string,
    public FirstName?: string,
    public LastName?: string,
    public Phon?:string,
    public Mail?:string,
    public UserName?: string,
    public Password?: string,
    public IdPermission?: number,
    public IdSchool?: number,
    public listStudents?:student[]
  ) { }
}
