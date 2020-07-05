import { getUniqueId, getManufacturer, getPhoneNumber, getModel } from 'react-native-device-info';
import { asyncTryCatchReq, api } from '~/util/request';

export async function sendForgetToServer(content) {
    const uniqueId = getUniqueId();
    const phoneNumber = await getPhoneNumber();
    const manufacturer = await getManufacturer();
    const model = await getModel();
    const stringifiedDevice = JSON.stringify({
        uniqueId,
        phoneNumber,
        manufacturer,
        model,
    });
    asyncTryCatchReq({
        method: 'post',
        url: api.postForget,
        data: {
            data: content,
            device: stringifiedDevice,
        },
    }).then();
}