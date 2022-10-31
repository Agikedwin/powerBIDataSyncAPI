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
       t.nullable.string("date_created"); 
       t.nullable.string("date_last_modified"); 

    },
});



export const AllergyChronicIllnessMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nullable.field("postAllergyChronicIllness", {
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

                try {
                    const post = context.prisma.allergyChronicIllness.create({  
                    
                        data: {
                            uuid: args.uuid,
                            provider: args.provider,
                            patient_id : args.patient_id,
                            visit_id : args.visit_id,
                            mfl_code: 12904,
                            visit_date: args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,
                            location_id : args.location_id,
                            encounter_id : args.encounter_id,
                            obs_id: args.obs_id,
                            chronic_illness: args.chronic_illness,
                            chronic_illness_onset_date: args.chronic_illness_onset_date != null ? (new Date(args.chronic_illness_onset_date * 1).toISOString()) : null,
                            allergy_causative_agent: args.allergy_causative_agent,
                            allergy_reaction: args.allergy_reaction,
                            allergy_severity : args.allergy_severity,
                            allergy_onset_date : args.allergy_onset_date != null ? (new Date(args.allergy_onset_date * 1).toISOString()) : null,
                            voided: args.voided,
                            date_created : args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,
                            date_last_modified: args.date_last_modified,
                        } 
                    });
                    return post;
                    
                } catch (error) {
                    console.error(error)                 
                }
            },
        });
    },
});
