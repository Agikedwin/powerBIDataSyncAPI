
export const postAdverseEvents = `mutation 
postAdverseEvents($action_taken: Int, $adverse_event: Int, $cause: Int, $date_created: String, $date_last_modified: String,
   $encounter_id: Int, $form: String, $location_id: Int, $mfl_code: Int, $obs_id: Int, $patient_id: Int, $provider: Int, 
   $severity: Int, $start_date: String, $uuid: String, $visit_date: String, $visit_id: Int, $voided: Int){

    postAdverseEvents(action_taken: $action_taken, adverse_event: $adverse_event, cause: $cause, date_created: $date_created, date_last_modified: $date_last_modified,
      encounter_id: $encounter_id, form: $form, location_id: $location_id, mfl_code: $mfl_code, obs_id: $obs_id, patient_id: $patient_id, provider: $provider, 
      severity: $severity, start_date: $start_date, uuid: $uuid, visit_date: $visit_date, visit_id: $visit_id, voided: $voided){
        location_id
      }
   }
`

export  const postCurrentInCare = `mutation postCurrentInCare($mfl_code: Int, $date_discontinued: String, $disc_patient: String, $dob: String,
    $effective_disc_date: String, $enroll_date: String,  $gender: String, $latest_enrolment_date:
      String, $latest_tca: String, $latest_vis_date: String, $patient_id: Int, $stability: String, $started_on_drugs: Int)
      {
        postCurrentInCare(
          mfl_code:$mfl_code,date_discontinued: $date_discontinued, disc_patient: $disc_patient, dob: $dob,
          effective_disc_date: $effective_disc_date, enroll_date: $enroll_date,  gender: $gender, latest_enrolment_date:
           $latest_enrolment_date, latest_tca: $latest_tca, latest_vis_date: $latest_vis_date, patient_id: $patient_id,
            stability: $stability, started_on_drugs: $started_on_drugs){
  
              patient_id
              dob
            }
      }
  `
  export  const postAlcoholDrugAbuseScreening = `
  mutation postAlcoholDrugAbuseScreening($alcohol_drinking_frequency: String, $date_created: String, $date_last_modified: String, $drugs_use_frequency: String, 
    $encounter_id: Int, $location_id: Int, $mfl_code: Int, $patient_id: Int, $provider: Int, $smoking_frequency: String, $uuid: String, 
    $visit_date: String, $visit_id: Int, $voided: Int){

        postAlcoholDrugAbuseScreening(alcohol_drinking_frequency: $alcohol_drinking_frequency, date_created: $date_created, date_last_modified: $date_last_modified,
             drugs_use_frequency: $drugs_use_frequency, encounter_id:  $encounter_id, location_id: $location_id, mfl_code: $mfl_code, patient_id: $patient_id, provider: $provider, 
             smoking_frequency:  $smoking_frequency, uuid:  $uuid, visit_date:  $visit_date, visit_id: $visit_id, voided: $voided){

                uuid
             }

    }
  
  `
