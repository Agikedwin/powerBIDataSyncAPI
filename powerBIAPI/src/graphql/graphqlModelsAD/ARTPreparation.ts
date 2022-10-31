import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const ARTPreparation = objectType({
    name: "ARTPreparation", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.int("patient_id"); 
       t.nullable.int("mfl_code");
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
       t.nullable.int("date_created"); 
       t.nullable.int("date_last_modified"); 

    },
});



export const ARTPreparationMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postARTPreparation", {
            type: "ARTPreparation",
             args: {
                uuid: nullable(stringArg()),
                patient_id: nullable(intArg()),
                visit_id: nullable(intArg()),
                visit_date: nullable(stringArg()),
                mfl_code: nullable(intArg()),
                location_id: nullable(intArg()),
                encounter_id: nullable(intArg()),
                provider: nullable(intArg()),
                understands_hiv_art_benefits: nullable(stringArg()),
                screened_negative_substance_abuse : nullable(stringArg()),
                screened_negative_psychiatric_illness : nullable(stringArg()),
                HIV_status_disclosure : nullable(stringArg()),
                trained_drug_admin : nullable(stringArg()),
                informed_drug_side_effects : nullable(stringArg()),
                caregiver_committed : nullable(stringArg()),
                adherance_barriers_identified: nullable(stringArg()),
                caregiver_location_contacts_known : nullable(stringArg()),
                ready_to_start_art: nullable(stringArg()),
                identified_drug_time : nullable(stringArg()),
                treatment_supporter_engaged : nullable(stringArg()),
                support_grp_meeting_awareness : nullable(stringArg()),
                enrolled_in_reminder_system : nullable(stringArg()),
                other_support_systems: nullable(stringArg()),
                date_created : nullable(stringArg()),
                date_last_modified: nullable(stringArg()),


            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.aRTPreparation.create({  
                    
                    data:{
                        uuid: args.uuid,
                        patient_id: args.patient_id,
                        visit_id: args.visit_id,
                        mfl_code: 12905,
                        visit_date: args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null,
                        location_id: args.location_id,
                        encounter_id: args.encounter_id,
                        provider: args.provider,
                        understands_hiv_art_benefits: args.understands_hiv_art_benefits,
                        screened_negative_substance_abuse: args.screened_negative_substance_abuse,
                        screened_negative_psychiatric_illness: args.screened_negative_psychiatric_illness,
                        HIV_status_disclosure: args.HIV_status_disclosure,
                        trained_drug_admin: args.trained_drug_admin,
                        informed_drug_side_effects: args.informed_drug_side_effects,
                        adherance_barriers_identified: args.adherance_barriers_identified,
                        caregiver_location_contacts_known: args.caregiver_location_contacts_known,
                        ready_to_start_art: args.ready_to_start_art,
                        identified_drug_time: args.identified_drug_time,
                        treatment_supporter_engaged: args.treatment_supporter_engaged,
                        support_grp_meeting_awareness: args.support_grp_meeting_awareness,
                        enrolled_in_reminder_system: args.enrolled_in_reminder_system,
                        other_support_systems: args.other_support_systems,
                        date_created: args.enroll_date != null ? (new Date(args.date_created * 1).toISOString()) : null,
                        date_last_modified: args.date_last_modified != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,
                    }
                });
                return post;
            },
        });
    },
});
