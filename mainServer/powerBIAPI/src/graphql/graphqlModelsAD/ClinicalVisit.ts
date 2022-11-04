import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const ClinicalVisit = objectType({
    name: "ClinicalVisit", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
        t.nullable.int("client_id");
        t.nullable.int("visit_id");
        t.nullable.string("visit_date");
        t.nullable.int("location_id");
        t.nullable.int("encounter_id");
        t.nullable.int("encounter_provider");
        t.nullable.string("date_created");
        t.nullable.string("date_last_modified");
        t.nullable.string("implementing_partner");
        t.nullable.string("type_of_visit");
        t.nullable.string("visit_reason");
        t.nullable.string("service_delivery_model");
        t.nullable.string("sti_screened");
        t.nullable.string("sti_results");
        t.nullable.string("sti_treated");
        t.nullable.string("sti_referred");
        t.nullable.string("sti_referred_text");
        t.nullable.string("tb_screened");
        t.nullable.string("tb_results");
        t.nullable.string("tb_treated");
        t.nullable.string("tb_referred");
        t.nullable.string("tb_referred_text");
        t.nullable.string("hepatitisB_screened");
        t.nullable.string("hepatitisB_results");
        t.nullable.string("hepatitisB_treated");
        t.nullable.string("hepatitisB_referred");
        t.nullable.string("hepatitisB_text");
        t.nullable.string("hepatitisC_screened");
        t.nullable.string("hepatitisC_results");
        t.nullable.string("hepatitisC_treated");
        t.nullable.string("hepatitisC_referred");
        t.nullable.string("hepatitisC_text");
        t.nullable.string("overdose_screened");
        t.nullable.string("overdose_results");
        t.nullable.string("overdose_treated");
        t.nullable.string("received_naloxone");
        t.nullable.string("overdose_referred");
        t.nullable.string("overdose_text");
        t.nullable.string("abscess_screened");
        t.nullable.string("abscess_results");
        t.nullable.string("abscess_treated");
        t.nullable.string("abscess_referred");
        t.nullable.string("abscess_text");
        t.nullable.string("alcohol_screened");
        t.nullable.string("alcohol_results");
        t.nullable.string("alcohol_treated");
        t.nullable.string("alcohol_referred");
        t.nullable.string("alcohol_text");
        t.nullable.string("cerv_cancer_screened");
        t.nullable.string("cerv_cancer_results");
        t.nullable.string("cerv_cancer_treated");
        t.nullable.string("cerv_cancer_referred");
        t.nullable.string("cerv_cancer_text");
        t.nullable.string("prep_screened");
        t.nullable.string("prep_results");
        t.nullable.string("prep_treated");
        t.nullable.string("prep_referred");
        t.nullable.string("prep_text");
        t.nullable.string("violence_screened");
        t.nullable.string("violence_results");
        t.nullable.string("violence_treated");
        t.nullable.string("violence_referred");
        t.nullable.string("violence_text");
        t.nullable.string("risk_red_counselling_screened");
        t.nullable.string("risk_red_counselling_eligibility");
        t.nullable.string("risk_red_counselling_support");
        t.nullable.string("risk_red_counselling_ebi_provided");
        t.nullable.string("risk_red_counselling_text");
        t.nullable.string("fp_screened");
        t.nullable.string("fp_eligibility");
        t.nullable.string("fp_treated");
        t.nullable.string("fp_referred");
        t.nullable.string("fp_text");
        t.nullable.string("mental_health_screened");
        t.nullable.string("mental_health_results");
        t.nullable.string("mental_health_support");
        t.nullable.string("mental_health_referred");
        t.nullable.string("mental_health_text");
        t.nullable.string("hiv_self_rep_status");
        t.nullable.string("last_hiv_test_setting");
        t.nullable.string("counselled_for_hiv");
        t.nullable.string("hiv_tested");
        t.nullable.string("test_frequency");
        t.nullable.string("received_results");
        t.nullable.string("test_results");
        t.nullable.string("linked_to_art");
        t.nullable.string("facility_linked_to");
        t.nullable.string("self_test_education");
        t.nullable.string("self_test_kits_given");
        t.nullable.string("self_use_kits");
        t.nullable.string("distribution_kits");
        t.nullable.string("self_tested");
        t.nullable.string("self_test_date");
        t.nullable.string("self_test_frequency");
        t.nullable.string("self_test_results");
        t.nullable.string("test_confirmatory_results");
        t.nullable.string("confirmatory_facility");
        t.nullable.string("offsite_confirmatory_facility");
        t.nullable.string("self_test_linked_art");
        t.nullable.string("self_test_link_facility");
        t.nullable.string("hiv_care_facility");
        t.nullable.string("other_hiv_care_facility");
        t.nullable.string("initiated_art_this_month");
        t.nullable.string("active_art");
        t.nullable.string("eligible_vl");
        t.nullable.string("vl_test_done");
        t.nullable.string("vl_results");
        t.nullable.string("received_vl_results");
        t.nullable.string("condom_use_education");
        t.nullable.string("post_abortal_care");
        t.nullable.string("linked_to_psychosocial");
        t.nullable.string("male_condoms_no");
        t.nullable.string("female_condoms_no");
        t.nullable.string("lubes_no");
        t.nullable.string("syringes_needles_no");
        t.nullable.string("pep_eligible");
        t.nullable.string("exposure_type");
        t.nullable.string("other_exposure_type");
        t.nullable.string("clinical_notes");
        t.nullable.string("appointment_date");
        t.nullable.int("voided");

    },
});

let resData:any ;


export const ClinicalVisitQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getClinicalVisit", {
            type: "ClinicalVisit",
            resolve(parent, args, context) {  
                
               context.prisma.clinicalVisit.findMany().then(data =>{
                    resData = data;
                    console.log(data)
                    
                    

                });  
               
                return resData;
            },
        });
    },
});