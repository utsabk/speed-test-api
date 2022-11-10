import express from 'express';
import { downloadSpeed, uploadSpeed, testPing } from './networkSpeed.js'
import { speedTest } from './fast.js';
import { universalTestSpeed } from './universalSpeedTest.js';
// import { getNetworkBandwidth } from './nativeSpeedTest.js';
const app = express();


app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/download', async (req, res) => {
    // const speed = await downloadSpeed()

    // if(!speed){
    //     return res.send('');       
    // }
    // console.log('download speed',speed);
    const arr = ['300', '400', '350', '355', '356', '380' , '401', '402', '403']
    const fakeSpeed = arr[Math.floor(Math.random()*arr.length)]
    console.log('fakeSpeed',fakeSpeed)
    res.send(fakeSpeed); 
    //setInterval(await runFunc(5,downloadSpeed),1000);
});

app.get('/upload', async(req, res) => {
    // const speed = await uploadSpeed();
    // if(!speed){
    //    return res.send('');         
    // }
    // console.log('upload speed',speed);
    // res.send(speed.mbps);
    const arr = ['45', '43', '52', '34','48', '53', '54', '55', '45']
    const fakeSpeed = arr[Math.floor(Math.random()*arr.length)]
    console.log('fakeSpeed',fakeSpeed)

    res.send(fakeSpeed); 
});

app.get('/ping', (req, res) => {
    const ping = testPing();
    res.send(ping);
})

app.get('/fast', async (req, res) => {
    const spd = await speedTest();
    res.send(spd);
})

app.get('/universal', async (req, res) => {
    const spd = await universalTestSpeed();
    res.send(spd);
})

app.listen(8000, ()=>{ 
    console.log('App is listening on port 8000');
})