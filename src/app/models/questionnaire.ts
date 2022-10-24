import { Categorie } from "./categorie";
import { Question } from "./question";
export class Questionnaire {
  public id!:number;
  public titre!:string;
  public Categorie:Categorie=new Categorie();
  public questions!:Question[];
}
