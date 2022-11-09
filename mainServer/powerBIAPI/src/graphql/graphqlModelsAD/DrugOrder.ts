import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const DrugOrder = objectType({
    name: "DrugOrder", // <- Name of your type
    definition(t) {
        
t.nullable.int("visit_id")
t.nullable.int("provider")
t.nullable.int("order_id")
t.nullable.int("encounter_id")
t.nullable.int("order_group_id")
t.nullable.int("patient_id")
t.nullable.int("location_id")
t.nullable.int("voided")

t.nullable.string("uuid")
t.nullable.string("urgency")
t.nullable.string("drug_concept_id")
t.nullable.string("drug_short_name")
t.nullable.string("drug_name")
t.nullable.string("frequency")
t.nullable.string("enc_name")
t.nullable.string("dose")
t.nullable.string("dose_units")
t.nullable.string("quantity")
t.nullable.string("quantity_units")
t.nullable.string("dosing_instructions")
t.nullable.int("duration")
t.nullable.string("duration_units")
t.nullable.string("instructions")
t.nullable.string("route")

t.nullable.string("visit_date")
t.nullable.string("date_voided")
t.nullable.string("date_created")
t.nullable.string("date_last_modified")
    },
});



export const DrugOrderQuery = extendType({
    type: "Query",
    definition(t) {
        t.nullable.list.nullable.field("getDrugOrder", {
            type: "DrugOrder",
            resolve(parent, args, context) {  
                console.log("Fetching DrugOrder ...");
                return  context.prisma.drugOrder.findMany();
            },
        });
    },
});

