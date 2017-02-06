import { Message } from "./message";

export interface Atelier {

     title:string,
     image: string,
     masterUser: [string], 
     nbParticipant: number,
     nbInscrit: number, 
     dateEvent: Date, 
     resume: string,
     messages: [Message]
}