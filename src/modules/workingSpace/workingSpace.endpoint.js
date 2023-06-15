import { roles } from "../../middleware/auth.js";

export const endPoints={
    
    createReview:[roles.User],
    avgRate:[roles.User,roles.Admin,roles.Owner],

    getWorkSpaces:[roles.User,roles.Admin],
    
    getAllWsRooms:[roles.User,roles.Admin],
    searchWorkspacesByName:[roles.User,roles.Admin],

  

}