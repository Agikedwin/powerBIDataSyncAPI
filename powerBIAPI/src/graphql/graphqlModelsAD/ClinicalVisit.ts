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
                    
                    data: {

                        abscess_referred:args.abscess_referred,
                        abscess_results:args.abscess_results,
                        abscess_screened:args.abscess_screened,
                        abscess_text:args.abscess_text,
                        abscess_treated:args.abscess_treated,
                        active_art:args.active_art,
                        alcohol_referred:args.alcohol_referred,
                        alcohol_results:args.alcohol_results,
                        alcohol_screened:args.alcohol_screened,
                        alcohol_text:args.alcohol_text,
                        alcohol_treated:args.alcohol_treated,
                        appointment_date:args.appointment_date != null ? (new Date(args.appointment_date * 1).toISOString()) : null,
                        cerv_cancer_referred:args.cerv_cancer_referred,
                        cerv_cancer_results:args.cerv_cancer_results,
                        cerv_cancer_screened:args.cerv_cancer_screened,
                        cerv_cancer_text:args.cerv_cancer_text,
                        cerv_cancer_treated:args.cerv_cancer_treated,
                        client_id:args.client_id,
                        clinical_notes:args.clinical_notes,
                        condom_use_education:args.condom_use_education,
                        confirmatory_facility:args.confirmatory_facility,
                        counselled_for_hiv:args.counselled_for_hiv,
                        date_created:args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,
                        date_last_modified:args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,
                        distribution_kits:args.distribution_kits,
                        eligible_vl:args.eligible_vl,
                        encounter_id:args.encounter_id,
                        encounter_provider:args.encounter_provider,
                        exposure_type:args.exposure_type,
                        facility_linked_to:args.facility_linked_to,
                        female_condoms_no:args.female_condoms_no,
                        fp_eligibility:args.fp_eligibility,
                        fp_referred:args.fp_referred,
                        fp_screened:args.fp_screened,
                        fp_text:args.fp_text,
                        fp_treated:args.fp_treated,
                        hepatitisB_referred:args.hepatitisB_referred,
                        hepatitisB_results:args.hepatitisB_results,
                        hepatitisB_screened:args.hepatitisB_screened,
                        hepatitisB_text:args.hepatitisB_text,
                        hepatitisB_treated:args.hepatitisB_treated,
                        hepatitisC_referred:args.hepatitisC_referred,
                        hepatitisC_results:args.hepatitisC_results,
                        hepatitisC_screened:args.hepatitisC_screened,
                        hepatitisC_text:args.hepatitisC_text,
                        hepatitisC_treated:args.hepatitisC_treated,
                        hiv_care_facility:args.hiv_care_facility,
                        hiv_self_rep_status:args.hiv_self_rep_status,
                        hiv_tested:args.hiv_tested,
                        implementing_partner:args.implementing_partner,
                        initiated_art_this_month:args.initiated_art_this_month,
                        last_hiv_test_setting:args.last_hiv_test_setting,
                        linked_to_art:args.linked_to_art,
                        linked_to_psychosocial:args.linked_to_psychosocial,
                        location_id:args.location_id,
                        lubes_no:args.lubes_no,
                        male_condoms_no:args.male_condoms_no,
                        mental_health_referred:args.mental_health_referred,
                        mental_health_results:args.mental_health_results,
                        mental_health_screened:args.mental_health_screened,
                        mental_health_support:args.mental_health_support,
                        mental_health_text:args.mental_health_text,
                        mfl_code: 12904,
                        offsite_confirmatory_facility:args.offsite_confirmatory_facility,
                        other_exposure_type:args.other_exposure_type,
                        other_hiv_care_facility:args.other_hiv_care_facility,
                        overdose_referred:args.overdose_referred,
                        overdose_results:args.overdose_results,
                        overdose_screened:args.overdose_screened,
                        overdose_text:args.overdose_text,
                        overdose_treated:args.overdose_treated,
                        pep_eligible:args.pep_eligible,
                        post_abortal_care:args.post_abortal_care,
                        prep_referred:args.prep_referred,
                        prep_results:args.prep_results,
                        prep_screened:args.prep_screened,
                        prep_text:args.prep_text,
                        prep_treated:args.prep_treated,
                        received_naloxone:args.received_naloxone,
                        received_results:args.received_results,
                        received_vl_results:args.received_vl_results,
                        risk_red_counselling_ebi_provided:args.risk_red_counselling_ebi_provided,
                        risk_red_counselling_eligibility:args.risk_red_counselling_eligibility,
                        risk_red_counselling_screened:args.risk_red_counselling_screened,
                        risk_red_counselling_support:args.risk_red_counselling_support,
                        risk_red_counselling_text:args.risk_red_counselling_text,
                        self_test_date:args.self_test_date != null ? (new Date(args.self_test_date * 1).toISOString()) : null,
                        self_test_education:args.self_test_education,
                        self_test_frequency:args.self_test_frequency,
                        self_test_kits_given:args.self_test_kits_given,
                        self_test_link_facility:args.self_test_link_facility,
                        self_test_linked_art:args.self_test_linked_art,
                        self_test_results:args.self_test_results,
                        self_tested:args.self_tested,
                        self_use_kits:args.self_use_kits,
                        service_delivery_model:args.service_delivery_model,
                        sti_referred:args.sti_referred,
                        sti_referred_text:args.sti_referred_text,
                        sti_results:args.sti_results,
                        sti_screened:args.sti_screened,
                        sti_treated:args.sti_treated,
                        syringes_needles_no:args.syringes_needles_no,
                        tb_referred:args.tb_referred,
                        tb_referred_text:args.tb_referred_text,
                        tb_results:args.tb_results,
                        tb_screened:args.tb_screened,
                        tb_treated:args.tb_treated,
                        test_confirmatory_results:args.test_confirmatory_results,
                        test_frequency:args.test_frequency,
                        test_results:args.test_results,
                        type_of_visit:args.type_of_visit,
                        uuid:args.uuid,
                        violence_referred:args.violence_referred,
                        violence_results:args.violence_results,
                        violence_screened:args.violence_screened,
                        violence_text:args.violence_text,
                        violence_treated:args.violence_treated,
                        visit_date:args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,
                        visit_id:args.visit_id,
                        visit_reason:args.visit_reason,
                        vl_results:args.vl_results,
                        vl_test_done:args.vl_test_done,
                        voided:args.voided
                    }
                });
                return post;
            },
        });
    },
});
