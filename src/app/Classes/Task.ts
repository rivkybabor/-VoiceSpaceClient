
export class Task {
  EndDate: string | number | Date;
  constructor(public IdTask?: number,
    public TaskName?: string,
    public Describe?:string,
    public IdLevel?:number,
    public IdDiagnostic?:number,
    public IdSchool?:number,
    public StartDateHebrew?:string,
    public  EndDateHebrew? :string,

  ) {

  }
}
