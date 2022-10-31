import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const Contact = objectType({
    name: "Contact", // <- Name of your type
    definition(t) {
       // t.nonNull.int("id"); 
       t.nullable.string("uuid");
       t.nullable.string("unique_identifier");
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



export const ContactMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postContact", {
            type: "Contact",
             args: {
                uuid : nullable(stringArg()),
                client_id:  nullable(intArg()),
                visit_id:  nullable(intArg()),
                visit_date : nullable(stringArg()),
                unique_identifier: nullable(stringArg()),
                mfl_code: nullable(intArg()),
                location_id : nullable(intArg()),
                encounter_id : nullable(intArg()),
                encounter_provider:  nullable(intArg()),
                date_created : nullable(stringArg()),
                date_last_modified:  nullable(stringArg()),
                key_population_type : nullable(stringArg()),
                contacted_by_peducator : nullable(stringArg()),
                program_name : nullable(stringArg()),
                frequent_hotspot_name : nullable(stringArg()),
                frequent_hotspot_type : nullable(stringArg()),
                year_started_sex_work : nullable(stringArg()),
                year_started_sex_with_men : nullable(stringArg()),
                year_started_drugs : nullable(stringArg()),
                avg_weekly_sex_acts : nullable(intArg()),
                avg_weekly_anal_sex_acts:  nullable(intArg()),
                avg_daily_drug_injections : nullable(intArg()),
                contact_person_name : nullable(stringArg()),
                contact_person_alias : nullable(stringArg()),
                contact_person_phone : nullable(stringArg()),
                voided : nullable(intArg()),
            }, 

            resolve(parent, args, context) { 
                console.log(args);

                const post = context.prisma.contact.create({  
                    
                    data:args
                });
                return post;
            },
        });
    },
});
