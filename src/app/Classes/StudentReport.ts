import { diagnostic } from "./diagnostic";

export class StudentReport {
  constructor(
    public  IdReport?:number,
    public IdStudent ?:number,
    public IdDiagnostic?:number,
    public  PathReport?:string,
    public  report ?:string,
    public Date?:Date,
     public HebrewDate?:string,
    public Title?: string,
    public Diagnostic?:diagnostic
  ) { }
}