export  const postARTPreparation = ` mutation
postARTPreparation($HIV_status_disclosure: String, $adherance_barriers_identified: String, $caregiver_committed: String,
  $caregiver_location_contacts_known: String, $date_created: String, $date_last_modified: String, $encounter_id: Int, 
  $enrolled_in_reminder_system: String, $identified_drug_time: String, $informed_drug_side_effects: String, $location_id: Int, 
  $mfl_code: Int, $other_support_systems: String, $patient_id: Int, $provider: Int, $ready_to_start_art: String, 
  $screened_negative_psychiatric_illness: String, $screened_negative_substance_abuse: String, 
  $support_grp_meeting_awareness: String, $trained_drug_admin: String, $treatment_supporter_engaged: String, 
  $understands_hiv_art_benefits: String, $uuid: String, $visit_date: String, $visit_id: Int){

    postARTPreparation(HIV_status_disclosure: $HIV_status_disclosure, adherance_barriers_identified: $adherance_barriers_identified, 
      caregiver_committed: $caregiver_committed, caregiver_location_contacts_known: $caregiver_location_contacts_known, date_created: $date_created,
       date_last_modified: $date_last_modified, encounter_id: $encounter_id, enrolled_in_reminder_system: $enrolled_in_reminder_system, 
       identified_drug_time: $identified_drug_time, informed_drug_side_effects: $informed_drug_side_effects, location_id: $location_id,
        mfl_code: $mfl_code, other_support_systems: $other_support_systems, patient_id: $patient_id, provider: $provider, ready_to_start_art: $ready_to_start_art, 
        screened_negative_psychiatric_illness: $screened_negative_psychiatric_illness,
         screened_negative_substance_abuse: $screened_negative_substance_abuse, support_grp_meeting_awareness: $support_grp_meeting_awareness, 
         trained_drug_admin: $trained_drug_admin, treatment_supporter_engaged: $treatment_supporter_engaged, 
         understands_hiv_art_benefits: $understands_hiv_art_benefits, uuid: $uuid, visit_date: $visit_date, visit_id: $visit_id){
          patient_id
         }
  }
`
export const postAllergyChronicIllness = `mutation 
postAllergyChronicIllness($allergy_causative_agent: Int, $allergy_onset_date: String, $allergy_reaction: Int, $allergy_severity: Int,
   $chronic_illness: Int, $chronic_illness_onset_date: String, $date_created: String, $date_last_modified: String, $encounter_id: Int, 
   $location_id: Int, $mfl_code: Int, $obs_id: Int, $patient_id: Int, $provider: Int, $uuid: String, $visit_date: String, $visit_id: Int, 
   $voided: Int){

    postAllergyChronicIllness(allergy_causative_agent: $allergy_causative_agent, allergy_onset_date: $allergy_onset_date,
       allergy_reaction: $allergy_reaction, allergy_severity: $allergy_severity, chronic_illness: $chronic_illness, 
       chronic_illness_onset_date: $chronic_illness_onset_date, date_created: $date_created, date_last_modified: $date_last_modified,
        encounter_id: $encounter_id, location_id: $location_id, mfl_code: $mfl_code, obs_id: $obs_id, patient_id: $patient_id,
         provider: $provider, uuid: $uuid, visit_date: $visit_date, visit_id: $visit_id, voided: $voided){

          encounter_id

   }
   }

`


export const postCccDefaulterTracing = `mutation 
postCccDefaulterTracing($attempt_number: Int, $booking_date: String, $cause_of_death: Int, $comments: String, $date_created: String, 
  $date_last_modified: String, $encounter_id: Int, $is_final_trace: Int, $location_id: Int, $mfl_code: Int, $non_coded_missed_appointment_reason: String,
   $patient_id: Int, $provider: Int, $reason_for_missed_appointment: Int, $tracing_outcome: Int, $tracing_type: Int, $true_status: Int,
    $uuid: String, $visit_date: String, $visit_id: Int){

      postCccDefaulterTracing(attempt_number: $attempt_number, booking_date: $booking_date, cause_of_death: $cause_of_death, 
        comments: $comments, date_created: $date_created, date_last_modified: $date_last_modified, encounter_id: $encounter_id, 
        is_final_trace: $is_final_trace, location_id:$location_id , mfl_code: $mfl_code,
         non_coded_missed_appointment_reason: $non_coded_missed_appointment_reason, patient_id: $patient_id, 
         provider: $provider, reason_for_missed_appointment: $reason_for_missed_appointment, tracing_outcome: $tracing_outcome,
          tracing_type: $tracing_type, true_status: $true_status, uuid: $uuid, visit_date: $visit_date, visit_id:  $visit_id){
            encounter_id
          }
    }

`

