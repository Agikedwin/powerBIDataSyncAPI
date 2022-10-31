import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const Contact = objectType({
    name: "Contact", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.string("unique_identifier ");
       t.nullable.int("client_id");
       t.nullable.int("visit_id");       
       t.nullable.string("visit_date");
       t.nullable.int("location_id");
       t.nullable.int("encounter_id");
       t.nullable.int("encounter_provider");
       t.nullable.string("date_created");
       t.nullable.string("date_last_modified");
       t.nullable.string("key_population_type");
       t.nullable.string("contacted_by_peducator");
       t.nullable.string("program_name");
       t.nullable.string("frequent_hotspot_name");
       t.nullable.string("frequent_hotspot_type ");
       t.nullable.string("year_started_sex_work");
       t.nullable.string("year_started_sex_with_men");
       t.nullable.string("year_started_drugs");
       t.nullable.int("avg_weekly_sex_acts");
       t.nullable.string("avg_weekly_anal_sex_acts");
       t.nullable.int("avg_daily_drug_injections");
       t.nullable.string("contact_person_name");
       t.nullable.string("contact_person_alias");
       t.nullable.string("contact_person_phone");
       t.nullable.int("voided");

    },
});

let resData:any ;


export const ContactQuery = extendType({
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("getContact", {
            type: "Contact",
            resolve(parent, args, context) {  
                
               context.prisma.contact.findMany().then(data =>{
                    resData = data;
                    console.log(data)
                    
                    

                });  
               
                return resData;
            },
        });
    },
});