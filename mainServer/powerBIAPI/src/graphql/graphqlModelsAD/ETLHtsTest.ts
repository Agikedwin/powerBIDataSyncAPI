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
        t.nonNull.string("creator"); 
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
        t.nonNull.list.nonNull.field("getHtsTest", {
            type: "ETLHtsTest",
            resolve(parent, args, context) {  
                return context.prisma.link.findMany();  // 1
            },
        });
    },
});


export const ETLHtsTestMutation = extendType({  // 1
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postHtsTest", {
            type: "ETLHtsTest",
            args: { 
                
    visit_id: nonNull(intArg()), 
    patient_id: nonNull(intArg()),
    encounter_id: nonNull(intArg()),
    encounter_uuid: nonNull(stringArg()),
    encounter_location: nullable(intArg()),
    creator: nullable(stringArg()),
    date_created: nullable(stringArg()),
    date_last_modified: nullable(stringArg()),
    visit_date: nullable(stringArg()),
    test_type: nullable(stringArg()),
    population_type: nullable(stringArg()),
    key_population_type: nullable(stringArg()),
    ever_tested_for_hiv: nullable(stringArg()),
    months_since_last_test: nullable(stringArg()),
    patient_disabled: nullable(stringArg()),
    disability_type: nullable(stringArg()),
    patient_consented: nullable(stringArg()),
    client_tested_as: nullable(stringArg()),
    setting: nullable(stringArg()),
    approach: nullable(stringArg()),
    test_strategy: nullable(stringArg()),
    hts_entry_point: nullable(stringArg()),
    test_1_kit_name: nullable(stringArg()),
    test_1_kit_lot_no: nullable(stringArg()),
    test_1_kit_expiry: nullable(stringArg()),
    test_1_result: nullable(stringArg()),
    test_2_kit_name: nullable(stringArg()),
    test_2_kit_lot_no: nullable(stringArg()),
    test_2_kit_expiry: nullable(stringArg()),
    test_2_result: nullable(stringArg()),
    final_test_result: nullable(stringArg()),
    syphillis_test_result: nullable(stringArg()),
    patient_given_result: nullable(stringArg()),
    couple_discordant: nullable(stringArg()),
    referral_for: nullable(stringArg()),
    referral_facility: nullable(stringArg()),
    other_referral_facility: nullable(stringArg()),
    neg_referral_for: nullable(stringArg()),
    neg_referral_specify: nullable(stringArg()),
    tb_screening: nullable(stringArg()),
    patient_had_hiv_self_test: nullable(stringArg()),
    remarks: nullable(stringArg()),
    voided: nullable(stringArg())


            },
            resolve(parent, args, context) { 
                console.log(args);
                const newProgram = context.prisma.ETLHtsTest.create({   // 2
                    
                    data:
                     {
                        patient_id: args.patient_id,
                        visit_id: args.visit_id,
                        encounter_id: args.encounter_id,
                        encounter_uuid: args.encounter_uuid,
                        encounter_location: args.encounter_location,
                        creator: args.creator,
                        visit_date: args.visit_date,
                        test_type: args.test_type,
                        date_created: args.date_created,
                        population_type: args.population_type,
                        key_population_type: args.key_population_type,
                        ever_tested_for_hiv: args.ever_tested_for_hiv,
                        months_since_last_test: args.months_since_last_test,
                        patient_disabled: args.patient_disabled,
                        disability_type: args.disability_type,
                        patient_consented: args.patient_consented,
                        client_tested_as: args.client_tested_as,
                        setting: args.setting,
                        date_last_modified: args.date_last_modified,
                        approach: args.approach,
                        test_strategy: args.test_strategy,
                        hts_entry_point: args.hts_entry_point,
                        test_1_kit_name: args.test_1_kit_name,
                        test_1_kit_lot_no: args.test_1_kit_lot_no,
                        test_1_kit_expiry: args.test_1_kit_expiry,
                        test_1_result: args.test_1_result,
                        test_2_kit_name: args.test_2_kit_name,
                        test_2_kit_lot_no: args.test_2_kit_lot_no,
                        test_2_kit_expiry: args.test_2_kit_expiry,
                        test_2_result: args.test_2_result,
                        final_test_result: args.final_test_result,
                        syphillis_test_result: args.syphillis_test_result,
                        patient_given_result: args.patient_given_result,
                        couple_discordant: args.couple_discordant,
                        referral_for: args.referral_for,
                        referral_facility: args.referral_facility,
                        other_referral_facility: args.other_referral_facility,
                        neg_referral_for: args.neg_referral_for,
                        neg_referral_specify: args.neg_referral_specify,
                        tb_screening: args.tb_screening,
                        patient_had_hiv_self_test: args.patient_had_hiv_self_test,
                        remarks: args.remarks,
                        voided: args.voided,
                        
                    }, 
                });
                return newProgram;
            },
        });
    },
});