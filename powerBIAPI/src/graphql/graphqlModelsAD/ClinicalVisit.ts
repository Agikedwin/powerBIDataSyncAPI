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
        t.nullable.int("mfl_code");
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



export const ClinicalVisitMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postClinicalVisit", {
            type: "ClinicalVisit",
             args: {
                uuid : nullable(stringArg()),
                client_id : nullable(intArg()),
                visit_id : nullable(intArg()),
                visit_date : nullable(stringArg()),
                mfl_code: nullable(intArg()),
                location_id : nullable(intArg()),
                encounter_id : nullable(intArg()),
                encounter_provider : nullable(intArg()),
                date_created : nullable(stringArg()),
                date_last_modified : nullable(stringArg()),
                implementing_partner : nullable(stringArg()),
                type_of_visit : nullable(stringArg()),
                visit_reason : nullable(stringArg()),
                service_delivery_model : nullable(stringArg()),
                sti_screened : nullable(stringArg()),
                sti_results : nullable(stringArg()),
                sti_treated : nullable(stringArg()),
                sti_referred : nullable(stringArg()),
                sti_referred_text : nullable(stringArg()),
                tb_screened : nullable(stringArg()),
                tb_results : nullable(stringArg()),
                tb_treated : nullable(stringArg()),
                tb_referred : nullable(stringArg()),
                tb_referred_text : nullable(stringArg()),
                hepatitisB_screened : nullable(stringArg()),
                hepatitisB_results : nullable(stringArg()),
                hepatitisB_treated : nullable(stringArg()),
                hepatitisB_referred : nullable(stringArg()),
                hepatitisB_text : nullable(stringArg()),
                hepatitisC_screened : nullable(stringArg()),
                hepatitisC_results : nullable(stringArg()),
                hepatitisC_treated : nullable(stringArg()),
                hepatitisC_referred : nullable(stringArg()),
                hepatitisC_text : nullable(stringArg()),
                overdose_screened : nullable(stringArg()),
                overdose_results : nullable(stringArg()),
                overdose_treated : nullable(stringArg()),
                received_naloxone : nullable(stringArg()),
                overdose_referred : nullable(stringArg()),
                overdose_text : nullable(stringArg()),
                abscess_screened : nullable(stringArg()),
                abscess_results : nullable(stringArg()),
                abscess_treated : nullable(stringArg()),
                abscess_referred : nullable(stringArg()),
                abscess_text : nullable(stringArg()),
                alcohol_screened : nullable(stringArg()),
                alcohol_results : nullable(stringArg()),
                alcohol_treated : nullable(stringArg()),
                alcohol_referred : nullable(stringArg()),
                alcohol_text : nullable(stringArg()),
                cerv_cancer_screened : nullable(stringArg()),
                cerv_cancer_results : nullable(stringArg()),
                cerv_cancer_treated : nullable(stringArg()),
                cerv_cancer_referred : nullable(stringArg()),
                cerv_cancer_text : nullable(stringArg()),
                prep_screened : nullable(stringArg()),
                prep_results : nullable(stringArg()),
                prep_treated : nullable(stringArg()),
                prep_referred : nullable(stringArg()),
                prep_text : nullable(stringArg()),
                violence_screened : nullable(stringArg()),
                violence_results : nullable(stringArg()),
                violence_treated : nullable(stringArg()),
                violence_referred : nullable(stringArg()),
                violence_text : nullable(stringArg()),
                risk_red_counselling_screened : nullable(stringArg()),
                risk_red_counselling_eligibility : nullable(stringArg()),
                risk_red_counselling_support : nullable(stringArg()),
                risk_red_counselling_ebi_provided : nullable(stringArg()),
                risk_red_counselling_text : nullable(stringArg()),
                fp_screened : nullable(stringArg()),
                fp_eligibility : nullable(stringArg()),
                fp_treated : nullable(stringArg()),
                fp_referred : nullable(stringArg()),
                fp_text : nullable(stringArg()),
                mental_health_screened : nullable(stringArg()),
                mental_health_results : nullable(stringArg()),
                mental_health_support : nullable(stringArg()),
                mental_health_referred : nullable(stringArg()),
                mental_health_text : nullable(stringArg()),
                hiv_self_rep_status : nullable(stringArg()),
                last_hiv_test_setting : nullable(stringArg()),
                counselled_for_hiv : nullable(stringArg()),
                hiv_tested : nullable(stringArg()),
                test_frequency : nullable(stringArg()),
                received_results : nullable(stringArg()),
                test_results : nullable(stringArg()),
                linked_to_art : nullable(stringArg()),
                facility_linked_to : nullable(stringArg()),
                self_test_education : nullable(stringArg()),
                self_test_kits_given : nullable(stringArg()),
                self_use_kits : nullable(stringArg()),
                distribution_kits : nullable(stringArg()),
                self_tested : nullable(stringArg()),
                self_test_date : nullable(stringArg()),
                self_test_frequency : nullable(stringArg()),
                self_test_results : nullable(stringArg()),
                test_confirmatory_results : nullable(stringArg()),
                confirmatory_facility : nullable(stringArg()),
                offsite_confirmatory_facility : nullable(stringArg()),
                self_test_linked_art : nullable(stringArg()),
                self_test_link_facility : nullable(stringArg()),
                hiv_care_facility : nullable(stringArg()),
                other_hiv_care_facility : nullable(stringArg()),
                initiated_art_this_month : nullable(stringArg()),
                active_art : nullable(stringArg()),
                eligible_vl : nullable(stringArg()),
                vl_test_done : nullable(stringArg()),
                vl_results : nullable(stringArg()),
                received_vl_results : nullable(stringArg()),
                condom_use_education : nullable(stringArg()),
                post_abortal_care : nullable(stringArg()),
                linked_to_psychosocial : nullable(stringArg()),
                male_condoms_no : nullable(stringArg()),
                female_condoms_no : nullable(stringArg()),
                lubes_no : nullable(stringArg()),
                syringes_needles_no : nullable(stringArg()),
                pep_eligible : nullable(stringArg()),
                exposure_type : nullable(stringArg()),
                other_exposure_type : nullable(stringArg()),
                clinical_notes : nullable(stringArg()),
                appointment_date : nullable(stringArg()),
                voided : nullable(intArg()),
            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.clinicalVisit.create({  
                    
                    data:args
                });
                return post;
            },
        });
    },
});
