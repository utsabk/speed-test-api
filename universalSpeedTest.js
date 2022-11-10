import { UniversalSpeedtest, SpeedUnits } from "universal-speedtest";

const universalSpeedtest = new UniversalSpeedtest({
    measureUpload: true,
    downloadUnit: SpeedUnits.Mbps,
    uploadUnit:SpeedUnits.Mbps,
    wait:false
});

export const universalTestSpeed = async() =>{;
    try{
        const result = await universalSpeedtest.runSpeedtestNet();
        console.log('Result:',result);
        console.log(`Ping: ${result.ping} ms`);
        console.log(`Download speed: ${result.downloadSpeed} MBps`);
        console.log(`Upload speed: ${result.uploadSpeed} Mbps`);
    }catch(err){
        console.log('Error:',err);
    }
    }