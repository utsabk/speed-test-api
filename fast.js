import FastSpeedtest from 'fast-speedtest-api';

const speedtest = new FastSpeedtest({
    token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
    verbose: false, // default: false
    timeout: 10000, // default: 5000
    https: true, // default: true
    urlCount: 5, // default: 5
    bufferSize: 8, // default: 8
    unit: FastSpeedtest.UNITS.Mbps, // default: Bps
    proxy: 'http://optional:auth@my-proxy:123' // default: undefined
});

export const speedTest = async() =>{
    try{
        const res = await speedtest.getSpeed();
        console.log('res:',res);

    }catch(err){
        console.error(err)
    }
}