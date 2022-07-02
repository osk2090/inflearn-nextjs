import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

//라우터
app.get("/test", (req: express.Request, res) => {
  res.send({ hello: "world" });

  // console.log(req.get("111"));
  // res.send({ name: "oh eun suk",age:30, friends: ["a", "b", "c"]});
});

app.post("/test", (req, res) => {
  res.send({ person: "osk"})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})