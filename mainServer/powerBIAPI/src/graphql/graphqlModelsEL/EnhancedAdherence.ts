import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const EnhancedAdherence = objectType({
    name: "EnhancedAdherence", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.int("patient_id");
       t.nullable.int("visit_id");
       t.nullable.string("visit_date"); 
       t.nullable.int("encounter_id");
       t.nullable.int("provider");
       t.nullable.int("session_number");
       t.nullable.string("first_session_date");
       t.nullable.int("pill_count");
       t.nullable.string("arv_adherence");
       t.nullable.string("has_vl_results");
       t.nullable.string("vl_results_suppressed");
       t.nullable.string("vl_results_feeling");
       t.nullable.string("cause_of_high_vl");
       t.nullable.string("way_forward");
       t.nullable.string("patient_hiv_knowledge");
       t.nullable.string("patient_drugs_uptake");
       t.nullable.string("patient_drugs_reminder_tools");
       t.nullable.string("patient_drugs_uptake_during_travels");
       t.nullable.string("patient_drugs_side_effects_response");
       t.nullable.string("patient_drugs_uptake_most_difficult_times");
       t.nullable.string("patient_drugs_daily_uptake_feeling");
       t.nullable.string("patient_ambitions");
       t.nullable.string("patient_has_people_to_talk");
       t.nullable.string("patient_enlisting_social_support");
       t.nullable.string("patient_income_sources");
       t.nullable.string("patient_challenges_reaching_clinic");
       t.nullable.string("patient_worried_of_accidental_disclosure");
       t.nullable.string("patient_treated_differently");
       t.nullable.string("stigma_hinders_adherence");
       t.nullable.string("patient_tried_faith_healing");
       t.nullable.string("patient_adherence_improved");
       t.nullable.string("patient_doses_missed");
       t.nullable.string("review_and_barriers_to_adherence");
       t.nullable.string("other_referrals");
       t.nullable.string("appoIntments_honoured");
       t.nullable.string("referral_experience");
       t.nullable.string("home_visit_benefit");
       t.nullable.string("adherence_plan");
       t.nullable.string("next_appoIntment_date"); 
       t.nullable.string("date_created");
       t.nullable.string("date_last_modified");
       
       

    },
});

let resData:any ;


export const EnhancedAdherenceQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getEnhancedAdherence", {
            type: "EnhancedAdherence",
            resolve(parent, args, context) {  
                console.log("Fetching Contact ...");
             return  context.prisma.enhancedAdherence.findMany();
            },
        });
    },
});