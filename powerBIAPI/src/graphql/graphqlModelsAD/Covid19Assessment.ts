import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const Covid19Assessment = objectType({
    name: "Covid19Assessment", // <- Name of your type
    definition(t) {
        t.nullable.string("uuid");
        t.nullable.int("provider");
        t.nullable.int("patient_id");
        t.nullable.int("mfl_code");
        t.nullable.int("visit_id");
        t.nullable.string("visit_date");
        t.nullable.int("location_id");
        t.nullable.int("encounter_id");
        t.nullable.string("obs_id");
        t.nullable.string("ever_vaccinated");
        t.nullable.string("first_vaccine_type");
        t.nullable.string("second_vaccine_type");
        t.nullable.string("first_dose");
        t.nullable.string("second_dose");
        t.nullable.string("first_dose_date");
        t.nullable.string("second_dose_date");
        t.nullable.string("first_vaccination_verified");
        t.nullable.string("second_vaccination_verified");
        t.nullable.string("final_vaccination_status");
        t.nullable.string("ever_received_booster");
        t.nullable.string("booster_vaccine_taken");
        t.nullable.string("date_taken_booster_vaccine");
        t.nullable.string("booster_sequence");
        t.nullable.string("booster_dose_verified");
        t.nullable.string("ever_tested_covid_19_positive");
        t.nullable.string("symptomatic");
        t.nullable.string("date_tested_positive");
        t.nullable.string("hospital_admission");
        t.nullable.string("admission_unit");
        t.nullable.string("on_ventillator");
        t.nullable.string("on_oxygen_supplement");
        t.nullable.string("date_created");
        t.nullable.string("date_last_modified");
        t.nullable.int("voided");
    },
});



export const Covid19AssessmentMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nullable.field("postCovid19Assessment", {
            type: "Covid19Assessment",
             args: {
                patient_id : nullable(intArg()),
                provider : nullable(intArg()),
                uuid: nullable(stringArg()),
                visit_id : nullable(intArg()), 
                mfl_code: nullable(intArg()),
                visit_date : nullable(stringArg()), 
                location_id : nullable(intArg()), 
                encounter_id : nullable(intArg()), 
                obs_id : nullable(stringArg()), 
                ever_vaccinated : nullable(stringArg()), 
                first_vaccine_type : nullable(stringArg()), 
                second_vaccine_type : nullable(stringArg()),  
                first_dose : nullable(stringArg()), 
                second_dose : nullable(stringArg()), 
                first_dose_date : nullable(stringArg()), 
                second_dose_date : nullable(stringArg()), 
                first_vaccination_verified : nullable(stringArg()),  
                second_vaccination_verified : nullable(stringArg()), 
                final_vaccination_status : nullable(stringArg()), 
                ever_received_booster : nullable(stringArg()), 
                booster_vaccine_taken : nullable(stringArg()), 
                date_taken_booster_vaccine : nullable(stringArg()),  
                booster_sequence : nullable(stringArg()), 
                booster_dose_verified : nullable(stringArg()), 
                ever_tested_covid_19_positive : nullable(stringArg()),  
                symptomatic : nullable(stringArg()), 
                date_tested_positive : nullable(stringArg()), 
                hospital_admission : nullable(stringArg()), 
                admission_unit : nullable(stringArg()), 
                on_ventillator : nullable(stringArg()), 
                on_oxygen_supplement : nullable(stringArg()),  
                date_created : nullable(stringArg()),
                date_last_modified : nullable(stringArg()),
                voided : nullable(intArg()), 
            }, 

            resolve(parent, args, context) { 
                console.log(args);

                try {
                    const post = context.prisma.covid19Assessment.create({  
                    
                        data:{
                            
                            patient_id: args.patient_id,
                            provider: args.provider,
                            uuid: args.uuid,
                            visit_id: args.visit_id,
                            visit_date: args.visit_date != null ? (new Date(args.visit_date * 1).toISOString()) : null, 
                            encounter_id: args.encounter_id,
                            mfl_code: 12904,
                            obs_id: args.obs_id, 
                            ever_vaccinated: args.ever_vaccinated, 
                            first_vaccine_type: args.first_vaccine_type, 
                            second_vaccine_type: args.second_vaccine_type, 
                            first_dose: args.first_dose, 
                            second_dose: args.second_dose, 
                            first_dose_date: args.first_dose_date, 
                            second_dose_date: args.second_dose_date, 
                            first_vaccination_verified: args.first_vaccination_verified, 
                            second_vaccination_verified: args.second_vaccination_verified, 
                            final_vaccination_status: args.final_vaccination_status, 
                            ever_received_booster: args.ever_received_booster, 
                            booster_vaccine_taken: args.booster_vaccine_taken, 
                            date_taken_booster_vaccine: args.date_taken_booster_vaccine, 
                            booster_sequence: args.booster_sequence, 
                            booster_dose_verified: args.booster_dose_verified, 
                            ever_tested_covid_19_positive: args.ever_tested_covid_19_positive, 
                            symptomatic: args.symptomatic, 
                            date_tested_positive: args.date_tested_positive, 
                            hospital_admission: args.hospital_admission, 
                            admission_unit: args.admission_unit, 
                            on_ventillator: args.on_ventillator, 
                            on_oxygen_supplement: args.on_oxygen_supplement, 
                            date_created: args.date_created != null ? (new Date(args.date_created * 1).toISOString()) : null,
                            date_last_modified: args.date_last_modified  != null ? (new Date(args.date_last_modified * 1).toISOString()) : null,
                            voided: args.voided 
                        }
                    });
                    return post;
                    
                } catch (error) {
                    console.log(error)
                }
            },
        });
    },
});
