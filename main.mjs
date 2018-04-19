import App from 'turbo-serv'

const app = new App()
const router = app.getRouter()

router.get('/', function() {
  this.res.send('Hello World')
})

router.get('/user', function() {
  this.res.send(`Hi User!. Your id is ${this.param}`)
})

router.get('/user/edit', function() {
  this.res.send(`Your id is ${this.param}. This is an edit route.`)
})

router.get('/user/delete', function() {
  this.res.send(`Your id is ${this.param}. Delete user logic goes here.`)
})

app.listen(3000)
