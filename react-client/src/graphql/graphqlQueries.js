
export const getAdverseEvents = `
query {
getAdverseEvents {
  form
  uuid
  provider 
  patient_id 
  visit_id 
  visit_date
  location_id 
  encounter_id 
  obs_id 
  cause 
  adverse_event 
  severity 
  start_date 
  action_taken 
  voided 
  date_created 
  date_last_modified
}
}
`
 export const getCurrentInCare = `
query {
getCurrentInCare{
  patient_id
  gender
  latest_enrolment_date
  latest_vis_date
  effective_disc_date
  stability
  started_on_drugs
  dob
  disc_patient
  enroll_date
  latest_tca
  date_discontinued
 }
}
`


export const getAlcoholDrugAbuseScreening = `
query{
    getAlcoholDrugAbuseScreening {

      uuid   
      provider 
      patient_id
      visit_id 
      visit_date 
      location_id 
      encounter_id 
      alcohol_drinking_frequency
      smoking_frequency 
      drugs_use_frequency 
      date_created 
      date_last_modified 
      voided

    }
    }
    `


export const  getARTPreparation = `
query{
    getARTPreparation {
  HIV_status_disclosure
  adherance_barriers_identified
  caregiver_location_contacts_known
  date_created
  date_last_modified
  encounter_id
  enrolled_in_reminder_system
  identified_drug_time
  informed_drug_side_effects
  location_id
  other_support_systems
  patient_id
  provider
  ready_to_start_art
  screened_negative_psychiatric_illness
  screened_negative_substance_abuse
  support_grp_meeting_awareness
  trained_drug_admin
  treatment_supporter_engaged
  understands_hiv_art_benefits
  uuid
  visit_date
  visit_id
  voided
    }
}
`


