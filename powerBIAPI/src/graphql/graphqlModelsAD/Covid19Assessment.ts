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
        t.nonNull.field("postCovid19Assessment", {
            type: "Covid19Assessment",
             args: {
                patient_id:  nullable(intArg()),
                mfl_code: nullable(intArg()),
                relationship_type:  nullable(intArg()),
                baseline_hiv_status : nullable(stringArg()),
                visit_date  : nullable(stringArg()),
                final_test_result: nullable(stringArg()),
            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.covid19Assessment.create({  
                    
                    data:args
                });
                return post;
            },
        });
    },
});
