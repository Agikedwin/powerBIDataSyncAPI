import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const DepressionScreening = objectType({
    name: "DepressionScreening", // <- Name of your type
    definition(t) {
        t.nullable.string("uuid");
        t.nullable.int("patient_id");
        t.nullable.string("id_auto");
        t.nullable.int("mfl_code");
        t.nullable.string("visit_date");
        t.nullable.int("provider");
        t.nonNull.int("visit_id")
        t.nullable.int("location_id")
        t.nullable.int("encounter_id");

        t.nullable.string("PHQ_9_rating");
        t.nullable.string("date_created");
        t.nullable.string("date_last_modified");
        t.nullable.int("voided");
    },
});


export const DepressionScreeningMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nullable.field("postDepressionScreening", {
            type: "DepressionScreening",
             args: {
                
                id_auto : nullable(intArg()),
                uuid : nullable(stringArg()), 
                patient_id : nullable(intArg()),
                visit_date : nullable(stringArg()),
                provider : nullable(intArg()),
                encounter_id: nullable(intArg()),
                visit_id : nullable(intArg()),
                location_id : nullable(intArg()),
                mfl_code : nullable(intArg()),
                
                PHQ_9_rating : nullable(stringArg()),
                date_created : nullable(stringArg()), 
                date_last_modified : nullable(stringArg()), 
               
                voided  : nullable(intArg()),
            }, 

            resolve(parent, args, context) { 
                console.log(args);

                try {
                    const post = context.prisma.depressionScreening.create({  
                    
                        data:{
                            
                            id_auto : args.id_auto,
                            uuid : args.uuid, 
                            mfl_code : 12904,
                            patient_id : args.patient_id,
                            visit_date :args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,
                            provider : args.provider,
                            encounter_id: args.encounter_id,
                            
                            PHQ_9_rating : args.PHQ_9_rating, 
                            date_created : args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null, 
                            date_last_modified : args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null, 
                        
                            voided  : args.voided,

                        }
                    });
                    return post;
                    
                } catch (error) {
                    console.log(error)
                }
            },
        });
    },
});
