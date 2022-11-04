import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const Covid19Assessment = objectType({
    name: "Covid19Assessment", // <- Name of your type
    definition(t) {
        t.nullable.string("uuid");
        t.nullable.int("provider");
        t.nullable.int("patient_id");
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


let resData:any ;


export const Covid19AssessmentQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getCovid19Assessment", {
            type: "Covid19Assessment",
            resolve(parent, args, context) {  
                
                  context.prisma.covid19Assessment.findMany().then(data =>{
                    resData = data;
                    console.log(data)
                }).catch(error =>{
                    console.log(error);
                });
               
                return resData;
            },
        });
    },
});