const { exec } = require('child_process');

// Run the SSH command
exec('ssh -R 80:localhost:5000 serveo.net', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }
  const regex = /Forwarding\s*(http:\/\/.*)\s*-> localhost:5000/;
  const match = stdout.match(regex);
  const hostURL = match ? match[1] : "localhost:5000";
  console.log(`Host URL: ${hostURL}`);

  // Use the extracted hostURL value
  module.exports = {
    botToken: "7136354947:AAFSqq7Ayc6v9Ns9isbyn6K0yCeHAsyePao", // Modify your bot TOKEN here
    hostURL: hostURL,
  };
});
