import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const CccDefaulterTracing = objectType({
    name: "CccDefaulterTracing", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("patient_id"); 
       t.nullable.int("provider"); 
       t.nullable.int("visit_id"); 
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

let resData:any ;


export const CccDefaulterTracingQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getCccDefaulterTracing", {
            type: "CccDefaulterTracing",
            resolve(parent, args, context) {  
                
               context.prisma.cccDefaulterTracing.findMany().then(data =>{
                    resData = data;
                    console.log(data)
                    
                    

                });  
               
                return resData;
            },
        });
    },
});