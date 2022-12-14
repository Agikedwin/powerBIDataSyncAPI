import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const ClientEnrollment = objectType({
    name: "ClientEnrollment", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("client_id"); 
       t.nullable.int("fml_code");
       t.nullable.int("encounter_provider"); 
       t.nullable.int("visit_id"); 
       t.nullable.string("visit_date"); 
       t.nullable.int("location_id"); 
       t.nullable.int("mfl_code");
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



export const ClientEnrollmentMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postClientEnrollment", {
            type: "ClientEnrollment",
             args: {
                
                uuid : nullable(stringArg()),
                client_id : nullable(intArg()),
                visit_id : nullable(intArg()),
                visit_date: nullable(stringArg()),
                mfl_code: nullable(intArg()),
                encounter_id : nullable(intArg()),
                encounter_provider: nullable(intArg()),
                date_created : nullable(stringArg()),
                date_last_modified: nullable(stringArg()),                
                contacted_for_prevention : nullable(stringArg()),
                has_regular_free_sex_partner: nullable(stringArg()),
                year_started_sex_work: nullable(stringArg()),
                year_started_sex_with_men : nullable(stringArg()),
                year_started_drugs : nullable(stringArg()),
                has_expereienced_sexual_violence : nullable(stringArg()),
                has_expereienced_physical_violence : nullable(stringArg()),
                ever_tested_for_hiv : nullable(stringArg()),
                test_type : nullable(stringArg()),
                share_test_results: nullable(stringArg()),
                willing_to_test: nullable(stringArg()),
                test_decline_reason: nullable(stringArg()),
                receiving_hiv_care : nullable(stringArg()),
                care_facility_name : nullable(stringArg()),
                ccc_number: nullable(stringArg()),
                vl_test_done : nullable(stringArg()),
                vl_results_date: nullable(stringArg()),
                contact_for_appointment: nullable(stringArg()),
                contact_method : nullable(stringArg()),
                buddy_name  : nullable(stringArg()),
                buddy_phone_number : nullable(stringArg()),
                voided : nullable(intArg()),

            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.clientEnrollment.create({  
                    
                    data:{

                        buddy_name: args.buddy_name,
                        buddy_phone_number: args.buddy_phone_number,
                        care_facility_name: args.care_facility_name,
                        ccc_number: args.ccc_number, 
                        client_id: args.client_id, 
                        contact_for_appointment: args.contact_for_appointment, 
                        contact_method: args.contact_method,
                        contacted_for_prevention: args.contacted_for_prevention,
                        date_created: args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,  
                        date_last_modified: args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,  
                        encounter_id: args.encounter_id, 
                        encounter_provider: args.encounter_provider,
                        ever_tested_for_hiv: args.ever_tested_for_hiv, 
                        has_expereienced_physical_violence: args.has_expereienced_physical_violence, 
                        has_expereienced_sexual_violence: args.has_expereienced_sexual_violence,
                        has_regular_free_sex_partner: args.has_regular_free_sex_partner, 
                        mfl_code: 12905, 
                        receiving_hiv_care: args.receiving_hiv_care, 
                        share_test_results: args.share_test_results, 
                        test_decline_reason: args.test_decline_reason, 
                        test_type: args.test_type, uuid: args.uuid,
                        visit_date: args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,  
                        visit_id: args.visit_id, 
                        vl_results_date: args.vl_results_date != null ? (new Date(args.vl_results_date * 1).toISOString()) : null,  
                        vl_test_done: args.vl_test_done, 
                        voided: args.voided,
                        willing_to_test: args.willing_to_test,
                        year_started_drugs: args.year_started_drugs,
                        year_started_sex_with_men: args.year_started_sex_with_men, 
                        year_started_sex_work: args.year_started_sex_work

                    }
                });
                return post;
            },
        });
    },
});
