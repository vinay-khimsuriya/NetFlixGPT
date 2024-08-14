export const checkValidateLoginData = (email, password) => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmail) return "Email is not Valide";
  if (!isPassword) return "Password is not valid";

  if (isEmail && isPassword) {
    return null;
  }
};

export const checkValiduteSignUpData = (email, password) => {
  const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  //   if (email || password === "") return "";
  if (!isEmail) return "Please Enter Valid Email ID Format";
  if (!isPassword) return "Please Enter Valid Password";

  return null;
};
