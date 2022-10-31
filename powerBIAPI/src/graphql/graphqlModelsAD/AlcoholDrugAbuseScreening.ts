import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const AlcoholDrugAbuseScreening = objectType({
    name: "AlcoholDrugAbuseScreening", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid")
       t.nullable.int("patient_id"); 
       t.nullable.int("mfl_code");
       t.nullable.int("provider"); 
       t.nullable.int("visit_id"); 
       t.nullable.int("provider"); 
       t.nullable.string("visit_date"); 
       t.nullable.int("location_id"); 
       t.nullable.int("encounter_id"); 
       t.nullable.string("alcohol_drinking_frequency"); 
       t.nullable.string("smoking_frequency"); 
       t.nullable.string("drugs_use_frequency"); 
       t.nullable.int("voided"); 
       t.nullable.int("date_created"); 
       t.nullable.int("date_last_modified"); 

    },
});


let count = 0;
export const AlcoholDrugAbuseScreeningMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nullable.field("postAlcoholDrugAbuseScreening", {
            type: "AlcoholDrugAbuseScreening",
             args: {
                uuid:  nullable(stringArg()),
                mfl_code: nullable(intArg()),
                provider:  nullable(intArg()),
                patient_id:  nullable(intArg()),
                mfl_code: nullable(intArg()),
                visit_id:  nullable(intArg()),
                visit_date:  nullable(stringArg()),
                location_id:  nullable(intArg()),
                encounter_id:  nullable(intArg()),
                alcohol_drinking_frequency:  nullable(stringArg()),
                smoking_frequency:  nullable(stringArg()),
                drugs_use_frequency:  nullable(stringArg()),
                voided:  nullable(intArg()),
                date_created:    nullable(stringArg()),
                date_last_modified:  nullable(stringArg())


            }, 
            

            resolve(parent, args, context) {               
               console.log(args)

                 
                try {

                    const post = context.prisma.alcoholDrugAbuseScreening.create({  
                   
                        data: {
                            uuid: args.uuid,
                            mfl_code: 12505,
                            provider: args.provider,
                            patient_id: args.patient_id,
                            visit_id: args.visit_id,
                            visit_date: args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,
                            location_id: args.location_id,
                            encounter_id: args.encounter_id,
                            alcohol_drinking_frequency: args.alcohol_drinking_frequency,
                            smoking_frequency: args.alcohol_drinking_frequency,
                            drugs_use_frequency: args.alcohol_drinking_frequency,
                            date_created: args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,
                            date_last_modified: args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,
                            voided: args.voided
                        }
                        
                    });
                    console.log("============================= ",count++);
    
                    return post;
                    
                } catch (error) {
                   throw new Error()
                }

              
            },
        });
    },
});