export const getAllergyChronicIllness = `

query{

  getAllergyChronicIllness {     

    allergy_causative_agent
    allergy_onset_date
    allergy_reaction
    allergy_severity
    chronic_illness
    chronic_illness_onset_date
    date_created
    date_last_modified
    encounter_id
    location_id
    obs_id
    patient_id
    provider
    uuid
    visit_date
    visit_id
    voided

    }
    }
    `



    export const getCccDefaulterTracing = `
    query{

      getCccDefaulterTracing {

        attempt_number
        booking_date
        cause_of_death
        comments
        date_created
        date_last_modified
        encounter_id
        is_final_trace
        location_id
        non_coded_missed_appointment_reason
        patient_id
        provider
        reason_for_missed_appointment
        tracing_outcome
        tracing_type
        true_status
        uuid
        visit_date
        visit_id

        }
        }
        `


    export const getCervicalCancerScreening = `

    query{
      getCervicalCancerScreening {

        uuid 
        encounter_id
        encounter_provider
        patient_id
        visit_id
        visit_date
        date_last_modified 
        visit_type 
        screening_type 
        post_treatment_complication_cause 
        post_treatment_complication_other 
        screening_method  
        screening_result  
        treatment_method  
        treatment_method_other  
        referred_out  
        referral_facility  
        referral_reason  
        next_appointment_date 
        voided

        }
        }
        `


    export const getClientEnrollment =  `

    query{
      getClientEnrollment {
        buddy_name
        buddy_phone_number
        care_facility_name
        ccc_number
        client_id
        contact_for_appointment
        contact_method
        contacted_for_prevention
        date_last_modified
        encounter_id
        encounter_provider
        ever_tested_for_hiv
        has_expereienced_physical_violence
        has_expereienced_sexual_violence
        has_regular_free_sex_partner
        location_id
        receiving_hiv_care
        share_test_results
        test_decline_reason
        test_type
        uuid
        visit_date
        visit_id
        vl_results_date
        vl_test_done
        voided
        willing_to_test
        year_started_drugs
        year_started_sex_with_men
        }
        }
        `

    export const getClientTrace = `
    query {
      getClientTrace{

                uuid 
                date_created 
                date_last_modified:
                encounter_date
                client_id 
                contact_type
                status
                unique_patient_no
                facility_linked_to 
                health_worker_handed_to 
                remarks 
                appointment_date
      }
    }
    `

    export const getClinicalVisit = `

    query{
      getClinicalVisit {

        abscess_referred
        abscess_results
        abscess_screened
        abscess_text
        abscess_treated
        active_art
        alcohol_referred
        alcohol_results
        alcohol_screened
        alcohol_text
        alcohol_treated
        appointment_date
        cerv_cancer_referred
        cerv_cancer_results
        cerv_cancer_screened
        cerv_cancer_text
        cerv_cancer_treated
        client_id
        clinical_notes
        condom_use_education
        confirmatory_facility
        counselled_for_hiv
        date_created
        date_last_modified
        distribution_kits
        eligible_vl
        encounter_id
        encounter_provider
        exposure_type
        facility_linked_to
        female_condoms_no
        fp_eligibility
        fp_referred
        fp_screened
        fp_text
        fp_treated
        hepatitisB_referred
        hepatitisB_results
        hepatitisB_screened
        hepatitisB_text
        hepatitisB_treated
        hepatitisC_referred
        hepatitisC_results
        hepatitisC_screened
        hepatitisC_text
        hepatitisC_treated
        hiv_care_facility
        hiv_self_rep_status
        hiv_tested
        implementing_partner
        initiated_art_this_month
        last_hiv_test_setting
        linked_to_art
        linked_to_psychosocial
        location_id
        lubes_no
        male_condoms_no
        mental_health_referred
        mental_health_results
        mental_health_screened
        mental_health_support
        mental_health_text
        offsite_confirmatory_facility
        other_exposure_type
        other_hiv_care_facility
        overdose_referred
        overdose_results
        overdose_screened
        overdose_text
        overdose_treated
        pep_eligible
        post_abortal_care
        prep_referred
        prep_results
        prep_screened
        prep_text
        prep_treated
        received_naloxone
        received_results
        received_vl_results
        risk_red_counselling_ebi_provided
        risk_red_counselling_eligibility
        risk_red_counselling_screened
        risk_red_counselling_support
        risk_red_counselling_text
        self_test_date
        self_test_education
        self_test_frequency
        self_test_kits_given
        self_test_link_facility
        self_test_linked_art
        self_test_results
        self_tested
        self_use_kits
        service_delivery_model
        sti_referred
        sti_referred_text
        sti_results
        sti_screened
        sti_treated
        syringes_needles_no
        tb_referred
        tb_referred_text
        tb_results
        tb_screened
        tb_treated
        test_confirmatory_results
        test_frequency
        test_results
        type_of_visit
        uuid
        violence_referred
        violence_results
        violence_screened
        violence_text
        violence_treated
        visit_date
        visit_id
        visit_reason
        vl_results
        vl_test_done
        voided

        }
        }
        `

  export const getContact = `

    query{
      getContact {
        uuid 
        unique_identifier
        client_id 
        visit_id
        visit_date 
        location_id 
        encounter_id 
        encounter_provider 
        date_created  
        date_last_modified 
        key_population_type 
        contacted_by_peducator 
        program_name
        frequent_hotspot_name 
        frequent_hotspot_type 
        year_started_sex_work
        year_started_sex_with_men 
        year_started_drugs 
        avg_weekly_sex_acts 
        avg_weekly_anal_sex_acts 
        avg_daily_drug_injections 
        contact_person_name 
        contact_person_alias 
        contact_person_phone 
        voided 
        }
        }
        `
    export const getContactsLinked = `

    query{
      getContactsLinked {
        baseline_hiv_status
        final_test_result
        patient_id
        relationship_type
        visit_date
        }
        }
        `


    export const getCovid19Assessment = `

    query{
      getCovid19Assessment {
        admission_unit
        booster_dose_verified
        booster_sequence
        booster_vaccine_taken
        date_created
        date_last_modified
        date_taken_booster_vaccine
        date_tested_positive
        encounter_id
        ever_received_booster
        ever_tested_covid_19_positive
        ever_vaccinated
        final_vaccination_status
        first_dose
        first_dose_date
        first_vaccination_verified
        first_vaccine_type
        hospital_admission
        location_id
        obs_id
        on_oxygen_supplement
        on_ventillator
        patient_id
        provider
        second_dose
        second_dose_date
        second_vaccination_verified
        second_vaccine_type
        symptomatic
        uuid
        visit_date
        visit_id
        voided
        }
        }
        `


  export const getHtsTest = `

  query{
    getHtsTest {
      approach
      client_tested_as
      couple_discordant
      creator
      date_created
      date_last_modified
      disability_type
      encounter_id
      encounter_location
      encounter_uuid
      ever_tested_for_hiv
      final_test_result
      fml_code
      hts_entry_point
      id
      months_since_last_test
      neg_referral_for
      neg_referral_specify
      other_referral_facility
      patient_consented
      patient_disabled
      patient_given_result
      patient_had_hiv_self_test
      patient_id
      population_type
      referral_facility
      referral_for
      remarks
      setting
      syphillis_test_result
      tb_screening
      test_1_kit_expiry
      test_1_kit_lot_no
      test_1_kit_name
      test_1_result
      test_2_kit_expiry
      test_2_kit_lot_no
      test_2_kit_name
      test_2_result
      test_strategy
      test_type
      visit_date
      visit_id
      voided
      }
      }
     `

