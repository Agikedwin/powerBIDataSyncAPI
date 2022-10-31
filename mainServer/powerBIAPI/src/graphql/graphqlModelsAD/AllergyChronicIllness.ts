import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const AllergyChronicIllness = objectType({
    name: "AllergyChronicIllness", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("patient_id"); 
       t.nullable.int("provider"); 
       t.nullable.int("visit_id"); 
       t.nullable.string("visit_date"); 
       t.nullable.int("location_id"); 
       t.nullable.int("encounter_id"); 
       t.nullable.int("obs_id"); 
       t.nullable.int("chronic_illness"); 
       t.nullable.string("chronic_illness_onset_date"); 
       t.nullable.string("allergy_causative_agent"); 
       t.nullable.int("allergy_reaction"); 
       t.nullable.int("allergy_severity"); 
       t.nullable.string("allergy_onset_date"); 
       t.nullable.int("voided"); 
       t.nullable.int("date_created"); 
       t.nullable.int("date_last_modified"); 

    },
});

let resData:any ;


export const AllergyChronicIllnessQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getAllergyChronicIllness", {
            type: "AllergyChronicIllness",
            resolve(parent, args, context) {  
                
               context.prisma.allergyChronicIllness.findMany().then(data =>{
                    resData = data;
                    console.log(data)
                    
                    

                });  
               
                return resData;
            },
        });
    },
});