type GeoCoordinates = {
  lat: string;
  long: string;
};

type Address = {
  city: string;
  geolocation: GeoCoordinates;
  number: number;
  street: string;
  zipcode: string;
};

type Name = {
  firstname: string;
  lastname: string;
};

export type User = {
  address: Address;
  email: string;
  id: number;
  name: Name;
  password: string;
  phone: string;
  username: string;
};
