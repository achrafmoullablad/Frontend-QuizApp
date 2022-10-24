import { Categorie } from "./categorie";
import { Questionnaire } from "./questionnaire";
import { Reponse } from "./reponse";

export class Question {
  public id!:number;
  public type!:string;
  public text!:string;
  public duree!:number;
  public categorie=new Categorie();
  public reponses!:Reponse[];
  public questionnaire:Questionnaire=new Questionnaire();
}
