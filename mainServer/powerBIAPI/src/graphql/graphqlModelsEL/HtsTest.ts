import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   

export const ETLHtsTest = objectType({
    name: "ETLHtsTest", // <- Name of your type
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.int("patient_id");  
        t.nonNull.int("visit_id"); 
        t.nonNull.string("encounter_uuid"); 
        t.nonNull.int("encounter_id"); 
        t.nonNull.int("encounter_location"); 
        t.nonNull.int("creator"); 
        t.nonNull.string("date_created"); 
        t.nonNull.string("date_last_modified"); 
        t.nonNull.string("visit_date"); 
        t.nonNull.string("test_type");
        t.nonNull.string("population_type"); 
        t.nonNull.string("ever_tested_for_hiv"); 
        t.nonNull.string("months_since_last_test"); 
        t.nonNull.string("patient_disabled"); 
        t.nonNull.string("disability_type"); 
        t.nonNull.string("patient_consented"); 
        t.nonNull.string("client_tested_as"); 
        t.nonNull.string("setting"); 
        t.nonNull.string("approach"); 
        t.nonNull.string("test_strategy"); 
        t.nonNull.string("hts_entry_point"); 
        t.nonNull.string("test_1_kit_name"); 
        t.nonNull.string("test_1_kit_lot_no"); 
        t.nonNull.string("test_1_kit_expiry"); 
        t.nonNull.string("test_1_result"); 
        t.nonNull.string("test_2_kit_name"); 
        t.nonNull.string("test_2_kit_lot_no"); 
        t.nonNull.string("test_2_kit_expiry"); 
        t.nonNull.string("test_2_result"); 
        t.nonNull.string("final_test_result"); 
        t.nonNull.string("syphillis_test_result"); 
        t.nonNull.string("patient_given_result"); 
        t.nonNull.string("couple_discordant"); 
        t.nonNull.string("referral_for"); 
        t.nonNull.string("referral_facility"); 
        t.nonNull.string("other_referral_facility"); 
        t.nonNull.string("neg_referral_for"); 
        t.nonNull.string("neg_referral_specify"); 
        t.nonNull.string("tb_screening"); 
        t.nonNull.string("patient_had_hiv_self_test"); 
        t.nonNull.string("remarks"); 
        t.nonNull.string("voided"); 


    },
});


export const ETLHtsTestQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getHtsTest", {
            type: "ETLHtsTest",
            resolve(parent, args, context) {  
                return context.prisma.eTLHtsTest.findMany();  // 1
            },
        });
    },
});

