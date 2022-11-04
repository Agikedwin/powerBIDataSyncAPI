import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const ContactsLinked = objectType({
    name: "ContactsLinked", // <- Name of your type
    definition(t) {
        t.nullable.int("patient_id");
        t.nullable.int("relationship_type");
        t.nullable.string("baseline_hiv_status");
        t.nullable.string("visit_date");
        t.nullable.string("final_test_result");
    },
});



export const ContactsLinkedMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nonNull.field("postContactsLinked", {
            type: "ContactsLinked",
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

                const post = context.prisma.contactsLinkedLinked.create({  
                    
                    data:{

                        baseline_hiv_status: args.baseline_hiv_status,
                        final_test_result: args.final_test_result,
                        patient_id: args.patient_id, 
                        relationship_type: args.relationship_type, 
                        visit_date: args.visit_date
                        
                    }
                });
                return post;
            },
        });
    },
});
