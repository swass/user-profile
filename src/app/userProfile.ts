export class UserProfile{
    name: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    phoneNumber: string;
    dob: Date;
    address1: string;
    city: string;
    state: string;
    pincode: string;
    

    constructor() {       
    }

    states: string[] = [
        'Andaman and Nicobar Islands',
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chandigarh',
        'Chhattisgarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Goa',
        'Gujurat',
        'Haryana',
        'Himachal Pradesh',
        'Jammu and Kashmir',
        'Jharkhand',
        'Karnataka',
        'Kerela',
        'Ladakh',
        'Lakshadweep',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'NCT of Delhi',
        'Odisha',
        'Puducherry',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttarakhand',
        'Uttar Pradesh',
        'West Bengal'
    ];
}