import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const CccDefaulterTracing = objectType({
    name: "CccDefaulterTracing", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("patient_id"); 
       t.nullable.int("fml_code");
       t.nullable.int("provider"); 
       t.nullable.int("visit_id"); 
       t.nullable.int("mfl_code");
       t.nullable.string("visit_date"); 
       t.nullable.int("location_id"); 
       t.nullable.int("provider"); 
       t.nullable.int("encounter_id"); 
       t.nullable.int("tracing_type"); 
       t.nullable.int("reason_for_missed_appointment"); 
       t.nullable.string("non_coded_missed_appointment_reason"); 
       t.nullable.int("tracing_outcome"); 
       t.nullable.int("attempt_number"); 
       t.nullable.int("is_final_trace"); 
       t.nullable.int("true_status"); 
       t.nullable.int("cause_of_death"); 
       t.nullable.string("comments"); 
       t.nullable.string("booking_date"); 
       t.nullable.int("date_created"); 
       t.nullable.int("date_last_modified"); 

    },
});



export const CccDefaulterTracingMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postCccDefaulterTracing", {
            type: "CccDefaulterTracing",
             args: {
                uuid: nullable(stringArg()),
                provider: nullable(intArg()),
                patient_id : nullable(intArg()),
                visit_id : nullable(intArg()),
                mfl_code: nullable(intArg()),
                visit_date : nullable(stringArg()),
                location_id: nullable(intArg()),
                encounter_id: nullable(intArg()),
                tracing_type : nullable(intArg()),
                reason_for_missed_appointment : nullable(intArg()),
                non_coded_missed_appointment_reason : nullable(stringArg()),
                tracing_outcome : nullable(intArg()),
                attempt_number : nullable(intArg()),
                is_final_trace : nullable(intArg()),
                true_status : nullable(intArg()),
                cause_of_death : nullable(intArg()),
                comments: nullable(stringArg()),
                booking_date: nullable(stringArg()),
                date_created: nullable(stringArg()),
                date_last_modified: nullable(stringArg()),


            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.cccDefaulterTracing.create({  
                    
                    data:args
                });
                return post;
            },
        });
    },
});
