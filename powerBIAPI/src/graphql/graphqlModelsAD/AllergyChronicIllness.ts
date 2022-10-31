import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const AllergyChronicIllness = objectType({
    name: "AllergyChronicIllness", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("patient_id"); 
       t.nullable.int("mfl_code");
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



export const AllergyChronicIllnessMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postAllergyChronicIllness", {
            type: "AllergyChronicIllness",
             args: {
                uuid: nullable(stringArg()),
                provider: nullable(intArg()),
                patient_id : nullable(intArg()),
                visit_id : nullable(intArg()),
                mfl_code: nullable(intArg()),
                visit_date: nullable(stringArg()),
                location_id : nullable(intArg()),
                encounter_id : nullable(intArg()),
                obs_id: nullable(intArg()),
                chronic_illness: nullable(intArg()),
                chronic_illness_onset_date : nullable(stringArg()),
                allergy_causative_agent: nullable(intArg()),
                allergy_reaction: nullable(intArg()),
                allergy_severity : nullable(intArg()),
                allergy_onset_date : nullable(stringArg()),
                voided: nullable(intArg()),
                date_created : nullable(stringArg()),
                date_last_modified: nullable(stringArg()),


            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.allergyChronicIllness.create({  
                    
                    data:args
                });
                return post;
            },
        });
    },
});
