import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const CervicalCancerScreening = objectType({
    name: "CervicalCancerScreening", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("patient_id"); 
       t.nullable.int("mfl_code");
       t.nullable.int("encounter_provider"); 
       t.nullable.int("visit_id"); 
       t.nullable.string("visit_date"); 
       t.nullable.int("location_id"); 
       t.nullable.int("provider"); 
       t.nullable.int("encounter_id"); 
       t.nullable.string("visit_type"); 
       t.nullable.string("screening_type"); 
       t.nullable.string("post_treatment_complication_cause"); 
       t.nullable.string("screening_method"); 
       t.nullable.string("screening_result"); 
       t.nullable.string("treatment_method"); 
       t.nullable.string("treatment_method_other"); 
       t.nullable.string("referred_out"); 
       t.nullable.string("referral_facility"); 
       t.nullable.string("booking_date"); 
       t.nullable.string("referral_reason"); 
       t.nullable.string("date_last_modified"); 
       t.nullable.int("voided"); 

    },
});



export const CervicalCancerScreeningMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postCervicalCancerScreening", {
            type: "CervicalCancerScreening",
             args: {
                
                uuid : nullable(stringArg()),
                encounter_id : nullable(intArg()),
                encounter_provider: nullable(intArg()),
                patient_id: nullable(intArg()),
                mfl_code: nullable(intArg()),
                visit_id: nullable(intArg()),
                visit_date: nullable(stringArg()),
                location_id: nullable(intArg()),
                date_created: nullable(stringArg()),
                date_last_modified: nullable(stringArg()),                
                visit_type: nullable(stringArg()),
                screening_type: nullable(stringArg()),
                post_treatment_complication_cause: nullable(stringArg()),
                post_treatment_complication_other: nullable(stringArg()),
                screening_method: nullable(stringArg()),
                screening_result: nullable(stringArg()),
                treatment_method: nullable(stringArg()),
                treatment_method_other: nullable(stringArg()),
                referred_out: nullable(stringArg()),
                referral_facility: nullable(stringArg()),
                referral_reason: nullable(stringArg()),
                next_appointment_date: nullable(stringArg()),
                voided : nullable(intArg()),

            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.cervicalCancerScreening.create({  
                    
                    data:args
                });
                return post;
            },
        });
    },
});
