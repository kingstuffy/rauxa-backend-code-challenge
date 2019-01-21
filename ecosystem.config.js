module.exports = {
  apps: [{
    name: 'rauxa-backend-code-challenge',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-164-53-114.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/rauxa.pem',
      ref: 'origin/master',
      repo: 'https://github.com/kingstuffy/rauxa-backend-code-challenge.git',
      path: '/home/ubuntu/rauxa-backend-code-challenge',
      'post-deploy': 'source .env && npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
