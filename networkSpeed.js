import NetworkSpeed from 'network-speed'; 
import ping from 'ping';

const testNetworkSpeed = new NetworkSpeed();

const hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];

export const downloadSpeed = async() =>{
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    return speed;
}

export const uploadSpeed = async() =>{
  try{
    const options = {
        hostname: 'www.google.com',
        port: 80,
        path: '/catchers/544b09b4599c1d0200000289',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const fileSizeInBytes = 2000000
      const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
      return speed;
    }
   catch (err) {
    console.log('Error uoload speed',err)
  }
}

export const testPing = () =>{
    hosts.forEach(function(host){
        ping.sys.probe(host, function(isAlive){
            var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
            console.log(msg);
          return msg;
        });
    });
}

export const runFunc = async(limit, speedCallback) => {
    let count = 0;
    console.log('count', count);
    if(++count !== limit) {
      return  await speedCallback();
    }
}
