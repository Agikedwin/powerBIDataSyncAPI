import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const ClientEnrollment = objectType({
    name: "ClientEnrollment", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("client_id"); 
       t.nullable.int("encounter_provider"); 
       t.nullable.int("visit_id"); 
       t.nullable.string("visit_date"); 
       t.nullable.int("location_id"); 
       t.nullable.int("fml_code");
       t.nullable.int("encounter_provider"); 
       t.nullable.int("encounter_id"); 
       t.nullable.string("contacted_for_prevention"); 
       t.nullable.string("has_regular_free_sex_partner"); 
       t.nullable.string("year_started_sex_with_men"); 
       t.nullable.string("year_started_drugs"); 
       t.nullable.string("has_expereienced_sexual_violence"); 
       t.nullable.string("has_expereienced_physical_violence"); 
       t.nullable.string("ever_tested_for_hiv"); 
       t.nullable.string("test_type"); 
       t.nullable.string("share_test_results"); 
       t.nullable.string("willing_to_test"); 
       t.nullable.string("test_decline_reason"); 
       t.nullable.string("receiving_hiv_care"); 
       t.nullable.string("care_facility_name"); 
       t.nullable.string("ccc_number"); 
       t.nullable.string("vl_test_done"); 
       t.nullable.string("vl_results_date"); 
       t.nullable.string("contact_for_appointment"); 
       t.nullable.string("contact_method"); 
       t.nullable.string("buddy_name"); 
       t.nullable.string("contact_method"); 
       t.nullable.string("contact_method"); 
       t.nullable.string("buddy_phone_number"); 
       t.nullable.string("date_last_modified"); 
       t.nullable.int("voided"); 

    },
});

let resData:any ;


export const ClientEnrollmentQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getClientEnrollment", {
            type: "ClientEnrollment",
            resolve(parent, args, context) {  
                
               context.prisma.clientEnrollment.findMany().then(data =>{
                    resData = data;
                    console.log(data)
                    
                    

                });  
               
                return resData;
            },
        });
    },
});