import express;
const app = express();
const port = 1245;
app.get('/', (req, res) => {
  app.use(__dirname, "App");
});
app.get('', (req, res) => {
});
app.listen(port, (err) => {
  if (err) {
    throw new Error();
  }
});