export const postCervicalCancerScreening = `mutation 
postCervicalCancerScreening($date_created: String, $date_last_modified: String, $encounter_id: Int, $encounter_provider: Int,
   $location_id: Int, $mfl_code: Int, $next_appointment_date: String, $patient_id: Int, $post_treatment_complication_cause: String,
    $post_treatment_complication_other: String, $referral_facility: String, $referral_reason: String, $referred_out: String, 
    $screening_method: String, $screening_result: String, $screening_type: String, $treatment_method: String, $treatment_method_other: String,
     $uuid: String, $visit_date: String, $visit_id: Int, $visit_type: String, $voided: Int){

      postCervicalCancerScreening(date_created: $date_created, date_last_modified: $date_last_modified, encounter_id: $encounter_id,
         encounter_provider: $encounter_provider, location_id: $location_id, mfl_code: $mfl_code, next_appointment_date: $next_appointment_date, 
         patient_id: $patient_id, post_treatment_complication_cause: $post_treatment_complication_cause, post_treatment_complication_other: $post_treatment_complication_other, 
         referral_facility: $referral_facility, referral_reason: $referral_reason, referred_out: $referred_out, screening_method: $screening_method,
          screening_result: $screening_result, screening_type: $screening_type, treatment_method: $treatment_method,
           treatment_method_other: $treatment_method_other, uuid: $uuid, visit_date: $visit_date, visit_id: $visit_id,
            visit_type: $visit_type, voided: $voided){
              encounter_id
            }
     }
`
export const postClientEnrollment = `mutation 
postClientEnrollment($buddy_name: String, $buddy_phone_number: String, $care_facility_name: String, $ccc_number: String,
   $client_id: Int, $contact_for_appointment: String, $contact_method: String, $contacted_for_prevention: String,
    $date_created: String, $date_last_modified: String, $encounter_id: Int, $encounter_provider: Int, $ever_tested_for_hiv: String, 
    $has_expereienced_physical_violence: String, $has_expereienced_sexual_violence: String, $has_regular_free_sex_partner: String,
     $mfl_code: Int, $receiving_hiv_care: String, $share_test_results: String, $test_decline_reason: String, $test_type: String,
     $uuid: String, $visit_date: String, $visit_id: Int, $vl_results_date: String, $vl_test_done: String, $voided: Int, 
  willing_to_test: String, year_started_drugs: String, $year_started_sex_with_men: String, $year_started_sex_work: String){

    postClientEnrollment(buddy_name: $buddy_name, buddy_phone_number: $buddy_phone_number, care_facility_name: $care_facility_name,
       ccc_number: $ccc_number, client_id: $client_id, contact_for_appo$ment: $contact_for_appo, contact_method: $contact_method,
        contacted_for_prevention: $contacted_for_prevention, date_created: $date_created, date_last_modified: $date_last_modified, 
        encounter_id: $encounter_id, encounter_provider: $encounter_provider, ever_tested_for_hiv: $ever_tested_for_hiv, 
        has_expereienced_physical_violence: $has_expereienced_physical_violence, has_expereienced_sexual_violence: $has_expereienced_sexual_violence,
         has_regular_free_sex_partner: $has_regular_free_sex_partner, mfl_code: $mfl_code, receiving_hiv_care: $receiving_hiv_care, 
         share_test_results: $share_test_results, test_decline_reason: $test_decline_reason, test_type: $test_type, uuid: $uuid,
          visit_date: $visit_date, visit_id: $visit_id, vl_results_date: $vl_results_date, vl_test_done: $vl_test_done, voided: $voided,
           willing_to_test: $willing_to_test, year_started_drugs: $year_started_drugs, year_started_sex_with_men: $year_started_sex_with_men, 
           year_started_sex_work: $year_started_sex_work)
  }
`
export const postClientTrace = `mutation 
postClientTrace($appointment_date: String, $client_id: Int, $contact_type: String, $date_created: String, $date_last_modified: String,
  $encounter_date: String, $facility_linked_to: String, $health_worker_handed_to: String,
   $mfl_code: Int, $remarks: String, $status: String, $unique_patient_no: String, $uuid: String, $voided: String){

    postClientTrace(appo$ment_date: $ment_date, client_id: $client_id, contact_type: $contact_type, date_created: $date_created,
       date_last_modified: $date_last_modified, encounter_date: $encounter_date, facility_linked_to: $facility_linked_to, 
       health_worker_handed_to: $health_worker_handed_to, mfl_code: $mfl_code, 
      remarks: $remarks, status: $status, unique_patient_no: $unique_patient_no, uuid: $uuid, voided: $voided)
   }
`

