import { Question } from "./question";

export class Reponse {
  public id!:number;
  public choix!:string;
  public correcte!:boolean;
  public question:Question=new Question();
}
