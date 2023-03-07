type UserDataType = {
  id: number;
  title: string;
  firstName: string;
  surname: string;
  email: string;
};

export type BookingsType = UserDataType & {
  roomId: number;
  checkInDate: string;
  checkOutDate: string;
  [key: string]: any;
};

export type ProfileDataType = UserDataType & {
  vip: boolean;
  phoneNumber: string;
};
export type InitialStateType = Omit<UserDataType, 'id'> & {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  firstNameError: string;
  surnameError: string;
  emailError: string;
  roomIdError: string;
  titleError: string;
};
export type FormErrorContextProviderType = {
  isFormError: boolean;
  setIsFormError: React.Dispatch<React.SetStateAction<boolean>>;
};