export const postClinicalVisit = `mutation 

postClinicalVisit($abscess_referred: String, $$abscess_results: String, $$abscess_screened: String, $$abscess_text: String, 
  $$abscess_treated: String, $$active_art: String, $$alcohol_referred: String, $alcohol_results: String, $alcohol_screened: String, 
  $alcohol_text: String, $alcohol_treated: String, $appointment_date: String, $cerv_cancer_referred: String, $cerv_cancer_results: String, 
  $cerv_cancer_screened: String, $cerv_cancer_text: String, $cerv_cancer_treated: String, $client_id: Int, $clinical_notes: String, 
  $condom_use_education: String, $confirmatory_facility: String,

  counselled_for_hiv: String, $date_created: String, $date_last_modified: String, $distribution_kits: String, $eligible_vl: String, 
  $encounter_id: Int, $encounter_provider: Int, $exposure_type: String, $facility_linked_to: String, $female_condoms_no: String, 
  $fp_eligibility: String, $fp_referred: String, $fp_screened: String, $fp_text: String, $fp_treated: String, $hepatitisB_referred: String, 
  $hepatitisB_results: String, $hepatitisB_screened: String, $hepatitisB_text: String, $hepatitisB_treated: String, $hepatitisC_referred: String,
   $hepatitisC_results: String, $hepatitisC_screened: String, $hepatitisC_text: String, $hepatitisC_treated: String, 
   $hiv_care_facility: String, $hiv_self_rep_status: String, $hiv_tested: String, $implementing_partner: String, $initiated_art_this_month: String,
  
   last_hiv_test_setting: String, $linked_to_art: String, $linked_to_psychosocial: String, $location_id: Int, $lubes_no: String,
    $male_condoms_no: String, $mental_health_referred: String, $mental_health_results: String, $mental_health_screened: String, 
    $mental_health_support: String, $mental_health_text: String, $mfl_code: Int, $offsite_confirmatory_facility: String,
     $other_exposure_type: String, $other_hiv_care_facility: String, $overdose_referred: String, $overdose_results: String, 
     $overdose_screened: String, $overdose_text: String, $overdose_treated: String, $pep_eligible: String,
   
    post_abortal_care: String, $prep_referred: String, $prep_results: String, $prep_screened: String, $prep_text: String, 
    $prep_treated: String, $received_naloxone: String, $received_results: String, $received_vl_results: String, 
    $risk_red_counselling_ebi_provided: String, $risk_red_counselling_eligibility: String, 
    $risk_red_counselling_screened: String, $risk_red_counselling_support: String, $risk_red_counselling_text: String, 
    $self_test_date: String, $self_test_education: String, $self_test_frequency: String, $self_test_kits_given: String,
     $self_test_link_facility: String, $self_test_linked_art: String, $self_test_results: String, $self_tested: String, 
     $self_use_kits: String, $service_delivery_model: String, $sti_referred: String, $sti_referred_text: String, $sti_results: String,
    
    
     sti_screened: String, $sti_treated: String, $syringes_needles_no: String, $tb_referred: String, 
     $tb_referred_text: String, $tb_results: String, $tb_screened: String, $tb_treated: String, 
     $test_confirmatory_results: String, $test_frequency: String, $test_results: String, $type_of_visit: String, $uuid: String,
      $violence_referred: String, $violence_results: String, $violence_screened: String, $violence_text: String, $violence_treated: String,
       $visit_date: String, $visit_id: Int, $visit_reason: String, $vl_results: String, $vl_test_done: String, $voided: Int){

        postClinicalVisit(abscess_referred: $abscess_referred, abscess_results: $abscess_results, abscess_screened: $abscess_screened, 
          abscess_text: $abscess_text, abscess_treated: $abscess_treated, active_art: $active_art, alcohol_referred: $alcohol_referred,
           alcohol_results: $alcohol_results, alcohol_screened: $alcohol_screened, alcohol_text: $alcohol_text, 
           alcohol_treated: $alcohol_treated, appointment_date: $appointment_date, cerv_cancer_referred: $cerv_cancer_referred,
            cerv_cancer_results: $cerv_cancer_results, cerv_cancer_screened: $cerv_cancer_screened, cerv_cancer_text: $cerv_cancer_text, 
            cerv_cancer_treated: $cerv_cancer_treated, client_id: $client_id, clinical_notes: $clinical_notes, 
            condom_use_education: $condom_use_education, confirmatory_facility: $confirmatory_facility,

          counselled_for_hiv: $counselled_for_hiv, date_created: $date_created, date_last_modified: $date_last_modified, 
          distribution_kits: $distribution_kits, eligible_vl: $eligible_vl, encounter_id: $encounter_id, 
          encounter_provider: $encounter_provider, exposure_type: $exposure_type, facility_linked_to: $facility_linked_to, 
          female_condoms_no: $female_condoms_no, fp_eligibility: $fp_eligibility, fp_referred: $fp_referred, fp_screened: $fp_screened,
           fp_text: $fp_text, fp_treated: $fp_treated, hepatitisB_referred: $hepatitisB_referred, hepatitisB_results: $hepatitisB_results,
            hepatitisB_screened: $hepatitisB_screened, hepatitisB_text: $hepatitisB_text, hepatitisB_treated: $hepatitisB_treated, 
            hepatitisC_referred: $hepatitisC_referred, hepatitisC_results: $hepatitisC_results, hepatitisC_screened: $hepatitisC_screened, 
            hepatitisC_text: $hepatitisC_text, hepatitisC_treated: $hepatitisC_treated, hiv_care_facility: $hiv_care_facility,
             hiv_self_rep_status: $hiv_self_rep_status, hiv_tested: $hiv_tested, implementing_partner: $implementing_partner, 
             initiated_art_this_month: $initiated_art_this_month,
          
           last_hiv_test_setting: $last_hiv_test_setting, linked_to_art: $linked_to_art, linked_to_psychosocial: $linked_to_psychosocial, 
           location_id: $location_id, lubes_no: $lubes_no, male_condoms_no: $male_condoms_no, mental_health_referred: $mental_health_referred,
            mental_health_results: $mental_health_results, mental_health_screened: $mental_health_screened, mental_health_support: $mental_health_support,
             mental_health_text: $mental_health_text, mfl_code: $mfl_code, offsite_confirmatory_facility: $offsite_confirmatory_facility, 
             other_exposure_type: $other_exposure_type, other_hiv_care_facility: $other_hiv_care_facility, overdose_referred: $overdose_referred, 
             overdose_results: $overdose_results, overdose_screened: $overdose_screened, overdose_text: $overdose_text, 
             overdose_treated: $overdose_treated, pep_eligible: $pep_eligible,
           
            post_abortal_care: $post_abortal_care, prep_referred: $prep_referred, prep_results: $prep_results, prep_screened: $prep_screened, 
            prep_text: $prep_text, prep_treated: $prep_treated, received_naloxone: $received_naloxone, received_results: $received_results, 
            received_vl_results: $received_vl_results, risk_red_counselling_ebi_provided: $risk_red_counselling_ebi_provided,
             risk_red_counselling_eligibility: $risk_red_counselling_eligibility, risk_red_counselling_screened: $risk_red_counselling_screened,
              risk_red_counselling_support: $risk_red_counselling_support, risk_red_counselling_text: $risk_red_counselling_text, self_test_date: $self_test_date, self_test_education: $self_test_education, self_test_frequency: $self_test_frequency, self_test_kits_given: $self_test_kits_given, self_test_link_facility: $self_test_link_facility, self_test_linked_art: $self_test_linked_art, self_test_results: $self_test_results, self_tested: $self_tested, self_use_kits: $self_use_kits, service_delivery_model: $service_delivery_model, sti_referred: $sti_referred, sti_referred_text: $sti_referred_text, sti_results: $sti_results,
            
            
             sti_screened: $sti_screened, sti_treated: $sti_treated, syringes_needles_no: $syringes_needles_no, tb_referred: $tb_referred, 
             tb_referred_text: $tb_referred_text, tb_results: $tb_results, tb_screened: $tb_screened, tb_treated: $tb_treated, 
             test_confirmatory_results: $test_confirmatory_results, test_frequency: $test_frequency, test_results: $test_results, 
             type_of_visit: $type_of_visit, uuid: $uuid, violence_referred: $violence_referred, violence_results: $violence_results,
              violence_screened: $violence_screened, violence_text: $violence_text, violence_treated: $violence_treated, visit_date: $visit_date,
               visit_id: $visit_id, visit_reason: $visit_reason, vl_results: $vl_results, vl_test_done: $vl_test_done, voided: $voided)
       }
`


