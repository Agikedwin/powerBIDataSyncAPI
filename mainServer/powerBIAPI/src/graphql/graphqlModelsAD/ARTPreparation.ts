import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const ARTPreparation = objectType({
    name: "ARTPreparation", // <- Name of your type
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
       t.nullable.string("understands_hiv_art_benefits"); 
       t.nullable.string("screened_negative_substance_abuse"); 
       t.nullable.string("screened_negative_psychiatric_illness"); 
       t.nullable.string("HIV_status_disclosure"); 
       t.nullable.string("trained_drug_admin"); 
       t.nullable.string("informed_drug_side_effects"); 
       t.nullable.string("adherance_barriers_identified"); 
       t.nullable.string("caregiver_location_contacts_known"); 
       t.nullable.string("ready_to_start_art"); 
       t.nullable.string("identified_drug_time"); 
       t.nullable.string("treatment_supporter_engaged"); 
       t.nullable.string("support_grp_meeting_awareness"); 
       t.nullable.string("enrolled_in_reminder_system"); 
       t.nullable.string("other_support_systems"); 
       t.nullable.int("voided"); 
       t.nullable.string("date_created"); 
       t.nullable.string("date_last_modified"); 

    },
});

let resData:any ;


export const ARTPreparationCareQuery = extendType({
    
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getARTPreparation", {
            type: "ARTPreparation",
            resolve(parent, args, context) {  
                console.log("Fetching getARTPreparation...");  
              return context.prisma.aRTPreparation.findMany();
            },
        });
    },
});