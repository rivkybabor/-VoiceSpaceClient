import { Step } from "./Step";
import { Task } from "./Task";

export class IdTasktoStudent
{
  constructor( public IdTask?:number,
    public  TaskName?:string,
    
    public Describe?:string,
    public  IdLevel? :number,
    public StartDate?:Date,
    public EndDate?:Date,
    public IDstudent?:number,
    public  IdDiagnostic  ?:number,
    public IdSchool?: number
    )
  {

  }
}
