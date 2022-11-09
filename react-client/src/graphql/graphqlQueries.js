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
`;
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
`;

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
    `;

export const getARTPreparation = `
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
`;

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
    `;

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
        `;

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
        `;

export const getClientEnrollment = `

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
        `;

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
    `;

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
        `;

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
        `;
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
        `;

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
        `;

export const getDefaultFacilityInfo = `

  query{
    getDefaultFacilityInfo {
      FacilityName
      siteCode
      }
      }
     `;

export const getDepressionScreening = `

  query{
    getDepressionScreening {
      uuid
      provider
      patient_id
      visit_id 
      visit_date 
      location_id 
      encounter_id
      PHQ_9_rating 
      date_created 
      date_last_modified 
      voided 
      }
      }
     `;
export const getDrugEvent = `

     query{
      getDrugEvent {
        date_created
        date_discontinued
        date_last_modified
        date_started
        date_voided
        discontinued
        encounter_id
        patient_id
        program
        provider
        reason_discontinued
        reason_discontinued_other
        regimen
        regimen_discontinued
        regimen_line
        regimen_name
        uuid
        visit_date
        visit_id
        voided
         }
         }
        `;

export const getDrugOrder = `

        query{
          getDrugOrder {
            date_last_modified
            date_voided
            dose
            dose_units
            dosing_instructions
            drug_concept_id
            drug_name
            drug_short_name
            duration
            duration_units
            enc_name
            encounter_id
            frequency
            instructions
            location_id
            order_group_id
            order_id
            patient_id
            provider
            quantity
            quantity_units
            route
            urgency
            uuid
            visit_date
            visit_id
            voided
            }
            }
           `;

// E to L ========================================Starts here
export const getEnhancedAdherence = `

  query{
    getEnhancedAdherence {
      adherence_plan
      appoIntments_honoured
      arv_adherence
      cause_of_high_vl
      date_created
      date_last_modified
      encounter_id
      first_session_date
      has_vl_results
      home_visit_benefit
      next_appoIntment_date
      other_referrals
      patient_adherence_improved
      patient_ambitions
      patient_challenges_reaching_clinic
      patient_doses_missed
      patient_drugs_daily_uptake_feeling
      patient_drugs_reminder_tools
      patient_drugs_side_effects_response
      patient_drugs_uptake
      patient_drugs_uptake_during_travels
      patient_drugs_uptake_most_difficult_times
      patient_enlisting_social_support
      patient_has_people_to_talk
      patient_hiv_knowledge
      patient_id
      patient_income_sources
      patient_treated_differently
      patient_tried_faith_healing
      patient_worried_of_accidental_disclosure
      pill_count
      provider
      referral_experience
      review_and_barriers_to_adherence
      session_number
      stigma_hinders_adherence
      visit_date
      visit_id
      vl_results_feeling
      vl_results_suppressed
      way_forward
      }
      }
     `;

export const getGbvScreening = `

  query{
    getGbvScreening {
      date_created
      date_last_modified
      emotional_ipv
      encounter_id
      ipv
      ipv_relationship
      location_id
      patient_id
      physical_ipv
      provider
      sexual_ipv
      uuid
      visit_date
      visit_id
      voided
      }
      }
     `;
export const getGbvScreeningAction = `

     query{
      getGbvScreeningAction {
        action_taken
        date_created
        date_last_modified
        help_provider
        location_id
        obs_id
        patient_id
        provider
        reason_for_not_reporting
        uuid
        visit_date
        visit_id
        voided
         }
         }
        `;
export const getHeiEnrollment = `

        query{
          getHeiEnrollment {
            TB_contact_history_in_household
            arv_prophylaxis
            birth_certificate_number
            birth_length
            birth_notification_number
            birth_order
            birth_registration_place
            birth_type
            birth_weight
            child_exposed
            date_created
            date_first_enrolled_in_hei_care
            date_first_seen
            date_last_modified
            date_of_birth_notification
            date_of_birth_registration
            district_transferred_from
            encounter_id
            exit_date
            exit_reason
            facility_transferred_from
            gestation_at_birth
            health_facility_name
            hei_id_number
            hiv_status_at_exit
            infant_mother_link
            infant_prophylaxis
            location_id
            mode_of_delivery
            mother_alive
            mother_breastfeeding
            mother_drug_regimen
            mother_facility_registered
            mother_on_NVP_during_breastfeeding
            mother_on_art_at_infant_enrollment
            mother_on_drug
            mother_on_pmtct_drugs
            need_for_special_care
            parent_ccc_number
            patient_id
            permanent_registration_serial
            place_of_delivery
            provider
            reason_for_special_care
            referral_source
            spd_number
            transfer_in
            transfer_in_date
            uuid
            visit_date
            visit_id
            }
            }
           `;
export const getHeiFollowUpVisit = `

           query{
            getHeiFollowUpVisit {
              TB_contact_history_in_household
              arv_prophylaxis
              birth_certificate_number
              birth_length
              birth_notification_number
              birth_order
              birth_registration_place
              birth_type
              birth_weight
              child_exposed
              date_created
              date_first_enrolled_in_hei_care
              date_first_seen
              date_last_modified
              date_of_birth_notification
              date_of_birth_registration
              district_transferred_from
              encounter_id
              exit_date
              exit_reason
              facility_transferred_from
              gestation_at_birth
              health_facility_name
              hei_id_number
              hiv_status_at_exit
              infant_mother_link
              infant_prophylaxis
              location_id
              mode_of_delivery
              mother_alive
              mother_breastfeeding
              mother_drug_regimen
              mother_facility_registered
              mother_on_NVP_during_breastfeeding
              mother_on_art_at_infant_enrollment
              mother_on_drug
              mother_on_pmtct_drugs
              need_for_special_care
              parent_ccc_number
              patient_id
              permanent_registration_serial
              place_of_delivery
              provider
              reason_for_special_care
              referral_source
              spd_number
              transfer_in
              transfer_in_date
              uuid
              visit_date
              visit_id
               }
               }
              `;
export const getHeiImmunization = `

              query{
                getHeiImmunization {
                  BCG
                  DPT_Hep_B_Hib_1
                  DPT_Hep_B_Hib_2
                  DPT_Hep_B_Hib_3
                  IPV
                  Measles_6_months
                  Measles_rubella_1
                  Measles_rubella_2
                  OPV_1
                  OPV_2
                  OPV_3
                  OPV_birth
                  PCV_10_1
                  PCV_10_2
                  PCV_10_3
                  ROTA_1
                  ROTA_2
                  VitaminA_1_and_half_yr
                  VitaminA_1_yr
                  VitaminA_2_to_5_yr
                  VitaminA_2_yr
                  VitaminA_6_months
                  Yellow_fever
                  created_by
                  date_created
                  date_last_modified
                  encounter_id
                  fully_immunized
                  patient_id
                  visit_date
                  }
                  }
                 `;
export const getHivEnrollment = `

                 query{
                  getHivEnrollment {
                    arv_status
                    date_confirmed_hiv_positive
                    date_created
                    date_first_enrolled_in_care
                    date_last_modified
                    date_of_discontinuation
                    date_started_art_at_transferring_facility
                    discontinuation_reason
                    district_transferred_from
                    encounter_id
                    encounter_provider
                    entry_point
                    ever_on_haart
                    ever_on_pep
                    ever_on_pmtct
                    ever_on_prep
                    facility_confirmed_hiv_positive
                    facility_transferred_from
                    in_school
                    location_id
                    name_of_treatment_supporter
                    orphan
                    patient_id
                    patient_type
                    previous_regimen
                    relationship_of_treatment_supporter
                    transfer_in_date
                    treatment_supporter_address
                    treatment_supporter_telephone
                    uuid
                    visit_date
                    visit_id
                    voided
                     }
                     }
                    `;
export const getHtsContacts = `

                    query{
                      getHtsContacts {
                        baseline_hiv_status
                        final_test_result
                        id
                        patient_id
                        relationship_type
                        test_1_result
                        test_2_result
                        test_type
                        visit_date
                        }
                        }
                       `;
export const getHtsEligibilityScreening = `

                       query{
                        getHtsEligibilityScreening {
                          alcohol_sex
                          breastfeeding_mother
                          child_reasons_for_ineligibility
                          condom_burst
                          contact_with_tb_case
                          cough
                          couple_discordant
                          currently_on_prep
                          date_created
                          date_last_modified
                          date_tested
                          department
                          eligible_for_test
                          encounter_id
                          ever_had_sex
                          experienced_gbv
                          fever
                          is_health_worker
                          key_population_type
                          known_status_partner
                          lethargy
                          location_id
                          money_sex
                          mother_hiv_status
                          multiple_partners
                          needle_stick_injuries
                          new_partner
                          night_sweats
                          number_partners
                          partner_hiv_status
                          patient_id
                          patient_type
                          population_type
                          pregnant
                          priority_population_type
                          provider
                          reasons_for_ineligibility
                          recently_had_sti
                          recently_on_pep
                          referred_for_testing
                          relationship_with_contact
                          service_received
                          sexually_active
                          shared_needle
                          specific_reason_for_ineligibility
                          started_on_art
                          tb_screened
                          tb_status
                          test_results
                          tested_hiv_before
                          traditional_procedures
                          type_of_gbv
                          unknown_status_partner
                          upn_number
                          uuid
                          visit_date
                          visit_id
                          voided
                          weight_loss
                          who_performed_test
                           }
                           }
                          `;
export const getHtsLinkageTracing = `

                          query{
                            getHtsLinkageTracing {
                              date_created
                              date_last_modified
                              encounter_id
                              encounter_provider
                              location_id
                              patient_id
                              reason_not_contacted
                              tracing_outcome
                              tracing_type
                              uuid
                              visit_date
                              voided
                              }
                              }
                             `;
export const getHtsReferral = `

                             query{
                              getHtsReferral {
                                creator
                                date_created
                                date_last_modified
                                date_to_enrol
                                encounter_id
                                encounter_location
                                encounter_uuid
                                facility_referred_to
                                patient_id
                                remarks
                                visit_date
                                visit_id
                                voided
                                 }
                                 }
                                `;

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
                                   `;

