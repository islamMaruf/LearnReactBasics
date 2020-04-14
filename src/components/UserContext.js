import React from "react";
//default value for provider passed as argument in react context
const UserContext = React.createContext('no name');
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export {UserProvider, UserConsumer};
export default UserContext;