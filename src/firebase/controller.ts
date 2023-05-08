import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { AccountType, AddAccountType, AddDeviceType, AddNumberingType, AddRoleType, AddServiceType, DeviceType, NumberingType, RoleType, ServiceType } from "../type/types";
import { Account } from "../store/features/accountSlice";

export async function getAllUser() {
    try {
        const docRef = doc(db, "users", "Z7NcfBWz48hr9ZZAelJrsZKggdy1");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const userData = docSnap.data();
            console.log(userData);
            return userData;
        } else {
            console.log("khong tim thay")
        }
    } catch (error) {
        // I would suggest you throw an error
        console.log('Error getting User Information:', error);
        return `NOT FOUND: ${error}`;
    }
}
//get device collection
export const deviceCollection = collection(db, "device");
//get device by id
export const getDeviceByID = async (key: string) => {
    const getDevice = doc(db, "device", key);
    const docSnap = await getDoc(getDevice);
    if (docSnap.exists()) {
        const newObj = {
            key: docSnap.id,
            ...docSnap.data()
        }
        return newObj;
    }
}
//add device
export const addDevice = async (device: AddDeviceType) => {
    const newDevice = await addDoc(deviceCollection, { ...device });
    console.log(`them thanh cong :${newDevice.path}`)
}
//update device
export const updateDevice = async (key: string, device: DeviceType) => {
    const getDevice = doc(db, "device", key);
    await setDoc(getDevice, device);
}

//get service collection
export const serviceCollection = collection(db, "services");
//add service
export const addService = async (service: AddServiceType) => {
    const getService = await addDoc(serviceCollection, { ...service });
    console.log(`Thêm thành công: ${getService.path}`)
}
//get service by id
export const getServiceByID = async (key: string) => {
    const getService = doc(db, "services", key);
    const docSnap = await getDoc(getService);
    if (docSnap.exists()) {
        const newObj = {
            key: docSnap.id,
            ...docSnap.data()
        }
        return newObj;
    }
}
//update service
export const updateService = async (key: string, service: ServiceType) => {
    const getService = doc(db, "services", key);
    await setDoc(getService, service);
}
//get numbering collection
export const numberingCollection = collection(db, "numberings");
//add numbering
export const addNumbering = async (number: AddNumberingType) => {
    const getNumbering = await addDoc(numberingCollection, { ...number });
    console.log(`Thêm thành công: ${getNumbering.path}`)
}
//get numbering by id
export const getNumberingByID = async (key: string) => {
    const getNumbering = doc(db, "numberings", key);
    const docSnap = await getDoc(getNumbering);
    if (docSnap.exists()) {
        const newObj = {
            key: docSnap.id,
            ...docSnap.data()
        }
        return newObj;
    }
}
//update numbering
export const updateNumbering = async (key: string, numbering: NumberingType) => {
    const getNumbering = doc(db, "services", key);
    await setDoc(getNumbering, numbering);
}
//get role collection
export const roleCollection = collection(db, "roles");
//add role
export const addRole = async (role: AddRoleType) => {
    const getData = await addDoc(roleCollection, { ...role });
    console.log(`Thêm thành công: ${getData.path}`)
}
//get role by id
export const getRoleByID = async (key: string) => {
    const getDate = doc(db, "roles", key);
    const docSnap = await getDoc(getDate);
    if (docSnap.exists()) {
        const newObj = {
            key: docSnap.id,
            ...docSnap.data()
        }
        return newObj;
    }
}
//update role
export const updateRole = async (key: string, role: RoleType) => {
    const getDate = doc(db, "roles", key);
    await setDoc(getDate, role);
}
//get collection account
export const accountCollection = collection(db,"accounts");

//add account
export const addAccount = async (account: AddAccountType,key:string) => {
    const getData = await setDoc(doc(db,"accounts",key),account);
    console.log('Thêm thành công!');
}
//get account by id
export const getAccountByID =async (key:string) => {
    const getDate = doc(db, "accounts", key);
    const docSnap = await getDoc(getDate);
    if (docSnap.exists()) {
        const newObj = {
            key: docSnap.id,
            ...docSnap.data()
        }
        return newObj;
    }
}
//update account
export const updateAccount = async (key:string,account:AccountType)=>{
    const getDate = doc(db, "accounts", key);
    await setDoc(getDate, account);
}