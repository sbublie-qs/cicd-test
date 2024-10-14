const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/CICDiFlow.iflw', (req, res) => {
    res.sendFile(path.join(__dirname, 'integration-content', 'integration-artefacts', 'CICDiFlow', 'src', 'main', 'resources', 'scenarioflows', 'integrationflow' , 'CICDiFlow.iflw'));
  });

app.listen(port, () => {
  console.log(`BPMN viewer app listening at http://localhost:${port}`);
});
