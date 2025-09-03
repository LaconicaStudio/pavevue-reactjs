import React from "react";
import {usePVContext} from "../../../context/PVContext.jsx";


const UserImage = () => {
    const {user} = usePVContext();

    return (user && user.avatarUrl &&
        <div className="">
            <div className="h-[60px] w-[60px]">
                <img src={user.avatarUrl} alt={user.name || "User avatar"} className="w-full h-full rounded-full object-cover" width="60" height="60"/>
            </div>
        </div>
    )
}

export default UserImage;