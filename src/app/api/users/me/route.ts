import { getDataFromToken } from "@/helpers/getDataFromToken";
import {NextRequest,NextResponse}from "next/server";
import User from "@/models/userModel";
import {connect} from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){
    try {
       const UserId = await getDataFromToken(request);
       const user = await User.findOne({_id : UserId}).select("-password!");
       return NextResponse.json({
                   message: "user found",
                   data : user.id
       }) 
        
    } catch (error:any) {
        return NextResponse.json({Error : error.message}, {status:400});
        
    }
}