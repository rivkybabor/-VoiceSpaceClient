export class StepToStudent
{
  constructor(
  public  IdStepToStudent :number,
  public  IdTasktoStudent :number,
  public  StepName:string,
  public DateOfAssignment :Date,
  public DateOfCompletion :Date,
  public IdLevel:number,
  public  IdStatus:number,
  public Mark: number,
  public  Describe:string,
  public  IdRecord :number,
  public DateOfAssignmentHebrew? :string,
  public DateOfCompletionHebrew? :string,
  ){}
}