export const getIptFollowUp = `

                                query{
                                  getIptFollowUp {
                                    action_taken
                                    adherence
                                    date_collected_ipt
                                    date_created
                                    date_last_modified
                                    encounter_id
                                    hepatotoxity
                                    ipt_due_date
                                    location_id
                                    patient_id
                                    peripheral_neuropathy
                                    provider
                                    rash
                                    uuid
                                    visit_date
                                    visit_id
                                    voided
                                    weight
                                    }
                                    }
                                   `;
export const getIptInitiation = `

                                   query{
                                    getIptInitiation {
                                      date_created
                                      date_last_modified
                                      encounter_id
                                      encounter_provider
                                      ipt_indication
                                      location_id
                                      patient_id
                                      sub_county_reg_date
                                      sub_county_reg_number
                                      uuid
                                      visit_date
                                      voided
                                       }
                                       }
                                      `;
export const getIptOutcome = `

                                      query{
                                        getIptOutcome {
                                          date_created
                                          date_last_modified
                                          encounter_id
                                          encounter_provider
                                          location_id
                                          outcome
                                          patient_id
                                          uuid
                                          visit_date
                                          voided
                                          
                                          }
                                          }
                                         `;
export const getIptScreening = `

                                         query{
                                          getIptScreening {
                                            contact_with_tb_case
                                            cough
                                            date_created
                                            date_last_modified
                                            encounter_id
                                            eyes_yellowness
                                            fever
                                            lethargy
                                            location_id
                                            night_sweats
                                            numbness_bs_hands_feet
                                            obs_id
                                            patient_id
                                            provider
                                            upper_rightQ_abdomen_tenderness
                                            uuid
                                            visit_date
                                            visit_id
                                            voided
                                            weight_loss_poor_gain
                                            yellow_urine
                                             }
                                             }
                                            `;
export const getLaboratoryExtract = `

                                            query{
                                              getLaboratoryExtract {
                                                created_by
                                                date_created
                                                date_last_modified
                                                date_test_requested
                                                date_test_result_received
                                                encounter_id
                                                lab_test
                                                location_id
                                                order_id
                                                order_reason
                                                patient_id
                                                test_requested_by
                                                test_result
                                                urgency
                                                uuid
                                                visit_date
                                                visit_id
                                                }
                                                }
                                               `;
export const getLastMonthNewlyEnrolledInCare = `

                                               query{
                                                getLastMonthNewlyEnrolledInCare {
                                                  patient_id
                                                   }
                                                   }
                                                  `;
export const getLastMonthNewlyOnArt = `

                                                  query{
                                                    getEnhancedAdherence {
                                                      patient_id
                                                      }
                                                      }
                                                               
                                                                 `;
