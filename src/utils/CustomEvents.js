export const newAliasEvent = (newAlias, address) => {
    return new CustomEvent('newAlias', {
        detail: {
            message: "New Alias",
            newAlias: newAlias,
            address: address
        }
    })};
export const newNetworkDetailsEvent = (newNetwork) =>{
    return new CustomEvent('newNetwork', {
        detail: {
            newNetwork: newNetwork,
        }
    })
}
export const newAddressDetailsEvent = (newAddress) =>{
    return new CustomEvent('newAddress', {
        detail: {
            newAddress: newAddress,
        }
    })
}