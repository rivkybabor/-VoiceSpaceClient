import { diagnostic } from "./diagnostic";

export class student {
  constructor(
    public  IdStudent?: number,
    public  Tz?:string,
    public  FirstName?:string,
    public  LastName?:string,
    public  IdSchool?:number,
    public  phonNamber?:string,
    public  phonNamber1?:string,
    public IdAddress?:number,
    public  TzFather?:string,
    public  FatherName?:string,
    public  phonFather?:string,
    public  TzMother?:string,
    public  MotherName?:string,
    public  phonMother?:string,
    public Certified?:boolean,
    public   listDiagnostics?:diagnostic[]
  ) { }
}
