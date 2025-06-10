const createResponseToClient = (success: boolean, status: number, message:string, data?:any) => {
    return data? {
        success,
        status,
        message,
        data
    } : {
        success,
        status,
        message
    }
}

export default createResponseToClient