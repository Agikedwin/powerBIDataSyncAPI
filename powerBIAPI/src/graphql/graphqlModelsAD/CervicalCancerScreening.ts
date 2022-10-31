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
        t.nullable.field("postCervicalCancerScreening", {
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
                    
                    data:{
                        date_created: args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,  
                        date_last_modified: args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,  
                        encounter_id: args.encounter_id,
                        encounter_provider: args.encounter_provider, 
                        location_id: args.location_id,
                        mfl_code: 12905,
                        next_appointment_date: args.next_appointment_date != null ? (new Date(args.next_appointment_date * 1).toISOString()) : null, 
                        patient_id: args.patient_id,
                        post_treatment_complication_cause: args.post_treatment_complication_cause, 
                        post_treatment_complication_other: args.post_treatment_complication_other, 
                        referral_facility: args.referral_facility, 
                        referral_reason: args.referral_reason,
                        referred_out: args.referred_out,
                        screening_method: args.screening_method,
                        screening_result: args.screening_result, 
                        screening_type: args.screening_type, 
                        treatment_method: args.treatment_method,
                        treatment_method_other: args.treatment_method_other, 
                        uuid: args.uuid,
                        visit_date: args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,
                        visit_id: args.visit_id,
                        visit_type: args.visit_type, 
                        voided: args.voided
                    }
                });
                return post;
            },
        });
    },
});
