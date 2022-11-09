import { prisma } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";   


export const DefaultFacilityInfo = objectType({
    name: "DefaultFacilityInfo", // <- Name of your type
    definition(t) {
        t.nullable.int("siteCode");
        t.nullable.string("FacilityName");
    },
});


export const DefaultFacilityInfoMutation = extendType({  // 1
    
    type: "Mutation",    
    definition(t) {
        t.nullable.field("postDefaultFacilityInfo", {
            type: "DefaultFacilityInfo",
             args: {
                
                siteCode : nullable(intArg()),
                FacilityName : nullable(stringArg()), 
               
            }, 

            resolve(parent, args, context) { 
                console.log(args);

                try {
                    const post = context.prisma.defaultFacilityInfo.create({  
                    
                        data:{
                            
                            siteCode : args.siteCode,
                            FacilityName : args.FacilityName, 
                          

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
