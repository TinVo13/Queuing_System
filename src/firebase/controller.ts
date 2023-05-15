import { addDoc, collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { AccountType, AddAccountType, AddDeviceType, AddNumberingType, AddRoleType, AddServiceType, NumberingType, UpdateDeviceType, UpdateRoleType, UpdateServiceType } from "../type/types";

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
export const GetDeviceByID = async (key: string) => {
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
export const AddDevice = async (device: AddDeviceType) => {
    const newDevice = await addDoc(deviceCollection, { ...device });
    console.log(`them thanh cong :${newDevice.path}`)
}
//update device
export const UpdateDevice = async (key: string, device: UpdateDeviceType) => {
    const getDevice = doc(db, "device", key);
    await setDoc(getDevice, device);
}

//get service collection
export const serviceCollection = collection(db, "services");
//add service
export const AddService = async (service: AddServiceType) => {
    const getService = await addDoc(serviceCollection, { ...service });
    console.log(`Thêm thành công: ${getService.path}`)
}
//get service by id
export const GetServiceByID = async (key: string) => {
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
export const UpdateService = async (key: string, service: UpdateServiceType) => {
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
export const AddRole = async (role: AddRoleType) => {
    const getData = await addDoc(roleCollection, { ...role });
    console.log(`Thêm thành công: ${getData.path}`)
}
//get list role
export const GetAllRole = async () => {
    const querySnapshot = await getDocs(roleCollection);
    const documents = querySnapshot.docs.map(doc => doc.data());
    const roleName:string[] = [];
    documents.map(data=>roleName.push(data.tenVaiTro))
    return roleName;
}
//get role by id
export const GetRoleByID = async (key: string) => {
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
export const UpdateRole = async (key: string, role: UpdateRoleType) => {
    const getDate = doc(db, "roles", key);
    await setDoc(getDate, role);
}
//get collection account
export const accountCollection = collection(db, "accounts");

//add account
export const AddAccount = async (account: AddAccountType, key: string) => {
    const getData = await setDoc(doc(db, "accounts", key), account);
    console.log('Thêm thành công!: ' + getData);
}
//get account by id
export const GetAccountByID = async (key: string) => {
    const getData = doc(db, "accounts", key);
    const docSnap = await getDoc(getData);
    if (docSnap.exists()) {
        const newObj = {
            key: docSnap.id,
            ...docSnap.data()
        }
        return newObj;
    }
}
//update account
export const UpdateAccount = async (key: string, account: AccountType) => {
    const getDate = doc(db, "accounts", key);
    await setDoc(getDate, account);
}