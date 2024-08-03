const Component = {
    collectionsBtn : ((btnData)=>(
        `${btnData.map((btnName)=> `<button class="px-4 py-2 bg-gray-200 font-releway-semi-base text-gray-700 rounded-full">${btnName}</button>`).join('')}`
    ))
}
export default Component;