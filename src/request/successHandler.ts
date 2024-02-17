import { AxiosResponse } from "axios";
import codeMessage, { CodeMessageType } from "./codeMessage";
import { notification } from 'antd'
type SuccessHandlerProps = {
    response: any;
    options: { notifyOnSuccess?: boolean, notifyOnError?: boolean };
};
const successHandler = ({ response, options = { notifyOnSuccess: false, notifyOnError: true } }: SuccessHandlerProps) => {
    const { data, status } = response;
    const responseMessage = data?.data && data.message;
    const message = responseMessage || codeMessage[status as keyof CodeMessageType];    
    if (data?.data && data?.success) {
        if (options.notifyOnSuccess) {
            notification.config({
                duration: 2,
                maxCount: 2,
            })
            notification.success({
                message: `Request success`,
                description: message,
            });
        }
    } else {        
        if (options.notifyOnError) {
            notification.config({
                duration: 4,
                maxCount: 2,
            })
            notification.error({
                message: `Request error ${status}`,
                description: message,
            });
        }
    }
}
export default successHandler;