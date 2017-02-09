import { Message } from "./message";
import { User } from "./user";

export interface Atelier {

     title:string,
     image: string,
     masterUser: [string], 
     nbParticipant: number,
     nbMaxInscrit: number, 
     dateEvent: Date, 
     resume: string,
     messages: [Message]
     particpant: [User]
}