export const postContactsLinked = `mutation 
postContactsLinked($baseline_hiv_status: String, $final_test_result: String, $mfl_code: Int,$ patient_id: Int, 
  $relationship_type: Int, $visit_date: String){

    postContactsLinked(baseline_hiv_status: $baseline_hiv_status, final_test_result: $final_test_result, mfl_code: $mfl_code, patient_id: $patient_id, 
      relationship_type: $relationship_type, visit_date: $visit_date)
  }
`
export const postCovid19Assessment = `mutation 
postCovid19Assessment($baseline_hiv_status: String, $final_test_result: String, $mfl_code: Int, $patient_id: Int, $relationship_type: Int,
   $visit_date: String){

    postCovid19Assessment(baseline_hiv_status: $baseline_hiv_status, final_test_result: $final_test_result, mfl_code: $mfl_code, patient_id: $patient_id,
       relationship_type: $relationship_type, visit_date: $visit_date)
}
`

export const postHtsTest = `mutation 
postHtsTest($approach: String, $client_tested_as: String, $couple_discordant: String, $creator: String, $date_created: String,
   $date_last_modified: String, $disability_type: String, $encounter_id: Int!, $encounter_location: Int, $encounter_uuid: String!,
    $ever_tested_for_hiv: String, $final_test_result: String, $mfl_code: Int!, $hts_entry_point: String, $key_population_type: String,
     $months_since_last_test: String, $neg_referral_for: String, $neg_referral_specify: String, $other_referral_facility: String,
      $patient_consented: String, $patient_disabled: String, $patient_given_result: String, $patient_had_hiv_self_test: String, 
      $patient_id: Int!, $population_type: String, $referral_facility: String, $referral_for: String, $remarks: String, $setting: String,
       $syphillis_test_result: String, $tb_screening: String, $test_1_kit_expiry: String, $test_1_kit_lot_no: String, $test_1_kit_name: String,
        $test_1_result: String, $test_2_kit_expiry: String, $test_2_kit_lot_no: String, $test_2_kit_name: String,
   $test_2_result: String, $test_strategy: String, $test_type: String, $visit_date: String, $visit_id: Int!, $voided: String){

    postHtsTest(approach: $approach, client_tested_as: $client_tested_as, couple_discordant: $couple_discordant, creator: $creator,
       date_created: $date_created, date_last_modified: $date_last_modified, disability_type: $disability_type, encounter_id: $encounter_id,
        encounter_location: $encounter_location, encounter_uuid: $encounter_uuid, ever_tested_for_hiv: $ever_tested_for_hiv, 
        final_test_result: $final_test_result, mfl_code:mfl_code, hts_entry_point: $hts_entry_point, key_population_type: $key_population_type,
         months_since_last_test: $months_since_last_test, neg_referral_for: $neg_referral_for, neg_referral_specify: $neg_referral_specify, 
         other_referral_facility: $other_referral_facility, patient_consented: $patient_consented, patient_disabled: $patient_disabled,
          patient_given_result: $patient_given_result, patient_had_hiv_self_test: $patient_had_hiv_self_test, patient_id: $patient_id,
           population_type: $population_type, referral_facility: $referral_facility, referral_for: $referral_for, remarks: $remarks, 
           remarks: $remarks, syphillis_test_result: $syphillis_test_result, tb_screening: $tb_screening, test_1_kit_expiry: $test_1_kit_expiry, 
           test_1_kit_lot_no: $test_1_kit_lot_no, test_1_kit_name: $test_1_kit_name, test_1_result: $test_1_result, test_2_kit_expiry: $test_2_kit_expiry,
            test_2_kit_lot_no: $test_2_kit_lot_no, test_2_kit_name: $test_2_kit_name, test_2_result: $test_2_result, 
      test_strategy: $test_strategy, test_type: $test_type, visit_date: $visit_date, visit_id: $visit_id, voided: $voided)
   }

`

export const postProgram = `mutation 
postProgram($date_completed: String, $date_created: String, $date_enrolled: String, $date_last_modified: String, 
  $date_modified: String, $mfl_code: Int, $location_id: Int, 
  $outcome: String, $patient_id: Int!, $program: String, $uuid: String!, $voided: String){

    postProgram(date_completed: $date_completed, date_created: $date_created, date_enrolled: $date_enrolled, 
      date_last_modified: $date_last_modified, date_modified: $date_modified, mfl_code: $mfl_code, 
      location_id: $location_id, outcome: $outcome, patient_id: $patient_id, program: $program, uuid: $uuid!, voided: $voided)
  }
`


