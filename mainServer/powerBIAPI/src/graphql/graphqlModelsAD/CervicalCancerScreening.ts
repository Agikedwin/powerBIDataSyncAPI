import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const CervicalCancerScreening = objectType({
    name: "CervicalCancerScreening", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("patient_id"); 
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

let resData:any ;


export const CervicalCancerScreeningQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getCervicalCancerScreening", {
            type: "CervicalCancerScreening",
            resolve(parent, args, context) {  
                
               context.prisma.cervicalCancerScreening.findMany().then(data =>{
                    resData = data;
                    console.log(data)
                    
                    

                });  
               
                return resData;
            },
        });
    },
});