// This file is auto-generated

export interface Response {
  pros: ApiProfessionals[];
}

export interface ApiProfessionals {
  id: number;
  name: string;
  email: string;
  rating: number;
  address: Address;
}

export interface Address {
  address_line_1: string;
  address_line_2: string;
  postcode: string;
  town: string;
}
